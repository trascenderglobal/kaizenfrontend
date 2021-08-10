<template>
  <div>
    <ks-card row>
      <section class="main scroller">
        <img
          class="w-1/2 mx-auto"
          :src="require('@/assets/img/kaizen-black.png')"
          alt="Kaizen Squad"
        />
        <div class="pt-20">
          <h2 class="text-2xl font-medium text-blue-kaizen">
            {{ $t('forgotPassword.recover') }}
          </h2>
          <h3 class="pt-2 text-lg text-gray-dark">
            {{ $t('forgotPassword.fill') }}.
          </h3>
        </div>
        <div class="pt-4 space-y-2">
          <form id="resetPassword" @submit.prevent="resetPassword">
            <ks-input
              v-model="email"
              :label="$t('forgotPassword.email')"
              type="email"
              :error-messages="emailErrors"
              @blur="$v.email.$touch"
            >
              <template #prepend-icon>
                <iconly-icon
                  name="profile"
                  class="fill-current transition text-blue-kaizen"
                />
              </template>
            </ks-input>
            <ks-input
              v-model="newPassword"
              :label="$t('forgotPassword.newPassword')"
              :type="showPassword ? 'text' : 'password'"
              :error-messages="newPasswordErrors"
              @blur="$v.newPassword.$touch"
              @click:append="showPassword = !showPassword"
            >
              <template #prepend-icon>
                <iconly-icon
                  name="lock"
                  class="fill-current text-blue-kaizen"
                />
              </template>
              <template #append-icon>
                <iconly-icon
                  :name="showPassword ? 'hide' : 'show'"
                  class="
                    cursor-pointer
                    fill-current
                    text-gray-dark
                    hover:text-gray-600
                    transition
                    duration-200
                  "
                />
              </template>
            </ks-input>
            <ks-input
              v-model="confirmPassword"
              :label="$t('forgotPassword.confirmPassword')"
              :type="showPassword ? 'text' : 'password'"
              :error-messages="confirmPasswordErrors"
              @blur="$v.confirmPassword.$touch"
              @click:append="showPassword = !showPassword"
            >
              <template #prepend-icon>
                <iconly-icon
                  name="lock"
                  class="fill-current text-blue-kaizen"
                />
              </template>
              <template #append-icon>
                <iconly-icon
                  :name="showPassword ? 'hide' : 'show'"
                  class="
                    cursor-pointer
                    fill-current
                    text-gray-dark
                    hover:text-gray-600
                    transition
                    duration-200
                  "
                />
              </template>
            </ks-input>
          </form>
        </div>
        <div class="flex flex-wrap justify-between pt-2">
          <div class="pb-2 space-x-2">
            <nuxt-link
              :to="localePath('/login')"
              class="text-gray-dark hover:text-gray-600 transition duration-200"
              >{{ $t('forgotPassword.backToLogin') }}</nuxt-link
            >
          </div>
          <ks-btn
            v-if="!reset"
            form="resetPassword"
            class="w-full 2xl:w-auto"
            :loading="loading"
            type="submit"
            large
          >
            {{ $t('login.login') }}
          </ks-btn>
          <transition name="alert">
            <ks-alert
              v-show="error"
              class="mt-4 bg-red-kaizen text-white"
              :title="$t('forgotPassword.error.title')"
              :text="$t('forgotPassword.error.text')"
            >
              <template #icon>
                <iconly-icon
                  name="danger-circle"
                  class="fill-current"
                  :size="1.3"
                />
              </template>
            </ks-alert>
          </transition>
        </div>
      </section>
      <section class="hero-wrapper">
        <div class="hero"></div>
      </section>
    </ks-card>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { required, email, minLength, sameAs } from 'vuelidate/lib/validators'

export default Vue.extend({
  name: 'ResetPasswordPage',
  auth: 'guest',
  data() {
    return {
      loading: false,
      error: false,
      email: '',
      newPassword: '',
      confirmPassword: '',
      showPassword: false,
      reset: false,
    }
  },
  head(): object {
    const i18nHead = this.$nuxtI18nHead({ addSeoAttributes: true })
    return {
      title: this.$t('forgotPassword.meta.title'),
      htmlAttrs: {
        ...i18nHead.htmlAttrs,
      },
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.$t('forgotPassword.meta.description'),
        },
        ...i18nHead.meta,
      ],
    }
  },
  computed: {
    emailErrors(): String[] {
      const errors: any[] = []
      if (!this.$v.email.$dirty) return errors
      if (!this.$v.email.required) errors.push(this.$t('forms.errors.required'))
      if (!this.$v.email.email) errors.push(this.$t('forms.errors.email'))
      return errors
    },
    newPasswordErrors(): String[] {
      const errors: any[] = []
      if (!this.$v.newPassword.$dirty) return errors
      if (!this.$v.newPassword.required)
        errors.push(this.$t('forms.errors.required'))
      if (!this.$v.newPassword.minLength)
        errors.push(this.$t('forms.errors.minLength', { length: 5 }))
      return errors
    },
    confirmPasswordErrors(): String[] {
      const errors: any[] = []
      if (!this.$v.confirmPassword.$dirty) return errors
      if (!this.$v.confirmPassword.required)
        errors.push(this.$t('forms.errors.required'))
      if (!this.$v.confirmPassword.sameAsPassword)
        errors.push(this.$t('forms.errors.sameAsPassword'))
      return errors
    },
  },
  beforeMount() {
    if (!this.$route.query.token) this.$router.push(this.localePath('/login'))
  },
  methods: {
    async resetPassword() {
      try {
        this.$v.$touch()
        if (this.$v.$invalid) return
        this.loading = true
        await this.$axios.$post('/password/reset', {
          token: this.$route.query.token,
          email: this.email,
          password: this.newPassword,
          password_confirmation: this.confirmPassword,
        })
        this.reset = true
        await this.$auth.loginWith('local', {
          data: {
            email: this.email,
            password: this.newPassword,
          },
        })
        this.error = false
      } catch (error) {
        this.error = true
      } finally {
        this.loading = false
      }
    },
  },
  validations() {
    return {
      email: {
        email,
        required,
      },
      newPassword: {
        minLength: minLength(5),
        required,
      },
      confirmPassword: {
        required,
        sameAsPassword: sameAs('newPassword'),
      },
    }
  },
})
</script>

<style scoped>
.hero-wrapper {
  @apply relative top-0 right-0 hidden w-3/5 min-h-full bg-black lg:block;
}

.hero {
  background-image: url('~/assets/img/auth2.png');
  @apply w-full h-full bg-no-repeat bg-center bg-cover absolute bg-black top-0 left-0 right-0 bottom-0;
}

.main {
  @apply w-full min-h-full max-h-full p-8 overflow-y-auto lg:w-2/5 xl:px-16;
}

.main > div {
  @apply 2xl:px-16;
}

.alert-enter-to,
.alert-leave {
  @apply h-auto;
}

.alert-enter-active {
  @apply transition duration-200;
}
.alert-enter,
.alert-leave-to {
  @apply transform translate-x-3 opacity-0;
}
</style>
