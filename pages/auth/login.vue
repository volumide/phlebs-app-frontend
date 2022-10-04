<template>
  <div class="container">
    <div class="inner">
      <div class="lhs">
        <div class="logo">
          <img src="~assets/images/logo-white.png" alt="">
        </div>
        <div class="intro slide-in-from-left">
          <p class="intro_header">
            Customised Portal for Field Health Workers
          </p>
          <p class="intro_subheader">
            Log and Monitor your daily test order on your customised dashboard
          </p>
        </div>
        <div class="mobile inner_ come-up no_show">
          <p class="title">
            Login to your Account
          </p>
          <p class="sub-title">
            Welcome Back
          </p>
          <div class="form">
            <div v-if="error">
              <AlertsError :error-text="`Incorrect Username or Password, Try again!`" />
            </div>
            <div class="input-box">
              <p class="label">
                Email
              </p>
              <div class="new_input">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g clip-path="url(#clip0_11_295)">
                    <path d="M15.8333 0.833252H4.16667C3.062 0.834575 2.00296 1.27399 1.22185 2.0551C0.440735 2.83622 0.00132321 3.89526 0 4.99992L0 14.9999C0.00132321 16.1046 0.440735 17.1636 1.22185 17.9447C2.00296 18.7259 3.062 19.1653 4.16667 19.1666H15.8333C16.938 19.1653 17.997 18.7259 18.7782 17.9447C19.5593 17.1636 19.9987 16.1046 20 14.9999V4.99992C19.9987 3.89526 19.5593 2.83622 18.7782 2.0551C17.997 1.27399 16.938 0.834575 15.8333 0.833252ZM4.16667 2.49992H15.8333C16.3323 2.5009 16.8196 2.65118 17.2325 2.93142C17.6453 3.21166 17.9649 3.60904 18.15 4.07242L11.7683 10.4549C11.2987 10.9227 10.6628 11.1853 10 11.1853C9.33715 11.1853 8.70131 10.9227 8.23167 10.4549L1.85 4.07242C2.03512 3.60904 2.35468 3.21166 2.76754 2.93142C3.1804 2.65118 3.66768 2.5009 4.16667 2.49992ZM15.8333 17.4999H4.16667C3.50363 17.4999 2.86774 17.2365 2.3989 16.7677C1.93006 16.2988 1.66667 15.663 1.66667 14.9999V6.24992L7.05333 11.6333C7.83552 12.4135 8.89521 12.8516 10 12.8516C11.1048 12.8516 12.1645 12.4135 12.9467 11.6333L18.3333 6.24992V14.9999C18.3333 15.663 18.0699 16.2988 17.6011 16.7677C17.1323 17.2365 16.4964 17.4999 15.8333 17.4999Z" fill="black" />
                  </g>
                  <defs>
                    <clipPath id="clip0_11_295">
                      <rect width="20" height="20" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
                <input v-model="email" placeholder="Email Address" type="email">
              </div>
            </div>
            <div class="input-box">
              <p class="label">
                Password
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
                <input v-model="password" placeholder="Enter Password" :type="type">
                <svg
                  v-if="type === 'password'"
                  class="pass_svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  @click="showHide()"
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
                  @click="showHide()"
                >
                  <path d="M6 5.00012L26 27.0001" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                  <path d="M19.3634 19.6999C18.3822 20.5918 17.0868 21.0573 15.7623 20.9942C14.4378 20.9311 13.1926 20.3444 12.3006 19.3632C11.4086 18.3821 10.9429 17.0868 11.006 15.7622C11.069 14.4377 11.6555 13.1925 12.6366 12.3004" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                  <path d="M9.24931 8.57434C4.15315 11.155 2 16.0001 2 16.0001C2 16.0001 6 24.9992 16 24.9992C18.343 25.0178 20.6567 24.4782 22.7497 23.4248" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                  <path d="M26.0762 21.1376C28.8014 18.6967 30 16.0001 30 16.0001C30 16.0001 26 6.99917 16 6.99917C15.1339 6.99775 14.2692 7.06816 13.4147 7.20968" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                  <path d="M16.9409 11.0886C18.0036 11.2927 18.9715 11.8358 19.6994 12.6365C20.4274 13.4373 20.876 14.4524 20.9781 15.5297" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
              </div>
            </div>
            <div class="check_forgot">
              <label class="check-container">Stay Signed in
                <input class="check-input" type="checkbox" :checked="checked" @click="toogleCheck">
                <span class="checkmark" />
              </label>
              <p class="forgot" @click="$router.push('/auth/forgot-password/enter-email')">
                Forgot Password?
              </p>
            </div>
            <button v-if="loading" class="bg_btn" disabled>
              <Loader class="come-down" />
            </button>
            <button v-else class="bg_btn" @click="login()">
              Login
            </button>
            <p class="create" @click="$router.push('/auth/register')">
              Create Account
            </p>
          </div>
        </div>
      </div>
      <div class="rhs">
        <div class="rhs_inner">
          <div class="top_btn">
            <button class="trans_btn" @click="$router.push('/auth/register')">
              Create Account
            </button>
          </div>
          <div class="inner_">
            <p class="title">
              Login to your Account
            </p>
            <p class="sub-title">
              Welcome Back
            </p>
            <div class="form">
              <div v-if="error">
                <AlertsError :error-text="`Incorrect Username or Password, Try again!`" />
              </div>
              <div class="input-box">
                <p class="label">
                  Email
                </p>
                <div class="new_input">
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clip-path="url(#clip0_11_295)">
                      <path d="M15.8333 0.833252H4.16667C3.062 0.834575 2.00296 1.27399 1.22185 2.0551C0.440735 2.83622 0.00132321 3.89526 0 4.99992L0 14.9999C0.00132321 16.1046 0.440735 17.1636 1.22185 17.9447C2.00296 18.7259 3.062 19.1653 4.16667 19.1666H15.8333C16.938 19.1653 17.997 18.7259 18.7782 17.9447C19.5593 17.1636 19.9987 16.1046 20 14.9999V4.99992C19.9987 3.89526 19.5593 2.83622 18.7782 2.0551C17.997 1.27399 16.938 0.834575 15.8333 0.833252ZM4.16667 2.49992H15.8333C16.3323 2.5009 16.8196 2.65118 17.2325 2.93142C17.6453 3.21166 17.9649 3.60904 18.15 4.07242L11.7683 10.4549C11.2987 10.9227 10.6628 11.1853 10 11.1853C9.33715 11.1853 8.70131 10.9227 8.23167 10.4549L1.85 4.07242C2.03512 3.60904 2.35468 3.21166 2.76754 2.93142C3.1804 2.65118 3.66768 2.5009 4.16667 2.49992ZM15.8333 17.4999H4.16667C3.50363 17.4999 2.86774 17.2365 2.3989 16.7677C1.93006 16.2988 1.66667 15.663 1.66667 14.9999V6.24992L7.05333 11.6333C7.83552 12.4135 8.89521 12.8516 10 12.8516C11.1048 12.8516 12.1645 12.4135 12.9467 11.6333L18.3333 6.24992V14.9999C18.3333 15.663 18.0699 16.2988 17.6011 16.7677C17.1323 17.2365 16.4964 17.4999 15.8333 17.4999Z" fill="black" />
                    </g>
                    <defs>
                      <clipPath id="clip0_11_295">
                        <rect width="20" height="20" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                  <input v-model="email" placeholder="Email Address" type="email">
                </div>
              </div>
              <div class="input-box">
                <p class="label">
                  Password
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
                  <input v-model="password" placeholder="Enter Password" :type="type">
                  <svg
                    v-if="type === 'password'"
                    class="pass_svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    @click="showHide()"
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
                    @click="showHide()"
                  >
                    <path d="M6 5.00012L26 27.0001" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M19.3634 19.6999C18.3822 20.5918 17.0868 21.0573 15.7623 20.9942C14.4378 20.9311 13.1926 20.3444 12.3006 19.3632C11.4086 18.3821 10.9429 17.0868 11.006 15.7622C11.069 14.4377 11.6555 13.1925 12.6366 12.3004" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M9.24931 8.57434C4.15315 11.155 2 16.0001 2 16.0001C2 16.0001 6 24.9992 16 24.9992C18.343 25.0178 20.6567 24.4782 22.7497 23.4248" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M26.0762 21.1376C28.8014 18.6967 30 16.0001 30 16.0001C30 16.0001 26 6.99917 16 6.99917C15.1339 6.99775 14.2692 7.06816 13.4147 7.20968" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M16.9409 11.0886C18.0036 11.2927 18.9715 11.8358 19.6994 12.6365C20.4274 13.4373 20.876 14.4524 20.9781 15.5297" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                  </svg>
                </div>
              </div>
              <div class="check_forgot">
                <label class="check-container">Stay Signed in
                  <input class="check-input" type="checkbox" :checked="checked" @click="toogleCheck">
                  <span class="checkmark" />
                </label>
                <p class="forgot" @click="$router.push('/auth/forgot-password/enter-email')">
                  Forgot Password?
                </p>
              </div>
              <button v-if="loading" class="bg_btn" disabled>
                <Loader class="come-down" />
              </button>
              <button v-else class="bg_btn" @click="login()">
                Login
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <ModalsResetPassword v-if="resetPassword" @sentInst="sentInst" @close-modal="resetPassword = false" />
    <ModalsLinkSent v-if="linkSent" @set-password="setPassword" />
    <ModalsCreatePassword v-if="createPassword" />
  </div>
