export const state = () => ({
  alerts: [],
})

export const getters = {
  getAlerts: (state) => {
    return state.alerts
  },
}

export const mutations = {
  SET_ALERTS: (state, alerts) => {
    state.alerts = alerts
  },
}

export const actions = {
  async fetchAlerts({ commit }) {
    try {
      const res = await this.$axios.$get('/employee/notifications')
      commit('SET_ALERTS', res.results)
    } catch (error) {
      commit('SET_ALERTS', [])
    }
  },
}
