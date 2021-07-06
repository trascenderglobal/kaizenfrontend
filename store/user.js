export const state = () => ({
  profilePicture: '',
  locale: 'en',
})

export const getters = {
  getProfilePicture: (state) => {
    return state.profilePicture
  },
  getRole: (_state, _getters, rootState) => {
    if (rootState.auth.user) {
      if (rootState.auth.user.role === 0) return '/employer'
      else if (rootState.auth.user.role === 1) return '/employee'
    }
    return ''
  },
  getLocale: (state) => {
    return state.locale
  },
}

export const mutations = {
  SET_PROFILE_PICTURE: (state, profilePicture) => {
    state.profilePicture = profilePicture
  },
  SET_LOCALE: (state, locale) => {
    state.locale = locale
  },
}

export const actions = {
  async fetchProfilePicture({ commit, getters }) {
    try {
      const res = await this.$axios.$get(`${getters.getRole}/profile_picture`)
      commit('SET_PROFILE_PICTURE', res.profile_picture_URL)
    } catch (error) {
      commit('SET_PROFILE_PICTURE', '')
    }
  },
}
