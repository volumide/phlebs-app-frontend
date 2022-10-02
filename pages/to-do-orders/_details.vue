<template>
  <div class="container">
    <div class="inner">
      <div class="lhs">
        <OrdersOrderDetail :box-name="boxName" :details-data="detailsData" />
      </div>
      <div class="rhs mobile_no_show">
        <OrdersOrderList :box-name="boxName" :list-data="orderList" />
      </div>
    </div>
  </div>
</template>

<script>
import Cookies from 'js-cookie'
import functions from '@/utils/functions'
export default {
  layout: 'MainLayout',
  data () {
    return {
      boxName: '',
      detailsData: {},
      orderList: [],
      detailsLoading: false,
      listLoading: false,
      capitalizeFirstLetter: functions.capitalizeFirstLetter
    }
  },
  created () {
    const name = this.$route.params.details
    // console.log(name)
    const id = this.$route.query.id
    this.boxName = this.capitalizeFirstLetter(name)
    this.getOrderDetails(id, name)
    this.getOrderlist(id, name)
  },
  methods: {
    getOrderDetails (id, name) {
      this.detailsLoading = true
      let url = ''
      if (name === 'to-do') {
        url = `/orders/single/order/${id}`
      } else if (name === 'completed') {
        url = `/orders/complete/single/order/${id}`
      } else if (name === 'dismissed') {
        url = `/orders/dismissed/single/order/${id}`
      } else if (name === 'new-orders') {
        url = `/orders/new/order/${id}`
      }
      this.$axios.$get(url, {
        headers: {
          Authorization: `Bearer ${Cookies.get('token')}`
        }
      }).then((response) => {
        console.log(response)
        if (response.todo) {
          this.detailsData = response.todo[0]
        } else {
          this.detailsData = response.dismissed[0]
        }
        // console.log(this.detailsData)
        this.detailsLoading = false
      })
    },
    getOrderlist (id, name) {
      this.listLoading = true
      let url = ''
      if (name === 'to-do') {
        url = '/orders/get/all/todo/10/0'
      } else if (name === 'completed') {
        url = '/orders/completed/all/10/0'
      } else if (name === 'dismissed') {
        url = '/orders/dismissed/all/10/0'
      } else if (name === 'new-orders') {
        url = '/orders/all/new/order/10/0'
      }
      this.$axios.$get(url, {
        headers: {
          Authorization: `Bearer ${Cookies.get('token')}`
        }
      }).then((response) => {
        // console.log(response)
        this.orderList = response.orders.order
        // console.log(this.orderList)
        this.listLoading = false
      })
    }
  }
}
</script>

<style scoped>
.container {
  padding: 2vh 3vw;
}

.inner {
  display: flex;
  justify-content: space-between;
}

.lhs {
  width: 67%;
}

.rhs {
  width: 30%;
}

@media only screen and (max-width: 500px) {
  .container {
    padding: 0 5vw;
    padding-bottom: 5vh;
  }
  .lhs {
    width: 100%;
  }
}
</style>
