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
      <TablesCompletedTable
        :table-data="completedOrdersData"
        :table-loader="completedLoading"
        :total-data="totalData"
        :has-prev-page="hasPrevPage"
        :has-next-page="hasNextPage"
        @next="next()"
        @prev="prev()"
      />
    </div>
    <div v-if="activeTab === 'Dismissed Orders'" class="tab_data">
      <TablesDismissedTable
        :table-data="dismissedOrdersData"
        :table-loader="dismissedLoading"
      />
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
      totalPages: '',
      totalData: null,
      currentPage: '',
      limit: 10,
      hasNextPage: null,
      hasPrevPage: null,
      pageNumber: 1,
      dismissedOrdersData: []
    }
  },
  created () {
    this.getCompletedOrders(
      this.pageNumber,
      this.limit
    )
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
    prev () {
      if (this.hasPrevPage) {
        this.setPage(this.limit - this.pageNumber)
      }
    },
    next () {
      if (this.hasNextPage) {
        this.setPage(this.limit + this.pageNumber)
      }
      // this.setPage(this.currentPage + 1)
    },
    setPage (pageNumber) {
      this.getCompletedOrders(
        pageNumber,
        this.limit
      )
    },
    getCompletedOrders (
      pageNumber,
      limit
    ) {
      console.log(pageNumber)
      console.log(limit)
      this.completedLoading = true
      this.$axios.$get(`/orders/completed/all/${limit}/${pageNumber}`, {
        headers: {
          Authorization: `Bearer ${Cookies.get('token')}`
        }
      }).then((response) => {
        console.log(response)
        if (response.orders) {
          this.completedOrdersData = response.orders.order
        } else {
          this.completedOrdersData = response.data.completed
        }
        this.totalPages = response.orders.totalPages
        this.totalData = response.orders.totalDocs
        this.currentPage = response.orders.page
        this.hasPrevPage = response.orders.hasPrevPage
        this.hasNextPage = response.orders.hasNextPage
        this.limit = Number(response.orders.limit)
        this.completedLoading = false
      }).catch((onrejected) => {
        console.log(onrejected)
        this.completedLoading = false
        if (onrejected.error) {
          // this.$toast.error(onrejected.errorMsg)
        }
      })
    },
    getDismissedOrders () {
      this.dismissedLoading = true
      this.$axios.$get('/orders/dismissed/all/10/1', {
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
      }).catch((onrejected) => {
        console.log(onrejected)
        this.dismissedLoading = false
        if (onrejected.error) {
          // this.$toast.error(onrejected.errorMsg)
        }
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
