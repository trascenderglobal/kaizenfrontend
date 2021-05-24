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
  vueI18n: {
    fallbackLocale: 'en',
    messages: { en, es },
    dateTimeFormats: {
      en: {
        short: {
          year: 'numeric',
          month: 'long',
          day: 'numeric',
        },
      },
      es: {
        short: {
          year: 'numeric',
          month: 'long',
          day: 'numeric',
        },
      },
    },
  },
}
