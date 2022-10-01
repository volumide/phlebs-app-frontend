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
      <TablesAllToDoTable :table-data="todoData" :table-loader="todoLoading" />
    </div>
    <div v-if="activeTab === 'New Orders'" class="tab_data">
      <TablesNewOrdersTable :table-data="newOrderData" :table-loader="newOrderLoading" />
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
      activeTab: 'All To-do',
      todoData: [],
      newOrderData: [],
      todoLoading: false,
      newOrderLoading: false,
      instruction: false
    }
  },
  mounted () {
    this.$store.commit('setPageName', this.activeTab)
    setTimeout(() => {
      this.instruction = true
    }, 1000)
  },
  created () {
    this.getAllToDo()
  },
  methods: {
    setActiveTab (tab) {
      this.activeTab = tab
      this.$store.commit('setPageName', tab)
      if (this.activeTab === 'All To-do') {
        this.getAllToDo()
      } else if (this.activeTab === 'New Orders') {
        this.getNewOrders()
      }
    },
    getAllToDo () {
      this.todoLoading = true
      this.$axios.$get('/orders/get/all/todo/10/0', {
        headers: {
          Authorization: `Bearer ${Cookies.get('token')}`
        }
      }).then((response) => {
        // console.log(response)
        this.todoData = response.orders.order
        this.todoLoading = false
      })
    },
    getNewOrders () {
      this.newOrderLoading = true
      this.$axios.$get('/orders/all/new/order/10/0', {
        headers: {
          Authorization: `Bearer ${Cookies.get('token')}`
        }
      }).then((response) => {
        console.log(response)
        this.newOrderData = response.orders.order
        this.newOrderLoading = false
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
