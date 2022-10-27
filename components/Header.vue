<template>
  <div class="main_container">
    <div class="header-container">
      <div class="left-side">
        <div class="hamburger">
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            @click="$emit('showMobileMenu')"
          >
            <path d="M18.75 8.75H1.25C0.559648 8.75 0 9.30965 0 10C0 10.6904 0.559648 11.25 1.25 11.25H18.75C19.4404 11.25 20 10.6904 20 10C20 9.30965 19.4404 8.75 18.75 8.75Z" fill="black" />
            <path d="M1.25 5.41669H18.75C19.4404 5.41669 20 4.85704 20 4.16669C20 3.47634 19.4404 2.91669 18.75 2.91669H1.25C0.559648 2.91669 0 3.47634 0 4.16669C0 4.85704 0.559648 5.41669 1.25 5.41669Z" fill="black" />
            <path d="M18.75 14.5833H1.25C0.559648 14.5833 0 15.143 0 15.8333C0 16.5237 0.559648 17.0833 1.25 17.0833H18.75C19.4404 17.0833 20 16.5237 20 15.8333C20 15.143 19.4404 14.5833 18.75 14.5833Z" fill="black" />
          </svg>
        </div>
        <div class="page_name_ctn">
          <p class="page_title">
            {{ pageName }}
          </p>
          <p class="greeting">
            Good {{ timeOfDay }}, {{ userDetails.firstname }}
          </p>
        </div>
      </div>
      <div class="last-section">
        <div class="new_input">
          <input type="search" name="" placeholder="Search for Name, Order Reference No">
          <svg width="22" height="20" viewBox="0 0 22 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clip-path="url(#clip0_235_21233)">
              <path d="M21.1871 18.5776L15.9038 13.6034C17.3436 11.9456 18.0514 9.83014 17.881 7.6947C17.7106 5.55926 16.6749 3.56717 14.9882 2.1305C13.3015 0.693821 11.0928 -0.0775273 8.81897 -0.0240008C6.54513 0.0295257 4.38013 0.903832 2.77179 2.41807C1.16344 3.93232 0.234797 5.97064 0.177944 8.11143C0.121091 10.2522 0.940376 12.3317 2.46634 13.9197C3.9923 15.5077 6.10818 16.4828 8.37633 16.6433C10.6445 16.8037 12.8914 16.1372 14.6522 14.7817L19.9355 19.7559C20.1025 19.9077 20.3261 19.9917 20.5581 19.9898C20.7902 19.9879 21.0122 19.9003 21.1763 19.7457C21.3404 19.5912 21.4335 19.3822 21.4355 19.1637C21.4375 18.9452 21.3483 18.7347 21.1871 18.5776ZM9.05473 15.0001C7.65424 15.0001 6.28521 14.6091 5.12074 13.8765C3.95628 13.144 3.0487 12.1028 2.51275 10.8846C1.97681 9.66644 1.83658 8.326 2.10981 7.03279C2.38303 5.73959 3.05742 4.5517 4.04772 3.61935C5.03801 2.687 6.29972 2.05206 7.6733 1.79483C9.04687 1.53759 10.4706 1.66961 11.7645 2.1742C13.0584 2.67878 14.1643 3.53327 14.9423 4.62959C15.7204 5.72592 16.1357 7.01485 16.1357 8.3334C16.1336 10.1009 15.3869 11.7954 14.0594 13.0452C12.7319 14.2951 10.9321 14.9981 9.05473 15.0001Z" fill="black" />
            </g>
            <defs>
              <clipPath id="clip0_235_21233">
                <rect width="21.2429" height="20" fill="white" transform="translate(0.203369)" />
              </clipPath>
            </defs>
          </svg>
        </div>
        <div class="notification" @click="$emit('openNotification')">
          <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="20" cy="20" r="20" fill="#0FB2F3" fill-opacity="0.18" />
            <g clip-path="url(#clip0_230_20592)">
              <path d="M28.7958 21.3851L27.2125 15.6884C26.7484 14.0195 25.7398 12.5536 24.3469 11.5238C22.9541 10.4939 21.257 9.95922 19.5254 10.0046C17.7938 10.05 16.127 10.6729 14.79 11.7744C13.4531 12.8758 12.5227 14.3925 12.1467 16.0834L10.9208 21.5959C10.7854 22.205 10.7885 22.8368 10.93 23.4445C11.0714 24.0522 11.3475 24.6205 11.738 25.1072C12.1284 25.5939 12.6232 25.9868 13.1857 26.2567C13.7483 26.5266 14.3643 26.6668 14.9883 26.6667H15.9167C16.1079 27.6086 16.6189 28.4555 17.3631 29.0637C18.1073 29.672 19.0389 30.0042 20 30.0042C20.9611 30.0042 21.8927 29.672 22.6369 29.0637C23.381 28.4555 23.8921 27.6086 24.0833 26.6667H24.7817C25.424 26.6668 26.0576 26.5183 26.6331 26.2329C27.2086 25.9476 27.7103 25.533 28.099 25.0216C28.4877 24.5103 28.753 23.9159 28.874 23.2851C28.995 22.6543 28.9685 22.004 28.7967 21.3851H28.7958ZM20 28.3334C19.4848 28.3313 18.9828 28.17 18.5627 27.8717C18.1427 27.5733 17.8251 27.1525 17.6533 26.6667H22.3467C22.1749 27.1525 21.8573 27.5733 21.4372 27.8717C21.0172 28.17 20.5152 28.3313 20 28.3334ZM26.7717 24.0126C26.5394 24.3206 26.2386 24.5703 25.893 24.7417C25.5474 24.9131 25.1666 25.0016 24.7808 25.0001H14.9883C14.614 25 14.2444 24.9159 13.9069 24.7539C13.5695 24.5919 13.2727 24.3562 13.0385 24.0641C12.8042 23.7721 12.6386 23.4312 12.5538 23.0666C12.469 22.702 12.4671 22.323 12.5483 21.9576L13.7733 16.4442C14.0686 15.1161 14.7994 13.9247 15.8495 13.0596C16.8997 12.1945 18.2088 11.7052 19.569 11.6696C20.9291 11.6339 22.2621 12.054 23.3561 12.863C24.4501 13.6719 25.2422 14.8234 25.6067 16.1342L27.19 21.8309C27.2946 22.202 27.3113 22.5925 27.2387 22.9712C27.166 23.3499 27.0061 23.7064 26.7717 24.0126Z" fill="black" />
            </g>
            <circle v-if="!notificationsCount < 1" cx="24.5" cy="10.5" r="4.5" fill="#F44336" />
            <defs>
              <clipPath id="clip0_230_20592">
                <rect width="20" height="20" fill="white" transform="translate(10 10)" />
              </clipPath>
            </defs>
          </svg>
        </div>
        <div class="user">
          <div class="user-image" @click="$router.push('/my-account')">
            <img :src="userImage === null ? altImage : userImage" alt="">
          </div>
          <p class="username">
            {{ userDetails.firstname }} {{ userDetails.lastname }}
          </p>
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            @click="$emit('openLogout')"
          >
            <g clip-path="url(#clip0_230_12651)">
              <path d="M8.00004 11.4468C7.56201 11.4475 7.12812 11.362 6.72317 11.195C6.31823 11.028 5.95017 10.7828 5.64004 10.4734L0.193376 5.02676C0.0678397 4.90123 -0.00268555 4.73096 -0.00268555 4.55343C-0.00268555 4.37589 0.0678397 4.20563 0.193376 4.08009C0.318911 3.95456 0.489174 3.88403 0.666709 3.88403C0.844243 3.88403 1.01451 3.95456 1.14004 4.08009L6.58671 9.52676C6.96171 9.9013 7.47004 10.1117 8.00004 10.1117C8.53004 10.1117 9.03837 9.9013 9.41338 9.52676L14.86 4.08009C14.9856 3.95456 15.1558 3.88403 15.3334 3.88403C15.5109 3.88403 15.6812 3.95456 15.8067 4.08009C15.9322 4.20563 16.0028 4.37589 16.0028 4.55343C16.0028 4.73096 15.9322 4.90123 15.8067 5.02676L10.36 10.4734C10.0499 10.7828 9.68186 11.028 9.27691 11.195C8.87197 11.362 8.43808 11.4475 8.00004 11.4468V11.4468Z" fill="black" />
            </g>
            <defs>
              <clipPath id="clip0_230_12651">
                <rect width="16" height="16" fill="white" />
              </clipPath>
            </defs>
          </svg>
        </div>
      </div>
    </div>
    <div class="mobile_show page_name_ctn">
      <p class="page_title">
        {{ pageName }}
      </p>
      <p class="greeting">
        Good {{ timeOfDay }}, {{ userDetails.firstname }}
      </p>
    </div>
  </div>
</template>

<script>
import Cookies from 'js-cookie'
// import functions from '@/utils/functions'
// import paystack from 'vue-paystack';
export default {
  components: {
    //   paystack
  },
  props: {
    activeTab: {
      type: String,
      default: () => ''
    }
  },
  data () {
    return {
      userImage: null,
      altImage: require('assets/images/no-image.png'),
      notificationsCount: '',
      // capitalizeFirstLetter: functions.capitalizeFirstLetter,
      timeOfDay: '',
      overviewData: [],
      userDetails: {},
      userData: {}
    }
  },
  computed: {
    pageName () {
      const newPage = this.$store.state.newPageName
      const str = this.$route.name
      // console.log(str)
      const splited = str.split('-')

      if (this.$route.name === 'index') {
        return 'Overview'
      }
      if (this.$route.name === 'to-do-orders') {
        return newPage
      }
      if (this.$route.name === 'to-do-orders-details' || this.$route.name === 'to-do-orders-new-order-details') {
        return 'Order Details'
      }
      if (this.$route.name === 'today-order-details' || this.$route.name === 'to-do-orders-new-order-details') {
        return 'Order Details'
      }
      if (this.$route.name === 'today-order') {
        return "Today's Order"
      }
      if (this.$route.name === 'earnings-withdraw') {
        return 'Earnings'
      }

      if (this.$route.name === `${splited[0]}-${splited[1]}`) {
        return `${this.capitalizeFirstLetter(splited[0])} ${this.capitalizeFirstLetter(splited[1])}`
      } else if (this.$route.name === `${splited[0]}-${splited[1]}-${splited[2]}`) {
        return `${splited[1]}`
      } else {
        return `${this.capitalizeFirstLetter(splited[0])}`
      }
    }
  },
  watch: {
    $route () {
      this.getNotificationCount()
    }
  },
  created () {
    this.getTimeofDay()
    this.getUserDetails()
    this.getNotificationCount()
  },
  methods: {
    getNotificationCount () {
      this.loading =
      this.$axios.$get('/auth/notification/all/10/0', {
        headers: {
          Authorization: `Bearer ${Cookies.get('token')}`
        }
      }).then((response) => {
        this.loading = false
        // console.log(response)
        this.notificationsCount = response.total
      })
    },
    getTimeofDay () {
      const today = new Date()
      const curHr = today.getHours()

      if (curHr < 12) {
        this.timeOfDay = 'Morning'
      } else if (curHr < 18) {
        this.timeOfDay = 'Afternoon'
      } else {
        this.timeOfDay = 'Evening'
      }
      this.$emit('timeOfDay', this.timeOfDay)
    },
    getUserDetails () {
      this.$axios.$get('/auth/all/registration/information', {
        headers: {
          Authorization: `Bearer ${Cookies.get('token')}`
        }
      }).then((response) => {
        // console.log(response)
        this.userDetails = response.data.personal_information
        this.userImage = response.data.profiles.profile_pics
        this.userData = response.data
        this.$store.commit('setUserDetails', this.userData)
      })
    },
    capitalizeFirstLetter (string) {
      return string.charAt(0).toUpperCase() + string.slice(1)
    },
    formatNaira (num) {
      return '₦' + num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
    }
  }
}
</script>

<style scoped>
.main_container {
  padding: 0 3vw;
  padding-top: 3vh;
  padding-bottom: 2vh;
  z-index: 5;
  position: fixed;
  /* height: 11vh; */
  width: 81vw;
  background-color: #fff;
}
.header-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.left-side {
  display: flex;
  align-items: center;
  flex-basis: 40%;
}

.new_input {
  width: 100%;
  border: 1px solid rgba(0, 41, 93, 0.1);
  /* margin-right: ; */
}

.mobile-logo {
  display: none;
}

.last-section {
  display: flex;
  align-items: center;
  gap: 1.5vw;
  width: 47%;
}

.notification {
  position: relative;
  cursor: pointer;
  display: flex;
}

.count {
  position: absolute;
  font-size: 10px;
  font-weight: 600;
  top: -3px;
  left: 40%;
  border-radius: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 15px;
  height: 15px;
  color: #fff;
  background-color: #3DD598;
}

.username {
  font-size: 14px;
  font-weight: 600;
  margin-right: 10px;
  white-space: nowrap;
}

.user {
  width: fit-content;
  display: flex;
  align-items: center;
  cursor: pointer;
}

.user-image {
  margin-right: 10px;
}

.user-image img {
  width: 35px;
  height: 35px;
  border-radius: 50%;
}

.hamburger {
  display: none;
}

.mobile_show {
  display: none;
}

/* RESPONSIVENESS */

.bar {
  display: block;
  width: 25px;
  height: 2px;
  margin: 5px auto;
  background-color: rgb(33, 33, 33);
}

@media only screen and (max-width: 500px) {
.main_container {
  height: fit-content;
  width: 100vw;
  padding: 3vh 15px;
}

.page_name_ctn {
  display: none;
}

.mobile_show {
  display: block;
  margin-left: 7px;
  margin-top: 5px;
}

.last-section {
  width: fit-content;
  /* gap: 10px; */
}

.user {
  margin-left: 10px;
}

.new_input {
  display: none;
}

.hamburger {
  display: block;
  cursor: pointer;
  margin-left: 10px;
}

.notification svg {
  width: 30px;
  height: 30px;
}

.username,
.user svg {
  display: none;
}

/* .header-container {
  width: 100%;
} */

}
</style>
