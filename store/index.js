export const state = () => ({
  newPageName: '',
  userDetails: {},
  dropOffLocation: [],
  isOnline: false
})

export const mutations = {
  setPageName (state, val) {
    state.newPageName = val
  },
  setUserDetails (state, val) {
    state.userDetails = val
  },
  setDropoffLocation (state, val) {
    state.dropOffLocation = val
  },
  setIsOnline (state, value) {
    state.isOnline = value
  }
}

export const actions = {
  onlineStatusChange ({ state, commit }, payload) {
    if (payload) {
      commit('setIsOnline', true)
      setTimeout(() => {
        commit('setIsOnline', false)
      }, 3000)
    }
  }
}
