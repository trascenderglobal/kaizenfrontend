<template>
  <div class="ks-container">
    <ks-card class="flex-wrap">
      <section class="w-full h-full px-8 py-8 lg:w-2/5 lg:px-16">
        <img
          class="w-1/2 mx-auto"
          :src="require('@/assets/img/kaizen-black.png')"
          alt="Kaizen Squad"
        />
        <div class="pt-12 xl:px-16">
          <h2 class="text-2xl font-medium text-blue-kaizen">
            {{ $t('signup.signup') }}
          </h2>
        </div>
        <div class="pt-4 space-y-2 xl:px-16">
          <form id="signup" @submit.prevent="register">
            <ks-input
              v-model="name"
              :label="$t('signup.name')"
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
              @blur="$v.password.$touch"
              @click:append="showPassword = !showPassword"
            >
              <template #prepend-icon>
                <iconly-icon
                  name="password"
                  fill="none"
                  viewBox="0 0 24 27"
                  class="relative stroke-current left-1 text-blue-kaizen"
                />
              </template>
              <template #append-icon>
                <iconly-icon
                  :name="showPassword ? 'hide' : 'show'"
                  class="
                    cursor-pointer
                    fill-current
                    stroke-current
                    text-gray-dark
                    hover:text-gray-500
                  "
                />
              </template>
            </ks-input>
            <ks-input
              v-model="confirmPassword"
              :label="$t('signup.confirmPassword')"
              :type="showPassword ? 'text' : 'password'"
              @blur="$v.confirmPassword.$touch"
              @click:append="showPassword = !showPassword"
            >
              <template #prepend-icon>
                <iconly-icon
                  name="password"
                  fill="none"
                  viewBox="0 0 24 27"
                  class="relative stroke-current left-1 text-blue-kaizen"
                />
              </template>
              <template #append-icon>
                <iconly-icon
                  :name="showPassword ? 'hide' : 'show'"
                  class="
                    cursor-pointer
                    fill-current
                    stroke-current
                    text-gray-dark
                    hover:text-gray-500
                  "
                />
              </template>
            </ks-input>
            <div class="flex flex-wrap pl-2 text-gray-dark">
              <span class="w-full sm:w-auto">{{ $t('signup.iam') }}</span>
              <div class="flex justify-end flex-grow space-x-8">
                <ks-radio
                  id="1"
                  v-model="role"
                  :item-value="1"
                  :label="$t('signup.employee')"
                />
                <ks-radio
                  id="2"
                  v-model="role"
                  :item-value="0"
                  :label="$t('signup.employer')"
                />
              </div>
            </div>
          </form>
        </div>
        <div class="flex flex-wrap justify-between pt-5 xl:px-16">
          <div class="pb-2 space-x-2 xl:pb-0">
            <span class="text-gray-dark">{{ $t('signup.haveAccount') }}</span>
            <nuxt-link :to="localePath('/login')" class="text-blue-kaizen">{{
              $t('signup.login')
            }}</nuxt-link>
          </div>
          <ks-btn
            form="signup"
            class="w-full lg:w-auto"
            type="submit"
            :disabled="loading"
          >
            {{ $t('signup.signup') }}
          </ks-btn>
        </div>
      </section>
      <section
        class="absolute top-0 right-0 hidden w-3/5 min-h-full bg-black lg:block"
      ></section>
    </ks-card>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { required, email, minLength, sameAs } from 'vuelidate/lib/validators'

export default Vue.extend({
  auth: 'guest',
  data() {
    return {
      loading: false,
      name: '',
      lastname: '',
      email: '',
      password: '',
      confirmPassword: '',
      showPassword: false,
      role: -1,
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
      link: [i18nHead.link],
    }
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
      } catch (error) {
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
.ks-container {
  @apply flex h-full mx-auto py-16 px-2 sm:px-16 lg:px-24;
}
</style>
