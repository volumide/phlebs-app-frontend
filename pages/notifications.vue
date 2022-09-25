<template>
  <div class="container">
    <div class="tab-ctn">
      <TabHeaders
        :tabs="['All', 'Read', 'Unread']"
        padding-left="4px"
        :active-tab="activeTab"
        @set-active-tab="setActiveTab"
      />
    </div>
    <div v-if="activeTab === 'All'" class="tab_data">
      <NotificationAll />
    </div>
    <div v-if="activeTab === 'Read'" class="tab_data">
      <NotificationAll />
    </div>
    <div v-if="activeTab === 'Unread'" class="tab_data">
      <NotificationAll />
    </div>
    <ModalsFromTheSide />
  </div>
</template>

<script>
export default {
  layout: 'MainLayout',
  data () {
    return {
      activeTab: 'All'
    }
  },
  methods: {
    setActiveTab (tab) {
      this.activeTab = tab
      this.$store.commit('setPageName', tab)
    }
  }

}
</script>

<style scoped>
.container {
  padding: 2vh 3vw;
  padding-right: 5vw;
}
</style>
