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
      <TablesCompletedTable :table-data="completedOrdersData" :table-loader="completedLoading" />
    </div>
    <div v-if="activeTab === 'Dismissed Orders'" class="tab_data">
      <TablesDismissedTable :table-data="dismissedOrdersData" :table-loader="dismissedLoading" />
    </div>
  </div>
</template>

<script>
import Cookies from 'js-cookie'
export default {
  layout: 'MainLayout',
  data () {
    return {
      activeTab: 'Completed Orders',
      completedLoading: false,
      dismissedLoading: false,
      completedOrdersData: [],
      dismissedOrdersData: []
    }
  },
  created () {
    this.getCompletedOrders()
  },
  methods: {
    setActiveTab (tab) {
      this.activeTab = tab
      this.$store.commit('setPageName', tab)
      if (this.activeTab === 'Completed Orders') {
        this.getCompletedOrders()
      } else if (this.activeTab === 'Dismissed Orders') {
        this.getDismissedOrders()
      }
    },
    getCompletedOrders () {
      this.completedLoading = true
      this.$axios.$get('/orders/completed/all/10/0', {
        headers: {
          Authorization: `Bearer ${Cookies.get('token')}`
        }
      }).then((response) => {
        // console.log(response)
        if (response.orders) {
          this.completedOrdersData = response.orders.order
        } else {
          this.completedOrdersData = response.data.completed
        }
        this.completedLoading = false
      })
    },
    getDismissedOrders () {
      this.dismissedLoading = true
      this.$axios.$get('/orders/dismissed/all/10/0', {
        headers: {
          Authorization: `Bearer ${Cookies.get('token')}`
        }
      }).then((response) => {
        // console.log(response)
        if (response.orders) {
          this.dismissedOrdersData = response.orders.order
        } else {
          this.dismissedOrdersData = response.data.dismissed
        }
        this.dismissedLoading = false
      })
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
