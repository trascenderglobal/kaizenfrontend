export const state = () => ({
  notifications: [],
  timeout: 5000,
})

export const getters = {
  getNotifications: (state) => {
    return state.notifications
  },
}

export const mutations = {
  PUSH_NOTIFICATION: (state, notification) => {
    return state.notifications.push(notification) - 1
  },
  REMOVE_NOTIFICATION: (state, index) => {
    state.notifications.splice(index, 1)
  },
  SHIFT_NOTIFICATION: (state) => {
    state.notifications.shift()
  },
  CLEAR_NOTIFICATIONS: (state) => {
    state.notifications = []
  },
  SET_TIMEOUT: (state, timeout) => {
    state.timeout = timeout
  },
}

export const actions = {
  showNotification(
    { commit, state },
    {
      content,
      bgColor = 'bg-blue-kaizen',
      hoverColor = 'hover:underline',
      textColor = 'text-white',
    }
  ) {
    commit('PUSH_NOTIFICATION', {
      content,
      bgColor,
      hoverColor,
      textColor,
    })
    setTimeout(function () {
      commit('SHIFT_NOTIFICATION')
    }, state.timeout)
  },
}
