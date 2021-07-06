export default function ({ app, store }) {
  app.i18n.onBeforeLanguageSwitch = (_oldLocale, newLocale) => {
    store.commit('user/SET_LOCALE', newLocale)
  }
}
