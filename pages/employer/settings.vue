<template>
  <ks-card class="h-full p-8">
    <div class="settings-header">
      <h1 class="text-3xl font-medium">
        {{ $t('settings.settings') }}
      </h1>
    </div>
    <h1 class="title">
      {{ $t('settings.header') }}
    </h1>
    <div class="flex flex-wrap justify-between pt-6">
      <div class="flex flex-grow lg:flex-grow-0 space-x-4">
        <ks-user-img
          :initials="profile.name"
          :image-url="profile.profile_picture_URL"
          large
        />
        <div class="flex flex-col space-y-2">
          <span class="font-medium text-blue-kaizen">{{
            $t('settings.account')
          }}</span>
          <span class="font-light text-gray-dark">{{
            $t('settings.accountCreatedOn')
          }}</span>
          <span class="font-light text-gray-dark">{{
            profile.created_at ? $d(profile.created_at) : $t('settings.noDate')
          }}</span>
        </div>
      </div>
      <div class="flex flex-col space-y-2 min-w-full lg:min-w-40">
        <span class="font-medium text-blue-kaizen">{{
          $t('settings.language')
        }}</span>
        <ks-language-list />
      </div>
    </div>
    <hr class="my-8" />
    <div class="flex flex-wrap">
      <div class="flex-auto pr-2">
        <h1 class="title">{{ $t('settings.subscription') }}</h1>
        <div class="py-2">
          <ks-btn
            v-if="!$auth.user.payment_status || !$auth.user.payment_date"
            color="light"
            large
            font="font-normal"
            @click="showCheckout"
            >{{ $t('settings.subscribe') }}
          </ks-btn>
        </div>
        <div
          v-if="!$auth.user.payment_status || !$auth.user.payment_date"
          role="button"
          class="cursor-pointer"
          @click.stop="showCode = true"
        >
          <span class="py-2 text-gray-darker font-light"
            >{{ $t('settings.subscribeWithCode') }}
          </span>
          <button type="button" class="py-2 text-link-blue">
            {{ $t('settings.digits', { digits }) }}
          </button>
        </div>
        <div v-else>
          <span class="py-2 text-gray-darker font-light"
            >{{ $t('settings.subscribed') }}
          </span>
        </div>
      </div>
      <div class="flex-auto">
        <h1 class="title">{{ $t('settings.deleteAccount') }}</h1>
        <div class="py-2">
          <ks-btn
            color="light"
            large
            font="font-normal"
            @click="showDelete = true"
            >{{ $t('settings.deleteMyAccount') }}
          </ks-btn>
        </div>
        <span class="block py-2 text-gray-darker font-light"
          >{{ $t('settings.deleteLeaveSure') }}
        </span>
      </div>
    </div>
    <template #outer>
      <transition name="edit">
        <div v-if="showCode" class="modal">
          <div class="w-11/12 lg:w-3/5">
            <ks-card class="p-8" col>
              <div class="flex flex-col pt-16 flex-grow items-center space-y-8">
                <h1 class="text-3xl font-medium text-center text-blue-kaizen">
                  {{ $t('settings.subscribe') }}
                </h1>
                <ks-user-img
                  :initials="profile.name"
                  :image-url="profile.profile_picture_URL"
                  large
                />
                <hr class="self-stretch" />
                <p
                  class="text-lg text-center"
                  :class="invalidCode ? 'text-red-kaizen' : 'text-blue-kaizen'"
                >
                  {{
                    invalidCode
                      ? $t('settings.invalidCode', { digits })
                      : $t('settings.enterCode', { digits })
                  }}
                </p>
                <ks-code-input
                  v-model="codeDigits"
                  :length="digits"
                  :error="invalidCode"
                />
                <div
                  class="flex space-x-6 pt-8 flex-grow items-end justify-center"
                >
                  <ks-btn
                    class="text-xl"
                    color="darker-gray"
                    text
                    @click="showCode = false"
                    >{{ $t('settings.cancel') }}</ks-btn
                  >
                  <ks-btn
                    class="text-xl"
                    color="success"
                    :loading="loading"
                    @click="subWithCode"
                    >{{ $t('settings.subscribe') }}</ks-btn
                  >
                </div>
              </div>
            </ks-card>
          </div>
        </div>
      </transition>
      <transition name="edit">
        <div v-if="showSubscribe" class="modal">
          <div class="w-11/12 lg:w-3/5">
            <ks-card class="p-8" col>
              <div class="flex flex-col pt-16 flex-grow items-center space-y-8">
                <h1 class="text-3xl font-medium text-center text-blue-kaizen">
                  {{ $t('settings.subscribe') }}
                </h1>
                <ks-user-img
                  :initials="profile.name"
                  :image-url="profile.profile_picture_URL"
                  large
                />
                <hr class="self-stretch" />
                <div class="checkout-form px-4 self-stretch">
                  <div id="payment-request"></div>
                </div>
                <p class="text-lg text-blue-kaizen text-center">
                  {{ $t('settings.or') }}
                </p>
                <div class="checkout-form px-4 self-stretch">
                  <div id="card-element" class="pb-2 border-b"></div>
                </div>
                <div
                  class="flex space-x-6 pt-8 flex-grow items-end justify-center"
                >
                  <ks-btn
                    class="text-xl"
                    color="darker-gray"
                    text
                    @click="cancelCheckout"
                    >{{ $t('settings.cancel') }}</ks-btn
                  >
                  <ks-btn class="text-xl" color="success">{{
                    $t('settings.subscribe')
                  }}</ks-btn>
                </div>
              </div>
            </ks-card>
          </div>
        </div>
      </transition>
      <transition name="edit">
        <div v-if="showDelete" class="modal">
          <div class="w-11/12 lg:w-3/5">
            <ks-card class="p-8" col>
              <div class="flex flex-col pt-16 flex-grow items-center space-y-8">
                <h1 class="text-3xl font-medium text-center text-blue-kaizen">
                  {{ $t('settings.deleteMyAccount') }}
                </h1>
                <ks-user-img
                  :initials="profile.name"
                  :image-url="profile.profile_picture_URL"
                  large
                />
                <hr class="self-stretch" />
                <p class="text-lg text-blue-kaizen text-center">
                  {{ $t('settings.deleteLeave') }}
                </p>
                <p class="text-2xl font-medium text-blue-kaizen text-center">
                  {{ $t('settings.deleteSure') }}
                </p>
                <div
                  class="flex space-x-6 pt-8 flex-grow items-end justify-center"
                >
                  <ks-btn
                    class="text-xl"
                    color="darker-gray"
                    text
                    @click="showDelete = false"
                    >{{ $t('settings.cancel') }}</ks-btn
                  >
                  <ks-btn
                    class="text-xl"
                    color="danger"
                    :loading="deleting"
                    @click="deleteProfile"
                    >{{ $t('settings.delete') }}</ks-btn
                  >
                </div>
              </div>
            </ks-card>
          </div>
        </div>
      </transition>
    </template>
  </ks-card>
