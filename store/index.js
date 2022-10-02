export const state = () => ({
  newPageName: '',
  userDetails: {}
})

export const mutations = {
  setPageName (state, val) {
    state.newPageName = val
  },
  setUserDetails (state, val) {
    state.userDetails = val
  }
}
