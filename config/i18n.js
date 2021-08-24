export const I18N = {
  langDir: '~/lang/',
  locales: [
    {
      code: 'en',
      iso: 'en-US',
      name: 'English',
      file: 'en-US',
    },
    {
      code: 'es',
      iso: 'es-ES',
      name: 'Español',
      file: 'es-ES',
    },
  ],
  lazy: true,
  strategy: 'no_prefix',
  defaultLocale: 'en',
  detectBrowserLanguage: {
    redirectOn: 'no prefix',
  },
  vuex: false,
  vueI18n: {
    fallbackLocale: 'en',
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