</template>

<script>
import Cookies from 'js-cookie'
export default {
  data () {
    return {
      loading: false,
      checked: false,
      error: false,
      resetPassword: false,
      linkSent: false,
      createPassword: false,
      email: '',
      password: '',
      type: 'password'
    }
  },
  methods: {
    showHide () {
      if (this.type === 'password') {
        this.type = 'text'
      } else if (this.type === 'text') {
        this.type = 'password'
      }
    },
    toogleCheck () {
      this.checked = !this.checked
    },
    sentInst () {
      this.resetPassword = false
      this.linkSent = true
    },
    setPassword () {
      this.linkSent = false
      this.createPassword = true
    },
    login () {
      this.loading = true
      this.$axios.$post('/auth/login', {
        email: this.email,
        password: this.password
      }
      // {
      //   headers: {
      //     Authorization: `Bearer ${Cookies.get('token')}`
      //   }
      // }
      ).then((response) => {
        console.log(response)
        if (!response.error) {
          Cookies.set('token', response.data.token)
          this.getUserDetails()
          this.loading = true
          // this.$toast.success(response.statusText)
        } else {
          this.$toast.error(response.errorMsg)
        }
      }).catch((onrejected) => {
        console.log(onrejected)
        this.loading = true
        // this.loading = false
        if (onrejected.error) {
          this.$toast.error(onrejected.errorMsg)
        }
      })
    },
    getUserDetails () {
      this.$axios.$get('/auth/all/registration/information', {
        headers: {
          Authorization: `Bearer ${Cookies.get('token')}`
        }
      }).then((response) => {
        this.loading = false
        console.log(response)
        const data = response.data
        if (
          data.ProfessionalQualification === null ||
          data.nextofkin === null ||
          data.personal_information === null ||
          data.profiles === null
        ) {
          this.$router.push('/auth/register/details')
        } else {
          this.$router.push('/')
        }
        this.$store.commit('setUserDetails', data)
      })
    }
  }
}
</script>