</template>

<script lang="ts">
import Vue from 'vue'

type NullableDate = null | Date

export default Vue.extend({
  name: 'SettingsPage',
  layout: 'employer',
  data() {
    return {
      profile: {
        created_at: null as NullableDate,
        name: '',
        lastName: '',
        email: '',
        profile_picture_URL: '',
      },
      showDelete: false,
      showSubscribe: false,
      showCode: false,
      deleting: false,
      card: undefined as any,
      paymentRequestButton: undefined as any,
      paymentIntent: undefined as any,
      checkoutComplete: false,
      codeDigits: new Array(8).fill('') as string[],
      loading: false,
      invalidCode: false,
    }
  },
  async fetch() {
    try {
      const res = await this.$axios.$get('/employer/settings')
      res.created_at = res.created_at ? new Date(res.created_at) : null
      this.profile = res
    } catch (error) {}
  },
  head(): object {
    const i18nHead = this.$nuxtI18nHead({ addSeoAttributes: true })
    return {
      title: this.$t('settings.meta.title'),
      htmlAttrs: {
        ...i18nHead.htmlAttrs,
      },
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.$t('settings.meta.description'),
        },
        ...i18nHead.meta,
      ],
    }
  },
  computed: {
    digits(): number {
      return this.codeDigits.length
    },
  },
  methods: {
    async deleteProfile(): Promise<void> {
      try {
        this.deleting = true
        await this.$axios.$delete('/user/delete')
        await this.$auth.logout()
      } catch (error) {
      } finally {
        this.deleting = false
        this.showDelete = false
      }
    },
    async subWithCode(): Promise<void> {
      try {
        const rawLicense = this.codeDigits.join('')

        if (rawLicense.length !== this.digits) {
          this.invalidCode = true
          return
        }
        this.loading = true
        this.invalidCode = false
        const license = rawLicense.slice(0, 4) + '-' + rawLicense.slice(4, 8)
        await this.$axios.$post('/employer/validateLicense', {
          license,
        })
        await this.$auth.fetchUser()
        this.$notifier.showNotification({
          content: this.$t('settings.subscribed'),
        })
        this.showCode = false
      } catch (error) {
        this.invalidCode = true
      } finally {
        this.loading = false
      }
    },
    showCheckout(): void {
      this.showSubscribe = true
      this.$nextTick(async () => {
        if (this.$stripe) {
          const elements = this.$stripe.elements()
          this.mountCardElement(elements)
          await this.mountPaymentRequestButton(elements)
          await this.setPaymentIntent()
        }
      })
    },
    cancelCheckout(): void {
      this.showSubscribe = false
      this.codeDigits = new Array(8).fill('')
      this.invalidCode = false
    },
    mountCardElement(elements: any): boolean {
      try {
        this.card = elements.create('card', {
          hidePostalCode: true,
          style: {
            base: {
              iconColor: '#3E7CA3',
              color: '#969696',
              fontWeight: '400',
              fontFamily: 'Orkney, Roboto, Open Sans, Segoe UI, sans-serif',
              fontSize: '16px',
              fontSmoothing: 'antialiased',
              ':-webkit-autofill': {
                color: '#969696',
              },
              '::placeholder': {
                color: '#9E9E9E',
              },
            },
            invalid: {
              iconColor: '#F2868F',
              color: '#F2868F',
            },
          },
        })
        this.card.mount('#card-element')
        this.card.on('change', (event: any) => {
          if (event.complete) {
            this.checkoutComplete = true
          } else {
            this.checkoutComplete = false
          }
        })
        return true
      } catch (error) {
        return false
      }
    },
    async mountPaymentRequestButton(elements: any): Promise<boolean> {
      try {
        const paymentRequest = this.$stripe.paymentRequest({
          country: 'US',
          currency: 'usd',
          total: {
            label: 'Kaizen Squad lifetime subscription',
            amount: 1499,
          },
          requestPayerName: true,
          requestPayerEmail: true,
        })
        const canMakePayment = await paymentRequest.canMakePayment()
        this.paymentRequestButton = elements.create('paymentRequestButton', {
          paymentRequest,
        })
        if (canMakePayment) {
          this.paymentRequestButton.mount('#payment-request')
          return true
        }
        return false
      } catch (error) {
        return false
      }
    },
    setPaymentIntent(): boolean {
      return false
    },
  },
})
</script>

<style scoped>
hr {
  @apply my-6 border-blue-light;
}

.settings-header {
  @apply flex justify-start text-blue-kaizen pb-6;
}

.settings-header > * {
  @apply pt-4;
}

.title {
  @apply text-lg text-blue-kaizen;
}

.edit-enter-active,
.edit-leave-active {
  transition: opacity 0.2s;
}
.edit-enter,
.edit-leave-to {
  opacity: 0;
}

.modal {
  @apply flex items-center justify-center absolute left-0 top-0 w-full h-full bg-gray-lightest z-10 bg-opacity-60 backdrop-filter backdrop-blur overflow-y-auto;
}
</style>
