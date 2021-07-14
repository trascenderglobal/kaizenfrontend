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
            {{ $t('login.login') }}
          </h2>
          <h3 class="pt-2 text-lg text-gray-dark">
            {{ $t('login.subtitle') }}
          </h3>
        </div>
        <div class="pt-4 space-y-2">
          <form id="login" @submit.prevent="login">
            <ks-input
              v-model="email"
              :label="$t('login.email')"
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
              v-model="password"
              :label="$t('login.password')"
              :type="showPassword ? 'text' : 'password'"
              :error-messages="passwordErrors"
              @blur="$v.password.$touch"
              @click:append="showPassword = !showPassword"
            >
              <template #prepend-icon>
                <iconly-icon
                  name="password"
                  fill="none"
                  view-box="0 0 24 27"
                  class="relative stroke-current left-1 text-blue-kaizen"
                />
              </template>
              <template #append-icon>
                <iconly-icon
                  :name="showPassword ? 'hide' : 'show'"
                  class="
                    relative
                    right-2
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
            <nuxt-link :to="localePath('/signup')" class="text-link-blue">{{
              $t('login.register')
            }}</nuxt-link>
            <nuxt-link
              :to="localePath('/forgot-password')"
              class="
                text-gray-dark
                hover:text-blue-darker
                transition
                duration-200
              "
              >{{ $t('login.forgot') }}</nuxt-link
            >
          </div>
          <ks-btn
            form="login"
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
              class="mt-4 bg-gray-lighter text-blue-kaizen"
              :title="$t(errorMessage)"
              :text="$t('login.error.text')"
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
      <section
        class="absolute top-0 right-0 hidden w-3/5 min-h-full bg-black lg:block"
      >
        <div class="hero"></div>
      </section>
    </ks-card>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { required, email, minLength } from 'vuelidate/lib/validators'

export default Vue.extend({
  name: 'LoginPage',
  auth: 'guest',
  data() {
    return {
      loading: false,
      error: false,
      errorMessage: '',
      email: '',
      password: '',
      showPassword: false,
    }
  },
  head(): object {
    const i18nHead = this.$nuxtI18nHead({ addSeoAttributes: true })
    return {
      title: this.$t('login.meta.title'),
      htmlAttrs: {
        ...i18nHead.htmlAttrs,
      },
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.$t('login.meta.description'),
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
    passwordErrors(): String[] {
      const errors: any[] = []
      if (!this.$v.password.$dirty) return errors
      if (!this.$v.password.required)
        errors.push(this.$t('forms.errors.required'))
      if (!this.$v.password.minLength)
        errors.push(this.$t('forms.errors.minLength', { length: 5 }))
      return errors
    },
  },
  methods: {
    async login(): Promise<void> {
      try {
        this.$v.$touch()
        if (this.$v.$invalid) return
        this.loading = true
        await this.$auth.loginWith('local', {
          data: {
            email: this.email,
            password: this.password,
          },
        })
        this.error = false
      } catch (error) {
        this.error = true
        if (error.response?.status === 401)
          this.errorMessage = 'login.error.title'
        else if (error.response?.status === 403)
          this.errorMessage = 'login.error.unverifiedEmail'
        else if (error.response?.status >= 500)
          this.errorMessage = 'login.error.serverError'
        else this.errorMessage = 'login.error.unknownError'
      } finally {
        this.loading = false
      }
    },
    // async verifyEmail(): Promise<void> {
    //   try {
    //   } catch (error) {}
    // },
  },
  validations() {
    return {
      email: {
        email,
        required,
      },
      password: {
        minLength: minLength(5),
        required,
      },
    }
  },
})
</script>

<style scoped>
.hero {
  background-image: url('~/assets/img/auth.png');
  @apply w-full h-full bg-no-repeat bg-center bg-cover absolute bg-black top-0 left-0 right-0 bottom-0;
}

.main {
  @apply w-full h-full p-8 lg:w-2/5 xl:px-16;
}

.main > div {
  @apply 2xl:px-16;
}

.alert-enter-active,
.alert-leave-active {
  @apply transition duration-200;
}
.alert-enter,
.alert-leave-to {
  @apply transform translate-x-3 opacity-0;
}
</style>
