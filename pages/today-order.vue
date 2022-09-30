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
      <TablesAllToDoTable :table-data="todoData" />
    </div>
    <div v-if="activeTab === 'Completed'" class="inner">
      <TablesCompletedTable :table-data="completedOrdersData" />
    </div>
    <div v-if="activeTab === 'Dismissed'" class="inner">
      <TablesDismissedTable :table-data="dismissedOrdersData" />
    </div>
  </div>
</template>

<script>
import Cookies from 'js-cookie'
export default {
  layout: 'MainLayout',
  data () {
    return {
      activeTab: 'To-do',
      todoData: [],
      completedOrdersData: [],
      dismissedOrdersData: []
    }
  },
  created () {
    this.getAllToDo()
    this.getCompletedOrders()
    this.getDismissedOrders()
  },
  methods: {
    setActiveTab (tab) {
      this.activeTab = tab
      // this.$store.commit('setPageName', tab)
    },
    getAllToDo () {
      this.$axios.$get('/orders/get/all/todo/10/0', {
        headers: {
          Authorization: `Bearer ${Cookies.get('token')}`
        }
      }).then((response) => {
        // console.log(response)
        this.todoData = response.orders.order
      })
    },
    getCompletedOrders () {
      this.$axios.$get('/orders/completed/all/10/0', {
        headers: {
          Authorization: `Bearer ${Cookies.get('token')}`
        }
      }).then((response) => {
        // console.log(response)
        this.completedOrdersData = response.data.completed
      })
    },
    getDismissedOrders () {
      this.$axios.$get('/orders/dismissed/all/10/0', {
        headers: {
          Authorization: `Bearer ${Cookies.get('token')}`
        }
      }).then((response) => {
        console.log(response)
        this.dismissedOrdersData = response.data.dismissed
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
