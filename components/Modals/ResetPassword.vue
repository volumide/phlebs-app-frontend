<template>
  <div class="innner_ come-up">
    <p class="title">
      You can now reset your Password
    </p>
    <p class="sub-title">
      Enter a minimum of 6 Characters to create a new Password.
    </p>
    <p class="sub-title">
      Password sould contain a at least One UPPERCASE, one symbol and one Number
    </p>
    <div class="form">
      <div v-if="error">
        <AlertsError :error-text="errorText" />
      </div>
      <div class="input-box">
        <p class="label">
          Create New Password
        </p>
        <div class="new_input">
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clip-path="url(#clip0_11_300)">
              <path d="M15.8334 7.02V5.83333C15.8334 4.28624 15.2188 2.80251 14.1248 1.70854C13.0308 0.614582 11.5471 0 10 0C8.45292 0 6.96919 0.614582 5.87523 1.70854C4.78127 2.80251 4.16669 4.28624 4.16669 5.83333V7.02C3.42449 7.34392 2.79276 7.8771 2.34877 8.55434C1.90477 9.23158 1.66775 10.0235 1.66669 10.8333V15.8333C1.66801 16.938 2.10742 17.997 2.88854 18.7782C3.66965 19.5593 4.72869 19.9987 5.83335 20H14.1667C15.2713 19.9987 16.3304 19.5593 17.1115 18.7782C17.8926 17.997 18.332 16.938 18.3334 15.8333V10.8333C18.3323 10.0235 18.0953 9.23158 17.6513 8.55434C17.2073 7.8771 16.5756 7.34392 15.8334 7.02ZM5.83335 5.83333C5.83335 4.72826 6.27234 3.66846 7.05374 2.88705C7.83514 2.10565 8.89495 1.66667 10 1.66667C11.1051 1.66667 12.1649 2.10565 12.9463 2.88705C13.7277 3.66846 14.1667 4.72826 14.1667 5.83333V6.66667H5.83335V5.83333ZM16.6667 15.8333C16.6667 16.4964 16.4033 17.1323 15.9345 17.6011C15.4656 18.0699 14.8297 18.3333 14.1667 18.3333H5.83335C5.17031 18.3333 4.53443 18.0699 4.06559 17.6011C3.59675 17.1323 3.33335 16.4964 3.33335 15.8333V10.8333C3.33335 10.1703 3.59675 9.53441 4.06559 9.06557C4.53443 8.59672 5.17031 8.33333 5.83335 8.33333H14.1667C14.8297 8.33333 15.4656 8.59672 15.9345 9.06557C16.4033 9.53441 16.6667 10.1703 16.6667 10.8333V15.8333Z" fill="black" />
              <path d="M10 11.6667C9.77901 11.6667 9.56705 11.7545 9.41076 11.9108C9.25448 12.0671 9.16669 12.2791 9.16669 12.5001V14.1667C9.16669 14.3878 9.25448 14.5997 9.41076 14.756C9.56705 14.9123 9.77901 15.0001 10 15.0001C10.221 15.0001 10.433 14.9123 10.5893 14.756C10.7456 14.5997 10.8334 14.3878 10.8334 14.1667V12.5001C10.8334 12.2791 10.7456 12.0671 10.5893 11.9108C10.433 11.7545 10.221 11.6667 10 11.6667Z" fill="black" />
            </g>
            <defs>
              <clipPath id="clip0_11_300">
                <rect width="20" height="20" fill="white" />
              </clipPath>
            </defs>
          </svg>
          <input v-model="new_password" placeholder="Enter Password" :type="new_type" @focus="error = false">
          <svg
            v-if="new_type === 'password'"
            class="pass_svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            @click="showHideNew()"
          >
            <path d="M22.0828 11.3953C19.861 6.71484 16.5024 4.35938 12 4.35938C7.49533 4.35938 4.13908 6.71484 1.9172 11.3977C1.82808 11.5864 1.78186 11.7925 1.78186 12.0012C1.78186 12.2099 1.82808 12.416 1.9172 12.6047C4.13908 17.2852 7.49767 19.6406 12 19.6406C16.5047 19.6406 19.861 17.2852 22.0828 12.6023C22.2633 12.2227 22.2633 11.782 22.0828 11.3953ZM12 17.9531C8.21954 17.9531 5.45158 16.0359 3.49923 12C5.45158 7.96406 8.21954 6.04688 12 6.04688C15.7805 6.04688 18.5485 7.96406 20.5008 12C18.5508 16.0359 15.7828 17.9531 12 17.9531ZM11.9063 7.875C9.62814 7.875 7.78126 9.72188 7.78126 12C7.78126 14.2781 9.62814 16.125 11.9063 16.125C14.1844 16.125 16.0313 14.2781 16.0313 12C16.0313 9.72188 14.1844 7.875 11.9063 7.875ZM11.9063 14.625C10.4555 14.625 9.28126 13.4508 9.28126 12C9.28126 10.5492 10.4555 9.375 11.9063 9.375C13.357 9.375 14.5313 10.5492 14.5313 12C14.5313 13.4508 13.357 14.625 11.9063 14.625Z" fill="black" />
          </svg>
          <svg
            v-else
            class="pass_svg"
            width="24"
            height="24"
            viewBox="0 0 32 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            @click="showHideNew()"
          >
            <path d="M6 5.00012L26 27.0001" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M19.3634 19.6999C18.3822 20.5918 17.0868 21.0573 15.7623 20.9942C14.4378 20.9311 13.1926 20.3444 12.3006 19.3632C11.4086 18.3821 10.9429 17.0868 11.006 15.7622C11.069 14.4377 11.6555 13.1925 12.6366 12.3004" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M9.24931 8.57434C4.15315 11.155 2 16.0001 2 16.0001C2 16.0001 6 24.9992 16 24.9992C18.343 25.0178 20.6567 24.4782 22.7497 23.4248" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M26.0762 21.1376C28.8014 18.6967 30 16.0001 30 16.0001C30 16.0001 26 6.99917 16 6.99917C15.1339 6.99775 14.2692 7.06816 13.4147 7.20968" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M16.9409 11.0886C18.0036 11.2927 18.9715 11.8358 19.6994 12.6365C20.4274 13.4373 20.876 14.4524 20.9781 15.5297" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
          </svg>
        </div>
      </div>
      <div class="input-box">
        <p class="label">
          Confirm Password
        </p>
        <div class="new_input">
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clip-path="url(#clip0_11_300)">
              <path d="M15.8334 7.02V5.83333C15.8334 4.28624 15.2188 2.80251 14.1248 1.70854C13.0308 0.614582 11.5471 0 10 0C8.45292 0 6.96919 0.614582 5.87523 1.70854C4.78127 2.80251 4.16669 4.28624 4.16669 5.83333V7.02C3.42449 7.34392 2.79276 7.8771 2.34877 8.55434C1.90477 9.23158 1.66775 10.0235 1.66669 10.8333V15.8333C1.66801 16.938 2.10742 17.997 2.88854 18.7782C3.66965 19.5593 4.72869 19.9987 5.83335 20H14.1667C15.2713 19.9987 16.3304 19.5593 17.1115 18.7782C17.8926 17.997 18.332 16.938 18.3334 15.8333V10.8333C18.3323 10.0235 18.0953 9.23158 17.6513 8.55434C17.2073 7.8771 16.5756 7.34392 15.8334 7.02ZM5.83335 5.83333C5.83335 4.72826 6.27234 3.66846 7.05374 2.88705C7.83514 2.10565 8.89495 1.66667 10 1.66667C11.1051 1.66667 12.1649 2.10565 12.9463 2.88705C13.7277 3.66846 14.1667 4.72826 14.1667 5.83333V6.66667H5.83335V5.83333ZM16.6667 15.8333C16.6667 16.4964 16.4033 17.1323 15.9345 17.6011C15.4656 18.0699 14.8297 18.3333 14.1667 18.3333H5.83335C5.17031 18.3333 4.53443 18.0699 4.06559 17.6011C3.59675 17.1323 3.33335 16.4964 3.33335 15.8333V10.8333C3.33335 10.1703 3.59675 9.53441 4.06559 9.06557C4.53443 8.59672 5.17031 8.33333 5.83335 8.33333H14.1667C14.8297 8.33333 15.4656 8.59672 15.9345 9.06557C16.4033 9.53441 16.6667 10.1703 16.6667 10.8333V15.8333Z" fill="black" />
              <path d="M10 11.6667C9.77901 11.6667 9.56705 11.7545 9.41076 11.9108C9.25448 12.0671 9.16669 12.2791 9.16669 12.5001V14.1667C9.16669 14.3878 9.25448 14.5997 9.41076 14.756C9.56705 14.9123 9.77901 15.0001 10 15.0001C10.221 15.0001 10.433 14.9123 10.5893 14.756C10.7456 14.5997 10.8334 14.3878 10.8334 14.1667V12.5001C10.8334 12.2791 10.7456 12.0671 10.5893 11.9108C10.433 11.7545 10.221 11.6667 10 11.6667Z" fill="black" />
            </g>
            <defs>
              <clipPath id="clip0_11_300">
                <rect width="20" height="20" fill="white" />
              </clipPath>
            </defs>
          </svg>
          <input v-model="confrim_password" placeholder="Enter Password" :type="confirm_type" @focus="error = false">
          <svg
            v-if="confirm_type === 'password'"
            class="pass_svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            @click="showHideConfirm()"
          >
            <path d="M22.0828 11.3953C19.861 6.71484 16.5024 4.35938 12 4.35938C7.49533 4.35938 4.13908 6.71484 1.9172 11.3977C1.82808 11.5864 1.78186 11.7925 1.78186 12.0012C1.78186 12.2099 1.82808 12.416 1.9172 12.6047C4.13908 17.2852 7.49767 19.6406 12 19.6406C16.5047 19.6406 19.861 17.2852 22.0828 12.6023C22.2633 12.2227 22.2633 11.782 22.0828 11.3953ZM12 17.9531C8.21954 17.9531 5.45158 16.0359 3.49923 12C5.45158 7.96406 8.21954 6.04688 12 6.04688C15.7805 6.04688 18.5485 7.96406 20.5008 12C18.5508 16.0359 15.7828 17.9531 12 17.9531ZM11.9063 7.875C9.62814 7.875 7.78126 9.72188 7.78126 12C7.78126 14.2781 9.62814 16.125 11.9063 16.125C14.1844 16.125 16.0313 14.2781 16.0313 12C16.0313 9.72188 14.1844 7.875 11.9063 7.875ZM11.9063 14.625C10.4555 14.625 9.28126 13.4508 9.28126 12C9.28126 10.5492 10.4555 9.375 11.9063 9.375C13.357 9.375 14.5313 10.5492 14.5313 12C14.5313 13.4508 13.357 14.625 11.9063 14.625Z" fill="black" />
          </svg>
          <svg
            v-else
            class="pass_svg"
            width="24"
            height="24"
            viewBox="0 0 32 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            @click="showHideConfirm()"
          >
            <path d="M6 5.00012L26 27.0001" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M19.3634 19.6999C18.3822 20.5918 17.0868 21.0573 15.7623 20.9942C14.4378 20.9311 13.1926 20.3444 12.3006 19.3632C11.4086 18.3821 10.9429 17.0868 11.006 15.7622C11.069 14.4377 11.6555 13.1925 12.6366 12.3004" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M9.24931 8.57434C4.15315 11.155 2 16.0001 2 16.0001C2 16.0001 6 24.9992 16 24.9992C18.343 25.0178 20.6567 24.4782 22.7497 23.4248" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M26.0762 21.1376C28.8014 18.6967 30 16.0001 30 16.0001C30 16.0001 26 6.99917 16 6.99917C15.1339 6.99775 14.2692 7.06816 13.4147 7.20968" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M16.9409 11.0886C18.0036 11.2927 18.9715 11.8358 19.6994 12.6365C20.4274 13.4373 20.876 14.4524 20.9781 15.5297" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
          </svg>
        </div>
      </div>
      <button v-if="resetLoading" class="bg_btn">
        <Loader class="come-down" />
      </button>
      <button v-else class="bg_btn" :disabled="disabled" @click="resetPassword()">
        Reset Password
      </button>
    </div>
  </div>
