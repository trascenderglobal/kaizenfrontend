export const state = () => ({
  alerts: [],
})

export const getters = {
  getterAlerts: (state) => {
    return state.alerts
  },
}

export const mutations = {
  SET_ALERTS: (state, alerts) => {
    state.alerts = alerts
  },
}

export const actions = {
  updateActionValue({ commit }) {
    const alerts = []
    commit('SET_ALERTS', alerts)
  },
}