<style scoped>
.inner {
  display: flex;
  height: 100vh;
}

.rhs {
  flex-basis: 42%;
  margin-left: 58%;
}

.rhs_inner {
  width: 60%;
  margin: auto;
  padding: 4vh 0;
}

.top_btn {
  display: flex;
  justify-content: flex-end;
}

.trans_btn {
  width: 9rem;
}

.inner_ {
  height: 100%;
  padding-top: 10vh;
}

.logo {
  width: 9vw;
}

.logo img {
  width: 100%;
}

.lhs {
  width: 58%;
  background-image: url('assets/images/login-bg.webp');
  background-size: cover;
  background-position-y: bottom;
  height: 100vh;
  /* margin-left: 35%; */
  position: fixed;
  padding: 6vh 7vw;
}

.intro {
  height: 100%;
  width: 65%;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.intro_header {
  color: #fff;
  font-size: 35px;
  font-weight: 600;
}

.intro_subheader {
  color: rgba(255, 255, 255, 0.392);
  font-size: 16px;
  margin-top: 10px;
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

.input-box {
  margin-bottom: 3vh;
}

.pass_svg {
  cursor: pointer;
}

.check_forgot {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.check-ctn {
  display: flex;
}

.check-ctn p {
  margin-left: 10px;
}
/* The container */
.check-container {
  display: block;
  position: relative;
  padding-left: 25px;
  margin-bottom: 12px;
  margin-top: 10px;
  cursor: pointer;
  line-height: 25px;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}

/* Hide the browser's default checkbox */
.check-container .check-input {
  position: absolute;
  opacity: 0;
  cursor: pointer;
  height: 0;
  width: 0;
}

/* Create a custom checkbox */
.checkmark {
  position: absolute;
  margin-top: 5px;
  top: 0;
  left: 0;
  height: 15px;
  width: 15px;
  border: 1px solid #000;
  border-radius: 3px;
}

/* On mouse-over, add a grey background color */
.check-container:hover .check-input ~ .checkmark {
  background-color: rgb(244, 246, 255);
}

/* When the checkbox is checked, add a background */
.check-container .check-input:checked ~ .checkmark {
  background-color: var(--primary-color);
}

/* Create the checkmark/indicator (hidden when not checked) */
.checkmark:after {
  content: "";
  position: absolute;
  display: none;
}

/* Show the checkmark when checked */
.check-container .check-input:checked ~ .checkmark:after {
  display: block;
}

/* Style the checkmark/indicator */
.check-container .checkmark:after {
  left: 4px;
  top: 1px;
  width: 5px;
  height: 10px;
  border: 1px solid white;
  border-width: 0 3px 3px 0;
  -webkit-transform: rotate(45deg);
  -ms-transform: rotate(45deg);
  transform: rotate(45deg);
}

.bg_btn {
  width: 100%;
  margin-top: 3vh;
}

.btn-text {
  color: #fff;
  margin-left: 10px;
}

.bottom-text {
  margin-top: 7rem;
}

.forgot {
  cursor: pointer;
}

.no-account {
  margin-top: 10px;
  padding-bottom: 40px;
}

.sign-up {
  color: #1D692C;
  cursor: pointer;
}

/* ::-webkit-scrollbar {
  width: 2px;
  height: 2px;
  display: none;
} */

@media only screen and (max-width: 500px) {
  .inner {
    flex-direction: column;
  }

  .logo {
    display: none;
  }

  .lhs {
    background-position: center;
    position: unset;
    width: 100%;
    padding: 0;
  }

  .intro {
    display: block;
    width: 100%;
    height: fit-content;
    padding: 20vh 7vw 7vh;
  }

  .inner_ {
    height: fit-content;
    background-color: #fff;
    border-radius: 20px 20px 0px 0px;
    padding: 20px 30px;
  }

  .no_show {
    display: block;
  }

  .rhs {
    display: none;
    width: 100%;
    margin: 0;
    padding: 20px 30px;
  }

  .rhs_inner {
    width: 100%;
  }

  .intro_header {
    font-size: 20px;
  }

  .intro_subheader {
    font-size: 14px;
  }

  .top_btn {
    display: none;
  }

  .title {
    font-size: 18px;
    margin-top: 1.5rem;
  }

  .sub-title {
    font-size: 13px;
  }

  .form {
    margin-top: 8vh;
  }

  .forgot {
    font-size: 12px;
  }

  .check-container {
    font-size: 12px;
  }

  .create {
    text-align: center;
    color: #00285dae;
    cursor: pointer;
    width: fit-content;
    font-size: 14px;
    margin: auto;
    margin-top: 20px;
    margin-bottom: 20px;
  }

  .bottom-text {
    margin-top: 3rem;
  }

  .no-account {
    padding-bottom: 3rem;
  }
}

</style>
