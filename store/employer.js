export const state = () => ({
  filter: true,
  searchFilters: {
    state: null,
    city: null,
    language: null,
    level: null,
  },
  approvedDeals: [],
})

export const getters = {}

export const mutations = {
  SET_FILTER: (state, filter) => {
    state.filter = filter
  },
  SET_SEARCH_FILTERS: (state, searchFilters) => {
    state.searchFilters.state = searchFilters.state
    state.searchFilters.city = searchFilters.city
    state.searchFilters.language = searchFilters.language
    state.searchFilters.level = searchFilters.level
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
