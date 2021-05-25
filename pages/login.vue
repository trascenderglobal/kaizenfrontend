<template>
  <div class="ks-container">
    <ks-card>
      <section class="main w-full h-full px-8 py-12 xl:w-2/5 lg:px-16">
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
          <form id="login" @submit.prevent>
            <ks-input
              v-model="email"
              :label="$t('login.email')"
              type="email"
              @blur="$v.email.$touch"
            >
              <template #prepend-icon>
                <iconly-icon
                  name="profile"
                  class="fill-current text-blue-kaizen"
                />
              </template>
            </ks-input>
            <ks-input
              v-model="password"
              :label="$t('login.password')"
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
                    relative
                    right-2
                    cursor-pointer
                    fill-current
                    stroke-current
                    text-gray-dark
                    hover:text-gray-600
                  "
                />
              </template>
            </ks-input>
          </form>
        </div>
        <div class="flex flex-wrap justify-between pt-2">
          <div class="pb-2 space-x-2 xl:pb-0">
            <nuxt-link
              :to="localePath('/signup')"
              class="text-gray-dark hover:text-gray-600"
              >{{ $t('login.register') }}</nuxt-link
            >
            <nuxt-link
              :to="localePath('/forgot-password')"
              class="text-gray-dark hover:text-gray-600"
              >{{ $t('login.forgot') }}</nuxt-link
            >
          </div>
          <ks-btn form="login" class="w-full lg:w-auto" type="submit">
            {{ $t('login.login') }}
          </ks-btn>
        </div>
      </section>
      <section
        class="absolute top-0 right-0 hidden w-3/5 min-h-full bg-black xl:block"
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
  auth: 'guest',
  data() {
    return {
      email: '',
      password: '',
      showPassword: false,
    }
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
      link: [i18nHead.link],
    }
  },
})
</script>

<style scoped>
.ks-container {
  @apply flex h-full mx-auto py-16 px-2 sm:px-16 lg:px-24;
}

.hero {
  background-image: url('~/assets/img/auth.png');
  @apply w-full h-full bg-no-repeat bg-center bg-cover absolute bg-black top-0 left-0 right-0 bottom-0;
}

.main > div {
  @apply 2xl:px-16;
}
</style>
