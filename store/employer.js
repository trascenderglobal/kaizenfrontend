export const state = () => ({
  searchFilters: {},
  approvedDeals: [],
})

export const getters = {}

export const mutations = {
  SET_SEARCH_FILTERS: (state, searchFilters) => {
    state.searchFilters = searchFilters
  },
  SET_APPROVED_DEALS: (state, approvedDeals) => {
    state.approvedDeals = approvedDeals
  },
}

export const actions = {
  updateSearchFilters({ commit }, searchFilters) {
    commit('SET_SEARCH_FILTERS', searchFilters)
  },
  async fetchApprovedDeals({ commit }) {
    try {
      const res = await this.$axios.$get('/employer/notifications')
      commit('SET_APPROVED_DEALS', res.result)
    } catch (error) {
      commit('SET_APPROVED_DEALS', [])
    }
  },
}
