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
        :limit="limit"
        @set-limit="setLimit($event)"
        @next="next()"
        @prev="prev()"
      />
    </div>
    <div v-if="activeTab === 'Dismissed Orders'" class="tab_data">
      <TablesDismissedTable
        :table-data="dismissedOrdersData"
        :table-loader="dismissedLoading"
        :total-data="totalData"
        :has-prev-page="hasPrevPage"
        :has-next-page="hasNextPage"
        :limit="limit"
        @set-limit="setLimit($event)"
        @next="next()"
        @prev="prev()"
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
      dismissedOrdersData: [],
      totalPages: '',
      totalData: null,
      currentPage: '',
      limit: 8,
      hasNextPage: null,
      hasPrevPage: null,
      pageNumber: 1
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
        this.getCompletedOrders(
          this.pageNumber = 1,
          this.limit = 8
        )
      } else if (this.activeTab === 'Dismissed Orders') {
        this.getDismissedOrders(
          this.pageNumber = 1,
          this.limit = 8
        )
      }
    },
    prev () {
      if (this.hasPrevPage) {
        this.setPage(this.pageNumber - this.limit)
      }
    },
    next () {
      if (this.hasNextPage) {
        this.setPage(this.limit + this.pageNumber)
      }
      // this.setPage(this.currentPage + 1)
    },
    setLimit (limit) {
      if (this.activeTab === 'Completed Orders') {
        this.getCompletedOrders(
          this.pageNumber = 1,
          limit
        )
      } else if (this.activeTab === 'Dismissed Orders') {
        this.getDismissedOrders(
          this.pageNumber = 1,
          limit
        )
      }
    },
    setPage (pageNumber) {
      if (this.activeTab === 'Completed Orders') {
        this.getCompletedOrders(
          pageNumber,
          this.limit
        )
      } else if (this.activeTab === 'Dismissed Orders') {
        this.getDismissedOrders(
          pageNumber,
          this.limit
        )
      }
    },
    getCompletedOrders (
      pageNumber,
      limit
    ) {
      // console.log(pageNumber)
      // console.log(limit)
      this.completedLoading = true
      this.$axios.$get(`/orders/completed/all/${limit}/${pageNumber}`, {
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
        this.totalPages = response.orders.totalPages
        this.totalData = response.orders.totalDocs
        this.currentPage = response.orders.page
        this.hasPrevPage = response.orders.hasPrevPage
        this.hasNextPage = response.orders.hasNextPage
        this.pageNumber = response.orders.pagingCounter
        this.limit = Number(response.orders.limit)
        this.completedLoading = false
      }).catch((onrejected) => {
        // console.log(onrejected)
        this.completedLoading = false
        if (onrejected.error) {
          // this.$toast.error(onrejected.errorMsg)
        }
      })
    },
    getDismissedOrders (
      pageNumber,
      limit
    ) {
      // console.log(pageNumber)
      // console.log(limit)
      this.dismissedLoading = true
      this.$axios.$get(`/orders/dismissed/all/${limit}/${pageNumber}`, {
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
        this.totalPages = response.orders.totalPages
        this.totalData = response.orders.totalDocs
        this.currentPage = response.orders.page
        this.hasPrevPage = response.orders.hasPrevPage
        this.hasNextPage = response.orders.hasNextPage
        this.pageNumber = response.orders.pagingCounter
        this.limit = Number(response.orders.limit)
        this.dismissedLoading = false
      }).catch((onrejected) => {
        // console.log(onrejected)
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
