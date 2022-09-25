<template>
  <div class="container">
    <div class="tab-ctn">
      <TabHeaders
        :tabs="['Completed Orders', 'Dismissed Orders']"
        padding-left="4px"
        :active-tab="activeTab"
        @set-active-tab="setActiveTab"
      />
    </div>
    <div v-if="activeTab === 'Completed Orders'" class="tab_data">
      <TablesCompletedTable />
    </div>
    <div v-if="activeTab === 'Dismissed Orders'" class="tab_data">
      <TablesDismissedTable />
    </div>
  </div>
</template>

<script>
export default {
  layout: 'MainLayout',
  data () {
    return {
      activeTab: 'Completed Orders'
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

.tab_data {
  margin-top: 5vh;
}

@media only screen and (max-width: 500px) {
  .container {
    padding: 0 5vw;
    padding-bottom: 5vh;
  }
}
</style>
