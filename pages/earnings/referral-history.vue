<template>
  <div class="container">
    <div class="inner">
      <div class="back" @click="$router.go(-1)">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M19 11.0008H9L12.29 7.71079C12.3837 7.61783 12.4581 7.50723 12.5089 7.38537C12.5597 7.26351 12.5858 7.1328 12.5858 7.00079C12.5858 6.86878 12.5597 6.73807 12.5089 6.61622C12.4581 6.49436 12.3837 6.38376 12.29 6.29079C12.1026 6.10454 11.8492 6 11.585 6C11.3208 6 11.0674 6.10454 10.88 6.29079L6.59 10.5908C6.21441 10.9641 6.00223 11.4712 6 12.0008C6.00487 12.5269 6.21684 13.0299 6.59 13.4008L10.88 17.7008C10.9732 17.7934 11.0838 17.8667 11.2054 17.9165C11.3269 17.9664 11.4571 17.9918 11.5885 17.9913C11.7199 17.9909 11.8499 17.9645 11.9712 17.9138C12.0924 17.8631 12.2024 17.789 12.295 17.6958C12.3876 17.6026 12.4609 17.492 12.5107 17.3704C12.5606 17.2489 12.586 17.1187 12.5856 16.9873C12.5851 16.8559 12.5588 16.7258 12.508 16.6046C12.4573 16.4834 12.3832 16.3734 12.29 16.2808L9 13.0008H19C19.2652 13.0008 19.5196 12.8954 19.7071 12.7079C19.8946 12.5204 20 12.266 20 12.0008C20 11.7356 19.8946 11.4812 19.7071 11.2937C19.5196 11.1061 19.2652 11.0008 19 11.0008Z" fill="black" />
        </svg>
        <p>Back</p>
      </div>
      <div class="balance_box">
        <p>{{ currency(balance) }}</p>
      </div>
      <div class="">
        <TablesReferralTable :table-data="todoData" :table-loader="todoLoading" />
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
      currency: functions.formatCurrency,
      balance: ''
    }
  },
  created () {
    this.getWalletBalace()
  },
  methods: {
    getWalletBalace () {
      this.loading = true
      this.$axios.$get('/auth/wallet/balance', {
        headers: {
          Authorization: `Bearer ${Cookies.get('token')}`
        }
      }).then((response) => {
        this.loading = false
        // console.log(response)
        this.balance = response.wallet_amount
      })
    }
  }

}
</script>

<style scoped>
.container {
  padding: 2vh 3vw 5vh;
}

.inner {
  width: 95%;
}

.back {
  display: flex;
  align-items: center;
  gap: 5px;
  cursor: pointer;
}

.back p {
  color: rgba(0, 0, 0, 0.500);
  font-size: 16px;
}

.balance_box {
  margin-top: 20px;
  margin-bottom: 20px;
  background-color: #FFFFFF;
  border: 1px solid rgba(0, 41, 93, 0.1);
  box-shadow: 0px 4px 4px rgba(0, 41, 93, 0.1);
  border-radius: 6px;
  width: 13rem;
  height: 65px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.balance_box p {
  font-weight: 700;
  font-size: 24px;
  color: #00295D;
}
</style>
