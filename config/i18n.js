import en from '../lang/en-US'
import es from '../lang/es-ES'

export const I18N = {
  locales: [
    {
      code: 'en',
      iso: 'en-US',
      name: 'English',
    },
    {
      code: 'es',
      iso: 'es-ES',
      name: 'Español',
    },
  ],
  strategy: 'no_prefix',
  defaultLocale: 'en',
  seo: false,
  detectBrowserLanguage: {
    onlyOnRoot: true,
  },
  vuex: {
    moduleName: 'i18n',
    syncLocale: true,
    syncMessages: false,
    syncRouteParams: false,
  },
  vueI18n: {
    fallbackLocale: 'en',
    messages: { en, es },
    dateTimeFormats: {
      en: {
        numeric: {
          year: 'numeric',
          month: 'numeric',
          day: 'numeric',
        },
        short: {
          year: 'numeric',
          month: 'long',
          day: 'numeric',
        },
      },
      es: {
        numeric: {
          year: 'numeric',
          month: 'numeric',
          day: 'numeric',
        },
        short: {
          year: 'numeric',
          month: 'long',
          day: 'numeric',
        },
      },
    },
  },
}