</template>

<script>
import Cookies from 'js-cookie'
export default {
  props: {
    code: {
      type: String,
      default: () => ''
    }
  },
  data () {
    return {
      resetLoading: false,
      error: false,
      errorText: '',
      new_type: 'password',
      confirm_type: 'password',
      new_password: '',
      confrim_password: ''
    }
  },
  computed: {
    disabled () {
      return (
        this.new_password === '' ||
        this.confrim_password === ''
      )
    }
  },
  methods: {
    showHideNew () {
      if (this.new_type === 'password') {
        this.new_type = 'text'
      } else if (this.new_type === 'text') {
        this.new_type = 'password'
      }
    },
    showHideConfirm () {
      if (this.confirm_type === 'password') {
        this.confirm_type = 'text'
      } else if (this.confirm_type === 'text') {
        this.confirm_type = 'password'
      }
    },
    resetPassword () {
      if (this.new_password === this.confrim_password) {
        this.resetLoading = true
        this.$axios.$post('/auth/reset/password',
          {
            resetOTP: this.code,
            newPassword: this.new_password
          },
          {
            headers: {
              Authorization: `Bearer ${Cookies.get('token')}`
            }
          }
        ).then((response) => {
          console.log(response)
          this.resetLoading = false
          if (!response.error) {
            this.$emit('close-reset')
          } else {
            this.error = true
            this.errorText = response.errorMsg
          }
        // this.editAccess = response.editAccess
        }).catch((onrejected) => {
          // console.log(onrejected)
          this.resetLoading = false
        })
      } else {
        this.error = true
        this.errorText = 'Comfirm New Password is wrong'
        setTimeout(() => {
          this.error = false
        }, 3000)
      }
      // this.resetLoading = false
    }
  }
}
</script>

<style scoped>

.title {
  font-size: 20px;
  font-weight: 700;
  color: var(--primary-color);
}

.sub-title {
  color: black;
  line-height: 20px;
  margin-top: 20px;
}

.form {
  margin-top: 3rem;
}

.input-box {
  margin-bottom: 3vh;
}

.bg_btn {
  width: 100%;
  margin-top: 3.5vh;
}

.back {
  color: #00285d71;
  font-size: 13px;
  margin-top: 20px;
  margin-bottom: 5vh;
}

button:disabled,
button[disabled] {
  background-color: #cacaca;
  color: #929292;
  cursor: not-allowed;
  opacity: 0.7;
}

@media only screen and (max-width: 500px) {
  .title {
    font-size: 18px;
    margin-top: 1.5rem;
  }
  .sub-title {
    font-size: 13px;
  }
}
</style>
