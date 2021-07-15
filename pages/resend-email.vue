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
            {{ $t('resendEmail.title') }}
          </h2>
          <h3 class="pt-2 text-lg text-gray-dark">
            {{ $t('resendEmail.subtitle') }}
          </h3>
        </div>
        <div class="pt-4 space-y-2">
          <transition name="alert">
            <ks-alert
              v-if="sent"
              class="mb-5 bg-gray-lighter text-blue-kaizen"
              :title="$t('resendEmail.sent.title')"
              :text="$t('resendEmail.sent.text')"
            >
              <template #icon>
                <iconly-icon
                  name="danger-circle"
                  class="fill-current"
                  :size="1.3"
                />
              </template>
            </ks-alert>
            <form v-else id="resendEmail" @submit.prevent="resendEmail">
              <ks-input
                v-model="email"
                :label="$t('resendEmail.email')"
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
            </form>
          </transition>
        </div>
        <div class="flex flex-wrap justify-between pt-2">
          <div class="pb-2 space-x-2">
            <nuxt-link
              :to="localePath('/login')"
              class="
                text-gray-dark
                transition
                duration-200
                hover:text-blue-darker
              "
              >{{ $t('resendEmail.backToLogin') }}</nuxt-link
            >
          </div>
          <ks-btn
            v-if="!sent"
            form="resendEmail"
            class="w-full 2xl:w-auto"
            :loading="loading"
            type="submit"
            large
          >
            {{ $t('resendEmail.submit') }}
          </ks-btn>
          <transition name="alert">
            <ks-alert
              v-show="error"
              class="mt-4 bg-red-kaizen text-white"
              :title="$t('resendEmail.error.title')"
              :text="$t('resendEmail.error.text')"
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
import { required, email } from 'vuelidate/lib/validators'

export default Vue.extend({
  name: 'ResendEmailPage',
  auth: 'guest',
  data() {
    return {
      loading: false,
      error: false,
      email: '',
      sent: false,
    }
  },
  head(): object {
    const i18nHead = this.$nuxtI18nHead({ addSeoAttributes: true })
    return {
      title: this.$t('resendEmail.meta.title'),
      htmlAttrs: {
        ...i18nHead.htmlAttrs,
      },
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.$t('resendEmail.meta.description'),
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
  },
  methods: {
    async resendEmail() {
      try {
        this.$v.$touch()
        if (this.$v.$invalid) return
        this.loading = true
        await this.$axios.$post('/email/resend', {
          email: this.email,
        })
        this.sent = true
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
    }
  },
})
</script>

<style scoped>
.hero {
  background-image: url('~/assets/img/auth2.png');
  @apply w-full h-full bg-no-repeat bg-center bg-cover absolute bg-black top-0 left-0 right-0 bottom-0;
}

.main {
  @apply w-full h-full p-8 lg:w-2/5 xl:px-16;
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
