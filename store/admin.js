export const state = () => ({
  dealsMade: [],
})

export const getters = {}

export const mutations = {
  SET_DEALS_MADE: (state, dealsMade) => {
    state.dealsMade = dealsMade
  },
}

export const actions = {
  async fetchDealsMade({ commit }) {
    try {
      const res = await this.$axios.$get('/admin/notifications')
      commit('SET_DEALS_MADE', res.deals)
    } catch (error) {
      commit('SET_DEALS_MADE', [])
    }
  },
}
