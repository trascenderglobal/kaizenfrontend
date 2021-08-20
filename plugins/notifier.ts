import { Plugin } from '@nuxt/types'
import { TranslateResult } from 'vue-i18n'

interface Notification {
  content: string | TranslateResult
  bgColor?: string
  hoverColor?: string
  textColor?: string
}

interface Notifier {
  showNotification(notification: Notification): void
  removeNotification(index: number): void
  clearNotifications(): void
  setTimeout(timeout: number): void
}

declare module 'vue/types/vue' {
  // this.$myInjectedFunction inside Vue components
  interface Vue {
    $notifier: Notifier
  }
}

declare module '@nuxt/types' {
  // nuxtContext.app.$myInjectedFunction inside asyncData, fetch, plugins, middleware, nuxtServerInit
  interface NuxtAppOptions {
    $notifier: Notifier
  }
  // nuxtContext.$myInjectedFunction
  interface Context {
    $notifier: Notifier
  }
}

declare module 'vuex/types/index' {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  interface Store<S> {
    $notifier: Notifier
  }
}

const notifier: Plugin = ({ store }, inject) => {
  inject('notifier', {
    showNotification(notification: Notification) {
      store.dispatch('notifier/showNotification', notification)
    },
    removeNotification(index: number) {
      store.commit('notifier/REMOVE_NOTIFICATION', index)
    },
    clearNotifications() {
      store.commit('notifier/CLEAR_NOTIFICATIONS')
    },
    setTimeout(timeout: number) {
      store.commit('notifier/SET_TIMEOUT', timeout)
    },
  })
}

export default notifier
