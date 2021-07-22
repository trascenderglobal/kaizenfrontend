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
  updateAlerts({ commit }, alerts = []) {
    commit('SET_ALERTS', alerts)
  },
}
