export const state = () => ({
  newPageName: '',
  userDetails: {},
  dropOffLocation: []
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
  }
}
