<template>
  <div class="container">
    <div class="tab-ctn">
      <TabHeaders
        :tabs="['All To-do', 'New Orders']"
        padding-left="4px"
        :active-tab="activeTab"
        :data-num="newOrderNum"
        @set-active-tab="setActiveTab"
      />
    </div>
    <div v-if="activeTab === 'All To-do'" class="tab_data">
      <TablesAllToDoTable
        :table-data="todoData"
        :table-loader="todoLoading"
        :total-data="totalData"
        :has-prev-page="hasPrevPage"
        :has-next-page="hasNextPage"
        :limit="limit"
        @set-limit="setLimit($event)"
        @next="next()"
        @prev="prev()"
      />
    </div>
    <div v-if="activeTab === 'New Orders'" class="tab_data">
      <TablesNewOrdersTable
        :table-data="newOrderData"
        :table-loader="newOrderLoading"
        :total-data="totalData"
        :has-prev-page="hasPrevPage"
        :has-next-page="hasNextPage"
        :limit="limit"
        @set-limit="setLimit($event)"
        @next="next()"
        @prev="prev()"
      />
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
import Cookies from 'js-cookie'
export default {
  layout: 'MainLayout',
  data () {
    return {
      activeTab: '',
      newOrderNum: null,
      todoData: [],
      newOrderData: [],
      todoLoading: false,
      newOrderLoading: false,
      instruction: false,
      totalPages: '',
      totalData: null,
      currentPage: '',
      limit: 8,
      hasNextPage: null,
      hasPrevPage: null,
      pageNumber: 1
    }
  },
  mounted () {
    this.$store.commit('setPageName', this.activeTab)
    setTimeout(() => {
      this.instruction = true
    }, 1000)
  },
  created () {
    const tabfromUrl = this.$route.query.type
    // console.log(tabfromUrl)
    if (tabfromUrl) {
      this.activeTab = tabfromUrl
      this.getNewOrders(
        this.pageNumber,
        this.limit
      )
    } else {
      this.activeTab = 'All To-do'
    }
    this.getAllToDo(
      this.pageNumber,
      this.limit
    )
    this.getNewOrders(
      this.pageNumber,
      this.limit
    )
  },
  methods: {
    setActiveTab (tab) {
      this.activeTab = tab
      this.$store.commit('setPageName', tab)
      if (this.activeTab === 'All To-do') {
        this.getAllToDo(
          this.pageNumber = 1,
          this.limit = 8
        )
      } else if (this.activeTab === 'New Orders') {
        this.getNewOrders(
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
      if (this.activeTab === 'All To-do') {
        this.getAllToDo(
          this.pageNumber = 1,
          limit
        )
      } else if (this.activeTab === 'New Orders') {
        this.getNewOrders(
          this.pageNumber = 1,
          limit
        )
      }
    },
    setPage (pageNumber) {
      if (this.activeTab === 'All To-do') {
        this.getAllToDo(
          pageNumber,
          this.limit
        )
      } else if (this.activeTab === 'New Orders') {
        this.getNewOrders(
          pageNumber,
          this.limit
        )
      }
    },
    getAllToDo (
      pageNumber,
      limit
    ) {
      // console.log(pageNumber)
      // console.log(limit)
      this.todoLoading = true
      this.$axios.$get(`/orders/get/all/todo/${limit}/${pageNumber}`, {
        headers: {
          Authorization: `Bearer ${Cookies.get('token')}`
        }
      }).then((response) => {
        // console.log(response)
        this.todoData = response.orders.order
        this.totalPages = response.orders.totalPages
        this.totalData = response.orders.totalDocs
        this.currentPage = response.orders.page
        this.hasPrevPage = response.orders.hasPrevPage
        this.hasNextPage = response.orders.hasNextPage
        this.pageNumber = response.orders.pagingCounter
        this.limit = Number(response.orders.limit)
        this.todoLoading = false
      }).catch((onrejected) => {
        // console.log(onrejected)
        this.todoLoading = false
        if (onrejected.error) {
          // this.$toast.error(onrejected.errorMsg)
        }
      })
    },
    getNewOrders (
      pageNumber,
      limit
    ) {
      // console.log(pageNumber)
      // console.log(limit)
      this.newOrderLoading = true
      this.$axios.$get(`/orders/all/new/order/${limit}/${pageNumber}`, {
        headers: {
          Authorization: `Bearer ${Cookies.get('token')}`
        }
      }).then((response) => {
        // console.log(response)
        this.newOrderNum = response.orders.totalDocs
        this.newOrderData = response.orders.order
        this.totalPages = response.orders.totalPages
        this.totalData = response.orders.totalDocs
        this.currentPage = response.orders.page
        this.hasPrevPage = response.orders.hasPrevPage
        this.hasNextPage = response.orders.hasNextPage
        this.pageNumber = response.orders.pagingCounter
        this.limit = Number(response.orders.limit)
        this.newOrderLoading = false
      }).catch((onrejected) => {
        // console.log(onrejected)
        this.newOrderLoading = false
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
