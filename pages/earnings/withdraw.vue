<template>
  <div class="container">
    <div class="inner">
      <div class="back" @click="$router.go(-1)">
        <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M10.0629 6.40633L5.69343 10.786C5.31403 11.1676 5.10107 11.6839 5.10107 12.2221C5.10107 12.7602 5.31403 13.2765 5.69343 13.6582L10.0629 18.0378C10.2537 18.2275 10.5119 18.334 10.7809 18.334C11.05 18.334 11.3082 18.2275 11.499 18.0378C11.5944 17.9431 11.6702 17.8305 11.7219 17.7064C11.7736 17.5822 11.8003 17.4491 11.8003 17.3147C11.8003 17.1802 11.7736 17.0471 11.7219 16.923C11.6702 16.7988 11.5944 16.6862 11.499 16.5915L8.14806 13.2406H19.3518C19.6219 13.2406 19.881 13.1333 20.072 12.9423C20.263 12.7513 20.3703 12.4922 20.3703 12.2221C20.3703 11.9519 20.263 11.6929 20.072 11.5019C19.881 11.3109 19.6219 11.2035 19.3518 11.2035H8.14806L11.499 7.85262C11.6908 7.66218 11.7991 7.40335 11.8 7.13308C11.801 6.8628 11.6945 6.60321 11.5041 6.41142C11.3136 6.21963 11.0548 6.11134 10.7845 6.11039C10.5143 6.10943 10.2547 6.21589 10.0629 6.40633Z" fill="#325BD9" fill-opacity="0.5" />
        </svg>
        <p>Back</p>
      </div>
      <div class="top">
        <div class="lhs">
          <p class="head">
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
            <div class="icon">
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
              {{ balance ? balance : 0 }}
            </p>
          </div>
        </div>
      </div>
      <div class="box">
        <p class="text">
          Kindly specify the amount you want to withdraw
        </p>
        <div class="box_inner">
          <div class="lside">
            <div class="input_cont">
              <p class="label">
                Enter Amount
              </p>
              <div class="new_input">
                <input v-model="amount" type="text" @focus="error2 = false">
              </div>
            </div>
            <div class="input_cont">
              <p class="label">
                Account Number
              </p>
              <div disabled class="new_input">
                <input v-model="account_no" disabled type="text" @focus="error2 = false">
              </div>
            </div>
          </div>
          <div class="rside">
            <div class="input_cont">
              <p class="label">
                Bank Name
              </p>
              <div disabled class="new_input">
                <input v-model="bank_name" disabled type="text" @focus="error2 = false">
              </div>
            </div>
            <div class="input_cont">
              <p class="label">
                Account Name
              </p>
              <div disabled class="new_input">
                <input v-model="account_name" disabled type="text" @focus="error2 = false">
              </div>
            </div>
          </div>
        </div>
        <div class="bottom_btn slide-in-from-left">
          <button class="bg_btn" @click="updateNumber()">
            Proceed
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  layout: 'MainLayout',
  data () {
    return {
      hideBalance: true,
      balance: 'N601,400'
    }
  },
  methods: {
    showHide () {
      this.hideBalance = !this.hideBalance
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
  display: flex;
  justify-content: space-between;
}

.box_inner .lside,
.box_inner .rside {
  flex-basis: 45%;
}

.input_cont {
  margin-top: 40px;
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
  background-color: #cacaca;
  color: #929292;
  cursor: not-allowed;
  opacity: 0.7;
}
</style>
