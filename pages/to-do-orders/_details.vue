<template>
  <div class="container">
    <div class="inner">
      <div class="lhs">
        <OrdersOrderDetail />
      </div>
      <div class="rhs mobile_no_show">
        <OrdersOrderList />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  layout: 'MainLayout'
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
