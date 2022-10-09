<template>
  <div class="inner_ come-up">
    <p class="title">
      Verify Whatsapp Number
    </p>
    <p class="sub-title">
      We’ve sent a verification code to you via Whatsapp
    </p>
    <div class="form">
      <div v-if="error">
        <AlertsError :error-text="errorText" />
      </div>
      <div v-if="success">
        <AlertsSuccess :success-text="successText" />
      </div>
      <div v-if="changeNumber" class="input-box come-down">
        <p class="label">
          Phone Number
        </p>
        <div class="new_input">
          <svg width="24" height="24" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M11.5595 15.6019C12.5968 17.7226 14.3158 19.4338 16.4412 20.4614C16.5967 20.5351 16.7687 20.567 16.9403 20.554C17.1119 20.541 17.2771 20.4836 17.4198 20.3874L20.5492 18.3006C20.6877 18.2083 20.8469 18.152 21.0126 18.1368C21.1782 18.1215 21.3451 18.1479 21.498 18.2134L27.3526 20.7225C27.5515 20.807 27.7175 20.9538 27.8257 21.1409C27.9339 21.328 27.9783 21.5451 27.9524 21.7596C27.7673 23.2076 27.0608 24.5385 25.9652 25.5031C24.8695 26.4678 23.4598 26.9999 22 27C17.4913 27 13.1673 25.2089 9.97919 22.0208C6.79107 18.8327 5 14.5087 5 10C5.00008 8.54022 5.53224 7.13052 6.49685 6.03485C7.46146 4.93918 8.79237 4.23267 10.2404 4.04763C10.4549 4.02167 10.672 4.06612 10.8591 4.1743C11.0461 4.28248 11.193 4.44852 11.2775 4.6474L13.7888 10.5071C13.8537 10.6587 13.8802 10.824 13.8658 10.9883C13.8514 11.1525 13.7967 11.3107 13.7064 11.4487L11.6268 14.6261C11.5322 14.7691 11.4762 14.9341 11.4644 15.1051C11.4526 15.2762 11.4854 15.4473 11.5595 15.6019V15.6019Z" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
          </svg>
          <input v-model="phone" placeholder="08012345678" type="number" @focus="error = false">
        </div>
        <button v-if="changeLoading" class="bg_btn" disabled>
          <Loader class="come-down" />
        </button>
        <button v-else class="bg_btn" @click="changePhoneNumber()">
          Submit Number
        </button>
      </div>
      <div v-else>
        <p class="label">
          Enter code here
        </p>
        <PincodeInput
          v-model="code"
          :length="6"
          @input="error = false"
        />
        <div class="bottom_sec">
          <p class="no_code">
            Didn't Recieve Code
          </p>
          <div class="resend" @click="resendVerificationCode()">
            <p>Resend Code</p>
            <svg width="14" height="14" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M7.99981 1.33352C8.88415 1.33642 9.75913 1.51468 10.5741 1.85797C11.3891 2.20127 12.1279 2.7028 12.7478 3.33352H10.6665C10.4897 3.33352 10.3201 3.40376 10.1951 3.52878C10.07 3.6538 9.99981 3.82337 9.99981 4.00018C9.99981 4.177 10.07 4.34656 10.1951 4.47159C10.3201 4.59661 10.4897 4.66685 10.6665 4.66685H13.4285C13.7568 4.66667 14.0715 4.53619 14.3037 4.30405C14.5358 4.07192 14.6663 3.75713 14.6665 3.42885V0.666851C14.6665 0.49004 14.5962 0.32047 14.4712 0.195446C14.3462 0.0704219 14.1766 0.000183976 13.9998 0.000183976C13.823 0.000183976 13.6534 0.0704219 13.5284 0.195446C13.4034 0.32047 13.3331 0.49004 13.3331 0.666851V2.05218C12.2313 1.05982 10.8749 0.39379 9.41588 0.128683C7.95688 -0.136424 6.45289 0.00985861 5.07233 0.551149C3.69177 1.09244 2.48915 2.00736 1.59915 3.19347C0.709148 4.37957 0.166904 5.79001 0.0331428 7.26685C0.0245317 7.35969 0.0353533 7.4533 0.0649181 7.54173C0.0944829 7.63015 0.142143 7.71145 0.20486 7.78044C0.267578 7.84943 0.343979 7.9046 0.429195 7.94243C0.514411 7.98027 0.606573 7.99993 0.699809 8.00018C0.862868 8.00226 1.02083 7.94341 1.14278 7.83515C1.26473 7.72688 1.34189 7.57701 1.35914 7.41485C1.50755 5.75535 2.27113 4.21132 3.49986 3.08608C4.7286 1.96083 6.33369 1.33571 7.99981 1.33352Z" fill="#00295D" />
              <path d="M15.3008 8.00005C15.1378 7.99798 14.9798 8.05683 14.8579 8.16509C14.7359 8.27335 14.6588 8.42323 14.6415 8.58539C14.5313 9.85421 14.0594 11.0648 13.2819 12.0735C12.5044 13.0822 11.4539 13.8468 10.2549 14.2764C9.05598 14.7061 7.75896 14.7828 6.51773 14.4975C5.2765 14.2121 4.14316 13.5768 3.25216 12.6667H5.3335C5.51031 12.6667 5.67988 12.5965 5.8049 12.4715C5.92992 12.3464 6.00016 12.1769 6.00016 12.0001C6.00016 11.8232 5.92992 11.6537 5.8049 11.5286C5.67988 11.4036 5.51031 11.3334 5.3335 11.3334H2.5715C2.4089 11.3333 2.24787 11.3653 2.09763 11.4274C1.94739 11.4896 1.81088 11.5808 1.6959 11.6958C1.58093 11.8108 1.48974 11.9473 1.42755 12.0975C1.36537 12.2478 1.33341 12.4088 1.3335 12.5714V15.3334C1.3335 15.5102 1.40373 15.6798 1.52876 15.8048C1.65378 15.9298 1.82335 16.0001 2.00016 16.0001C2.17697 16.0001 2.34654 15.9298 2.47157 15.8048C2.59659 15.6798 2.66683 15.5102 2.66683 15.3334V13.9481C3.76872 14.9404 5.1251 15.6064 6.5841 15.8716C8.04309 16.1367 9.54708 15.9904 10.9276 15.4491C12.3082 14.9078 13.5108 13.9929 14.4008 12.8068C15.2908 11.6207 15.8331 10.2102 15.9668 8.73339C15.9754 8.64055 15.9646 8.54693 15.9351 8.45851C15.9055 8.37008 15.8578 8.28879 15.7951 8.2198C15.7324 8.15081 15.656 8.09564 15.5708 8.0578C15.4856 8.01997 15.3934 8.0003 15.3002 8.00005H15.3008Z" fill="#00295D" />
            </svg>
          </div>
        </div>
        <button v-if="loading" class="bg_btn" disabled>
          <Loader class="come-down" />
        </button>
        <button v-else class="bg_btn" @click="verifyNumber()">
          Submit Code
        </button>
      </div>
      <div v-if="!changeNumber" class="bottom_sec">
        <p class="no_code">
          {{ $route.query.phone }}
        </p>
        <div class="resend">
          <p @click="changeNumber = true">
            Change Number
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Cookies from 'js-cookie'
import functions from '@/utils/functions'
export default {
  data () {
    return {
      error: false,
      success: false,
      changeLoading: false,
      loading: false,
      errorText: '',
      successText: '',
      changeNumber: false,
      resendLoading: false,
      formatPhone: functions.formatPhoneNumber,
      code: '',
      phone: ''
    }
  },
  created () {
    this.getPhoneNumber()
  },
  methods: {
    getPhoneNumber () {
      this.$axios.$get('/auth/get_mobile_number', {
        headers: {
          Authorization: `Bearer ${Cookies.get('token')}`
        }
      }).then((response) => {
        // console.log(response)
      })
    },
    changePhoneNumber () {
      if (this.phone.replace(/[^\d.-]/g, '').length < 11 ||
          this.containsSpecialChars2(this.phone)
      ) {
        this.error = true
        this.errorText = 'Invalid Phone Number'
      } else {
        this.changeLoading = true
        this.$axios.$get(`/auth/change_mobile_number/${this.phone}`, {
          headers: {
            Authorization: `Bearer ${Cookies.get('token')}`
          }
        }).then((response) => {
          // console.log(response)
          this.changeLoading = false
          if (!response.error) {
            this.success = true
            this.successText = response.statusText
            setTimeout(() => {
              this.success = false
            }, 3000)
          } else {
            this.error = true
            this.errorText = response.errorMsg
          }
        })
      }
    },
    verifyNumber () {
      if (this.code.length < 6) {
        this.error = true
        this.errorText = 'Please fill up the OTP field'
        setTimeout(() => {
          this.error = false
        }, 3000)
      } else {
        this.loading = true
        // console.log(this.code)
        this.$axios.$get(`/auth/verify/${this.code}`, {
          headers: {
            Authorization: `Bearer ${Cookies.get('token')}`
          }
        }).then((response) => {
          this.loading = false
          // console.log(response)
          if (!response.error) {
            this.$emit('closeWhatsapp')
          } else {
            this.error = true
            this.errorText = response.errorMsg
          }
        })
      }
    },
    resendVerificationCode () {
      this.resendLoading = true
      this.$axios.$get('/auth/resend_verification_code', {
        headers: {
          Authorization: `Bearer ${Cookies.get('token')}`
        }
      }).then((response) => {
        this.resendLoading = false
        if (!response.error) {
          this.success = true
          this.successText = response.statusText
          setTimeout(() => {
            this.success = false
          }, 3000)
        } else {
          this.error = true
          this.errorText = response.errorMsg
        }
        // console.log(response)
      })
    },
    containsSpecialChars (value) {
      return /[`!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?~]/.test(value)
    },
    containsSpecialChars2 (value) {
      return /[`!@#$%^&*()_\-=[\]{};':"\\|,.<>/?~]/.test(value)
    },
    containsNumbers (value) {
      return /\d/.test(value)
    }
  }
}
</script>

<style scoped>

.inner_ {
  height: 100%;
  padding-top: 10vh;
}

.title {
  font-size: 20px;
  font-weight: 700;
  color: var(--primary-color);
}

.sub-title {
  color: black;
  margin-top: 10px;
}

.form {
  margin-top: 3rem;
}

.bg_btn {
  width: 100%;
  margin-top: 5.5vh;
}

.bottom_sec {
  padding-top: 3.5vh;
  display: flex;
  justify-content: space-between;
  width: 90%;
  margin: auto;
}

.no_code {
  color: rgba(0, 0, 0, 0.452);
}

.resend {
  display: flex;
  align-items: center;
  gap: 5px;
  cursor: pointer;
}

.resend p {
  color: var(--primary-color);
  font-weight: 700;
}

@media only screen and (max-width: 500px) {
  /* .inner_ {
    padding-top: 10vh;
  } */
  .title {
    font-size: 18px;
    margin-top: 3.5rem;
  }

  .sub-title {
    font-size: 13px;
  }

  .form {
    margin-top: 8vh;
  }
}
</style>
