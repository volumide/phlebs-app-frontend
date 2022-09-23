<template>
  <div class="container">
    <div class="tab-ctn">
      <TabHeaders
        :tabs="['All To-do', 'New Orders']"
        padding-left="4px"
        :active-tab="activeTab"
        @set-active-tab="setActiveTab"
      />
    </div>
    <div v-if="activeTab === 'All To-do'" class="tab_data">
      <TablesAllToDoTable />
    </div>
    <div v-if="activeTab === 'New Orders'" class="tab_data">
      <TablesNewOrdersTable />
    </div>
    <ModalsConfirmationModal
      v-if="instruction"
      :modal-image="require('assets/images/shield 1.png')"
      :modal-head="'Instruction!'"
      :modal-text="'Kindly Approve all orders and Dismiss only for orders you wont be able to fulfill'"
      :bg-btn="'OK'"
      @close-modal="instruction = false"
      @bg-action="instruction = false"
    />
  </div>
</template>

<script>
export default {
  layout: 'MainLayout',
  data () {
    return {
      activeTab: 'All To-do',
      instruction: false
    }
  },
  mounted () {
    this.$store.commit('setPageName', this.activeTab)
    setTimeout(() => {
      this.instruction = true
    }, 1000)
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
}

.tab_data {
  margin-top: 5vh;
}

@media only screen and (max-width: 500px) {
  .container {
    padding-bottom: 5vh;
  }
}
</style>
