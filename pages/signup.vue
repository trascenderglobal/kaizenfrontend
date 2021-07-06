<template>
  <div>
    <ks-card row>
      <section class="main scroller">
        <img
          class="w-1/2 mx-auto"
          :src="require('@/assets/img/kaizen-black.png')"
          alt="Kaizen Squad"
        />
        <div class="pt-8">
          <h2 class="text-2xl font-medium text-blue-kaizen">
            {{ $t('signup.signup') }}
          </h2>
        </div>
        <div class="pt-4 space-y-2">
          <form id="signup" @submit.prevent="register">
            <ks-input
              v-model="name"
              :label="$t('signup.name')"
              :error-messages="nameErrors"
              @blur="$v.name.$touch"
            >
              <template #prepend-icon>
                <iconly-icon
                  name="profile"
                  class="fill-current text-blue-kaizen"
                />
              </template>
            </ks-input>
            <ks-input
              v-model="lastname"
              :label="$t('signup.lastname')"
              :error-messages="lastnameErrors"
              @blur="$v.lastname.$touch"
            >
              <template #prepend-icon>
                <iconly-icon
                  name="edit"
                  class="fill-current text-blue-kaizen"
                />
              </template>
            </ks-input>
            <ks-input
              v-model="email"
              :label="$t('signup.email')"
              :error-messages="emailErrors"
              @blur="$v.email.$touch"
            >
              <template #prepend-icon>
                <iconly-icon
                  name="message"
                  class="fill-current text-blue-kaizen"
                />
              </template>
            </ks-input>
            <ks-input
              v-model="password"
              :label="$t('signup.password')"
              :type="showPassword ? 'text' : 'password'"
              :error-messages="passwordErrors"
              @blur="$v.password.$touch"
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
                  "
                />
              </template>
            </ks-input>
            <ks-input
              v-model="confirmPassword"
              :label="$t('signup.confirmPassword')"
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
                  "
                />
              </template>
            </ks-input>
            <div class="flex flex-wrap pl-2 text-gray-dark">
              <span class="w-full sm:w-auto">{{ $t('signup.iam') }}</span>
              <div class="flex justify-end flex-grow space-x-8">
                <ks-radio
                  id="1"
                  v-model.number="role"
                  class="hover:text-gray-600"
                  :item-value="1"
                  :label="$t('signup.employee')"
                />
                <ks-radio
                  id="2"
                  v-model.number="role"
                  class="hover:text-gray-600"
                  :item-value="0"
                  :label="$t('signup.employer')"
                />
              </div>
            </div>
            <div class="hint">
              {{ roleErrors.length ? roleErrors[0] : '' }}
            </div>
          </form>
        </div>
        <div class="flex flex-wrap justify-between pt-5">
          <div class="pb-2 space-x-2">
            <span class="text-gray-dark">{{ $t('signup.haveAccount') }}</span>
            <nuxt-link :to="localePath('/login')" class="text-link-blue">{{
              $t('signup.login')
            }}</nuxt-link>
          </div>
          <ks-btn
            form="signup"
            class="w-full 2xl:w-auto"
            type="submit"
            :loading="loading"
            large
          >
            {{ $t('signup.signup') }}
          </ks-btn>
          <transition name="alert">
            <ks-alert
              v-show="error"
              class="mt-4 bg-gray-lighter text-blue-kaizen"
              :title="$t('signup.error.title')"
              :text="$t('signup.error.text')"
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
import { required, email, minLength, sameAs } from 'vuelidate/lib/validators'

export default Vue.extend({
  name: 'SignupPage',
  auth: 'guest',
  data() {
    return {
      loading: false,
      error: false,
      name: '',
      lastname: '',
      email: '',
      password: '',
      confirmPassword: '',
      showPassword: false,
      role: null,
    }
  },
  head(): object {
    const i18nHead = this.$nuxtI18nHead({ addSeoAttributes: true })
    return {
      title: this.$t('signup.meta.title'),
      htmlAttrs: {
        ...i18nHead.htmlAttrs,
      },
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.$t('signup.meta.description'),
        },
        ...i18nHead.meta,
      ],
    }
  },
  computed: {
    nameErrors(): String[] {
      const errors: any[] = []
      if (!this.$v.name.$dirty) return errors
      if (!this.$v.name.required) errors.push(this.$t('forms.errors.required'))
      return errors
    },
    lastnameErrors(): String[] {
      const errors: any[] = []
      if (!this.$v.lastname.$dirty) return errors
      if (!this.$v.lastname.required)
        errors.push(this.$t('forms.errors.required'))
      return errors
    },
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
    confirmPasswordErrors(): String[] {
      const errors: any[] = []
      if (!this.$v.confirmPassword.$dirty) return errors
      if (!this.$v.confirmPassword.required)
        errors.push(this.$t('forms.errors.required'))
      if (!this.$v.confirmPassword.sameAsPassword)
        errors.push(this.$t('forms.errors.sameAsPassword'))
      return errors
    },
    roleErrors(): String[] {
      const errors: any[] = []
      if (!this.$v.role.$dirty) return errors
      if (!this.$v.role.required) errors.push(this.$t('forms.errors.required'))
      return errors
    },
  },
  methods: {
    async register(): Promise<void> {
      try {
        this.$v.$touch()
        if (this.$v.$invalid) return
        this.loading = true

        const res = await this.$axios.$post('/register', {
          name: this.name,
          last_name: this.lastname,
          email: this.email,
          password: this.password,
          password_confirmation: this.confirmPassword,
          role: this.role,
        })
        await this.$auth.setUserToken(res.token, res.token)
        this.error = false
        this.$router.push(this.localePath('/'))
      } catch (error) {
        this.error = true
      } finally {
        this.loading = false
      }
    },
  },
  validations() {
    return {
      name: {
        required,
      },
      lastname: {
        required,
      },
      email: {
        email,
        required,
      },
      password: {
        minLength: minLength(5),
        required,
      },
      confirmPassword: {
        required,
        sameAsPassword: sameAs('password'),
      },
      role: {
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
  @apply relative z-10 w-full h-full p-8 lg:w-2/5 xl:px-16;
}

.main > div {
  @apply 2xl:px-16;
}

.hint {
  @apply w-full text-right h-5 text-sm px-1 pt-0.5 text-red-400;
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
