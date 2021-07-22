export const state = () => ({
  searchFilters: {},
})

export const getters = {}

export const mutations = {
  SET_SEARCH_FILTERS: (state, searchFilters) => {
    state.searchFilters = searchFilters
  },
}

export const actions = {
  updateSearchFilters({ commit }, searchFilters) {
    commit('SET_SEARCH_FILTERS', searchFilters)
  },
}
