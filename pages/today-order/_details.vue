<template>
  <div class="container">
    <div class="inner">
      <div class="lhs">
        <OrdersOrderDetail :box-name="boxName" :details-data="detailsData" />
      </div>
      <div class="rhs mobile_no_show">
        <OrdersOrderList :box-name="boxName" />
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
    const id = this.$route.query.id
    this.boxName = this.capitalizeFirstLetter(name)
    this.getOrderDetails(id)
  },
  methods: {
    getOrderDetails (val) {
      this.detailsLoading = true
      this.$axios.$get(`/orders/single/order/${val}`, {
        headers: {
          Authorization: `Bearer ${Cookies.get('token')}`
        }
      }).then((response) => {
        // console.log(response)
        this.detailsData = response.todo[0]
        // console.log(this.detailsData)
        this.detailsLoading = false
        this.getOrderlist()
      })
    },
    getOrderlist (val) {
      this.listLoading = true
      this.$axios.$get('/orders/next/todo', {
        headers: {
          Authorization: `Bearer ${Cookies.get('token')}`
        }
      }).then((response) => {
        console.log(response)
        // this.orderList = response
        // console.log(this.detailsData)
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
