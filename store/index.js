export const state = () => ({
  newPageName: ''
})

export const mutations = {
  setPageName (state, val) {
    state.newPageName = val
  }
}
