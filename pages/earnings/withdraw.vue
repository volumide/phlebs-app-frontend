<template>
  <div class="container">
    <div class="inner">
      <div class="back" @click="$router.go(-1)">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M19 11.0008H9L12.29 7.71079C12.3837 7.61783 12.4581 7.50723 12.5089 7.38537C12.5597 7.26351 12.5858 7.1328 12.5858 7.00079C12.5858 6.86878 12.5597 6.73807 12.5089 6.61622C12.4581 6.49436 12.3837 6.38376 12.29 6.29079C12.1026 6.10454 11.8492 6 11.585 6C11.3208 6 11.0674 6.10454 10.88 6.29079L6.59 10.5908C6.21441 10.9641 6.00223 11.4712 6 12.0008C6.00487 12.5269 6.21684 13.0299 6.59 13.4008L10.88 17.7008C10.9732 17.7934 11.0838 17.8667 11.2054 17.9165C11.3269 17.9664 11.4571 17.9918 11.5885 17.9913C11.7199 17.9909 11.8499 17.9645 11.9712 17.9138C12.0924 17.8631 12.2024 17.789 12.295 17.6958C12.3876 17.6026 12.4609 17.492 12.5107 17.3704C12.5606 17.2489 12.586 17.1187 12.5856 16.9873C12.5851 16.8559 12.5588 16.7258 12.508 16.6046C12.4573 16.4834 12.3832 16.3734 12.29 16.2808L9 13.0008H19C19.2652 13.0008 19.5196 12.8954 19.7071 12.7079C19.8946 12.5204 20 12.266 20 12.0008C20 11.7356 19.8946 11.4812 19.7071 11.2937C19.5196 11.1061 19.2652 11.0008 19 11.0008Z" fill="black" />
        </svg>
        <p>Back</p>
      </div>
      <div class="top">
        <div class="lhs">
          <p class="page_title">
            Withdrawal
          </p>
          <p class="subhead">
            Withdraw from your Chekker Wallet
          </p>
        </div>
        <div class="rhs">
          <p class="balance_title">
            Wallet Balance
          </p>
          <div class="balance_box">
            <div class="icon mobile_no_show">
              <svg
                v-if="hideBalance"
                class="pass_svg"
                width="26"
                height="26"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                @click="showHide()"
              >
                <path d="M22.0828 11.3953C19.861 6.71484 16.5024 4.35938 12 4.35938C7.49533 4.35938 4.13908 6.71484 1.9172 11.3977C1.82808 11.5864 1.78186 11.7925 1.78186 12.0012C1.78186 12.2099 1.82808 12.416 1.9172 12.6047C4.13908 17.2852 7.49767 19.6406 12 19.6406C16.5047 19.6406 19.861 17.2852 22.0828 12.6023C22.2633 12.2227 22.2633 11.782 22.0828 11.3953ZM12 17.9531C8.21954 17.9531 5.45158 16.0359 3.49923 12C5.45158 7.96406 8.21954 6.04688 12 6.04688C15.7805 6.04688 18.5485 7.96406 20.5008 12C18.5508 16.0359 15.7828 17.9531 12 17.9531ZM11.9063 7.875C9.62814 7.875 7.78126 9.72188 7.78126 12C7.78126 14.2781 9.62814 16.125 11.9063 16.125C14.1844 16.125 16.0313 14.2781 16.0313 12C16.0313 9.72188 14.1844 7.875 11.9063 7.875ZM11.9063 14.625C10.4555 14.625 9.28126 13.4508 9.28126 12C9.28126 10.5492 10.4555 9.375 11.9063 9.375C13.357 9.375 14.5313 10.5492 14.5313 12C14.5313 13.4508 13.357 14.625 11.9063 14.625Z" fill="#00295D" />
              </svg>
              <svg
                v-else
                class="pass_svg"
                width="26"
                height="26"
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                @click="showHide()"
              >
                <path d="M6 5.00012L26 27.0001" stroke="#00295D" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M19.3634 19.6999C18.3822 20.5918 17.0868 21.0573 15.7623 20.9942C14.4378 20.9311 13.1926 20.3444 12.3006 19.3632C11.4086 18.3821 10.9429 17.0868 11.006 15.7622C11.069 14.4377 11.6555 13.1925 12.6366 12.3004" stroke="#00295D" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M9.24931 8.57434C4.15315 11.155 2 16.0001 2 16.0001C2 16.0001 6 24.9992 16 24.9992C18.343 25.0178 20.6567 24.4782 22.7497 23.4248" stroke="#00295D" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M26.0762 21.1376C28.8014 18.6967 30 16.0001 30 16.0001C30 16.0001 26 6.99917 16 6.99917C15.1339 6.99775 14.2692 7.06816 13.4147 7.20968" stroke="#00295D" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M16.9409 11.0886C18.0036 11.2927 18.9715 11.8358 19.6994 12.6365C20.4274 13.4373 20.876 14.4524 20.9781 15.5297" stroke="#00295D" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
              </svg>
            </div>
            <p v-if="hideBalance" class="balance">
              XXXXXX
            </p>
            <p v-else class="balance">
              {{ currency(balance ? balance : 0) }}
            </p>
            <div class="icon no_show">
              <svg
                v-if="hideBalance"
                class="pass_svg"
                width="26"
                height="26"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                @click="showHide()"
              >
                <path d="M22.0828 11.3953C19.861 6.71484 16.5024 4.35938 12 4.35938C7.49533 4.35938 4.13908 6.71484 1.9172 11.3977C1.82808 11.5864 1.78186 11.7925 1.78186 12.0012C1.78186 12.2099 1.82808 12.416 1.9172 12.6047C4.13908 17.2852 7.49767 19.6406 12 19.6406C16.5047 19.6406 19.861 17.2852 22.0828 12.6023C22.2633 12.2227 22.2633 11.782 22.0828 11.3953ZM12 17.9531C8.21954 17.9531 5.45158 16.0359 3.49923 12C5.45158 7.96406 8.21954 6.04688 12 6.04688C15.7805 6.04688 18.5485 7.96406 20.5008 12C18.5508 16.0359 15.7828 17.9531 12 17.9531ZM11.9063 7.875C9.62814 7.875 7.78126 9.72188 7.78126 12C7.78126 14.2781 9.62814 16.125 11.9063 16.125C14.1844 16.125 16.0313 14.2781 16.0313 12C16.0313 9.72188 14.1844 7.875 11.9063 7.875ZM11.9063 14.625C10.4555 14.625 9.28126 13.4508 9.28126 12C9.28126 10.5492 10.4555 9.375 11.9063 9.375C13.357 9.375 14.5313 10.5492 14.5313 12C14.5313 13.4508 13.357 14.625 11.9063 14.625Z" fill="#00295D" />
              </svg>
              <svg
                v-else
                class="pass_svg"
                width="26"
                height="26"
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                @click="showHide()"
              >
                <path d="M6 5.00012L26 27.0001" stroke="#00295D" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M19.3634 19.6999C18.3822 20.5918 17.0868 21.0573 15.7623 20.9942C14.4378 20.9311 13.1926 20.3444 12.3006 19.3632C11.4086 18.3821 10.9429 17.0868 11.006 15.7622C11.069 14.4377 11.6555 13.1925 12.6366 12.3004" stroke="#00295D" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M9.24931 8.57434C4.15315 11.155 2 16.0001 2 16.0001C2 16.0001 6 24.9992 16 24.9992C18.343 25.0178 20.6567 24.4782 22.7497 23.4248" stroke="#00295D" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M26.0762 21.1376C28.8014 18.6967 30 16.0001 30 16.0001C30 16.0001 26 6.99917 16 6.99917C15.1339 6.99775 14.2692 7.06816 13.4147 7.20968" stroke="#00295D" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M16.9409 11.0886C18.0036 11.2927 18.9715 11.8358 19.6994 12.6365C20.4274 13.4373 20.876 14.4524 20.9781 15.5297" stroke="#00295D" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div class="box">
        <p class="text">
          Kindly specify the amount you want to withdraw
        </p>
        <div v-if="error" class="error_box">
          <AlertsError :error-text="`Please Enter Amount`" />
        </div>
        <div class="box_inner">
          <div class="lside">
            <div class="input_cont">
              <p class="label">
                Enter Amount
              </p>
              <div class="new_input">
                <div class="currency">
                  ₦
                </div>
                <input v-model="amount" class="currency_input" type="number" @focus="error = false">
              </div>
            </div>
            <div class="input_cont">
              <p class="label">
                Bank Name
              </p>
              <div disabled class="new_input">
                <input v-model="accountDetails.bankofdeposit" disabled type="text" @focus="error = false">
              </div>
            </div>
          </div>
          <div class="rside">
            <div class="input_cont">
              <p class="label">
                Account Number
              </p>
              <div disabled class="new_input">
                <input v-model="accountDetails.account_number" disabled type="text" @focus="error = false">
              </div>
            </div>
            <div class="input_cont">
              <p class="label">
                Account Name
              </p>
              <div disabled class="new_input">
                <input v-model="accountDetails.account_name" disabled type="text" @focus="error = false">
              </div>
            </div>
          </div>
        </div>
        <div class="bottom_btn slide-in-from-left">
          <button class="bg_btn" @click="confirm()">
            Proceed
          </button>
        </div>
      </div>
    </div>
    <ModalsConfirmWithdrawModal
      v-if="confirmWithdraw"
      :amount="amount"
      :account-details="accountDetails"
      :modal-head="'Confirm Withdrawal'"
      :modal-text="'You have initiated a withrawal with the following detail'"
      :trans-btn="'Cancel'"
      :bg-btn="'Confirm'"
      @close-modal="confirmWithdraw = false"
      @bg-action="openTransactionPin()"
      @trans-action="confirmWithdraw = false"
    />
    <ModalsTransactionPin
      v-if="openPin"
      :amount="amount"
      :account-details="accountDetails"
      @close-modal="openPin = false"
      @trans-action="openPin = false"
      @bg-action="sendOtp()"
    />
    <ModalsSuccessModal
      v-if="successModal"
      :modal-image="require('assets/images/96673-success.gif')"
      :modal-head="'Withdrawal Successful'"
      :modal-text="'Your Transaction has been completed successfully'"
      :bg-btn="'Close'"
      @close-modal="successModal = false"
      @bg-action="successModal = false"
    />
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
      hideBalance: true,
      openPin: false,
      confirmWithdraw: false,
      error: false,
      accountDetails: {},
      amount: '',
      successModal: false,
      balance: 'N601,400'
    }
  },
  created () {
    this.getWalletBalace()
    this.getPrimaryAccount()
  },
  methods: {
    showHide () {
      this.hideBalance = !this.hideBalance
    },
    confirm () {
      if (this.amount === '') {
        this.error = true
      } else {
        this.confirmWithdraw = true
      }
    },
    openTransactionPin () {
      this.confirmWithdraw = false
      this.openPin = true
    },
    getWalletBalace () {
      this.loading =
      this.$axios.$get('/auth/wallet/balance', {
        headers: {
          Authorization: `Bearer ${Cookies.get('token')}`
        }
      }).then((response) => {
        this.loading = false
        // console.log(response)
        this.balance = response.wallet_amount
      })
    },
    getPrimaryAccount () {
      this.loading =
      this.$axios.$get('/earning/get/primary/account', {
        headers: {
          Authorization: `Bearer ${Cookies.get('token')}`
        }
      }).then((response) => {
        this.loading = false
        console.log(response)
        this.accountDetails = response.data
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

.top {
  display: flex;
  justify-content: space-between;
  margin-top: 30px;
}

.head {
  font-weight: 700;
  margin-bottom: 10px;
  font-size: 18px;
}

.balance_box {
  display: flex;
}

.pass_svg {
  width: 22px;
  height: 22px;
}

.balance_title {
  margin-bottom: 10px;
  color: rgba(0, 0, 0, 0.284);
  text-align: right;
}

.balance {
  font-weight: 600;
  font-size: 18px;
  margin-left: 10px;
}

.box {
  background: #FFFFFF;
  border: 1px solid rgba(0, 41, 93, 0.1);
  border-radius: 10px;
  padding: 5vh 6vw;
  margin-top: 5vh;
}

.box_inner {
  margin-top: 2vh;
  width: 100%;
  /* display: flex; */
}

.box_inner .lside,
.box_inner .rside {
  display: flex;
  justify-content: space-between;
}

.input_cont {
  margin-top: 40px;
  flex-basis: 45%;
}

.error_box {
  margin-top: 10px;
}

.bottom_btn {
  display: flex;
  justify-content: flex-end;
  margin-top: 6vh;
}

.bg_btn {
  width: 8rem;
}

input:disabled,
.new_input[disabled] {
  background-color: #CFD6DE;
  color: #000000;
  cursor: not-allowed;
  /* opacity: 0.7; */
}

.currency {
  font-weight: 700;
  font-size: 18px;
  margin-left: 20px;
}

.currency_input {
  padding-left: 10px;
}

@media only screen and (max-width: 500px) {
  .container {
    padding: 4vh 8vw;
  }
  .top {
    flex-direction: column;
  }

  .head {
    margin-bottom: 4px;
    font-size: px;
  }

  .rhs {
    margin-top: 20px;
  }

  .balance_title {
    text-align: left;
    margin-bottom: 4px;
    font-size: 12px;
  }

  .balance {
    margin-left: 0;
    margin-right: 10px;
  }

  .box {
    border: none;
    padding: 0;
  }

  .box_inner .lside,
  .box_inner .rside {
    flex-direction: column;
  }

  .bg_btn {
    width: 100%;
  }
}
</style>
