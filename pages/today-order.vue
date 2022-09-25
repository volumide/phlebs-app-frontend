<template>
  <div class="container">
    <div class="tab-ctn">
      <TabHeaders
        :tabs="['To-do', 'Completed', 'Dismissed']"
        padding-left="4px"
        :active-tab="activeTab"
        @set-active-tab="setActiveTab"
      />
    </div>
    <div v-if="activeTab === 'To-do'" class="inner">
      <TablesAllToDoTable />
    </div>
    <div v-if="activeTab === 'Completed'" class="inner">
      <TablesCompletedTable />
    </div>
    <div v-if="activeTab === 'Dismissed'" class="inner">
      <TablesDismissedTable />
    </div>
  </div>
</template>

<script>
export default {
  layout: 'MainLayout',
  data () {
    return {
      activeTab: 'To-do'
    }
  },
  methods: {
    setActiveTab (tab) {
      this.activeTab = tab
      // this.$store.commit('setPageName', tab)
    }
  }
}
</script>

<style scoped>
.container {
  padding: 2vh 3vw;
  padding-right: 5vw;
}

.tab-ctn {
  margin-bottom: 5vh;
}

/* .inner {
  display: flex;
  width: 100%;
  justify-content: space-between;
} */

/* .lhs {
  width: 67%;
}

.rhs {
  width: 30%;
} */

@media only screen and (max-width: 500px) {
  .container {
    padding: 0 5vw;
    padding-bottom: 5vh;
  }
  /* .lhs {
    width: 100%;
  } */
}
</style>
