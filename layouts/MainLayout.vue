<template>
  <div>
    <!-- <div class="connect_checker">
      <ConnectionChecker />
    </div> -->
    <div class="main">
      <div class="sidemenu">
        <SideMenu />
      </div>
      <div>
        <div class="header-content">
          <Header
            v-show="!showMobileMenu"
            @timeOfDay="getTimeOfDay"
            @showMobileMenu="showMobileMenu = true"
            @openNotification="openNotification = true"
            @openLogout="openLogout = true"
          />
        </div>
        <div class="mobile-menu">
          <MobileMenu
            v-show="showMobileMenu"
            :time-of-day="timeOfDay"
            @closeMobileMenu="showMobileMenu = false"
          />
        </div>
        <div class="main-content">
          <Nuxt />
          <ModalsLogout
            v-if="openLogout"
            @close-logout="openLogout = false"
          />
          <ModalsNotification
            v-if="openNotification"
            @close-notification="openNotification = false"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Cookies from 'js-cookie'
export default {
  name: 'MainLayout',
  data () {
    return {
      showMobileMenu: false,
      addNewContact: false,
      openNotification: false,
      openLogout: false,
      trigger: false,
      timeOfDay: '',
      onLine: null
    }
  },
  watch: {
    $route () {
      this.showMobileMenu = false
      this.checkLoggedIn()
    }
  },
  created () {
    this.checkLoggedIn()
  },
  methods: {
    checkLoggedIn () {
      if (Cookies.get('token') === undefined) {
        this.$router.push('/auth/login?error=session has expired')
      } else {
        this.getUserDetails()
      }
    },
    getTimeOfDay (val) {
      this.timeOfDay = val
    },
    getUserDetails () {
      this.$axios.$get('/auth/all/registration/information', {
        headers: {
          Authorization: `Bearer ${Cookies.get('token')}`
        }
      }).then((response) => {
        // console.log(response)
        const data = response.data
        if (response.error && (response.errorMsg === 'Authentication Failed' || response.errorMsg === 'Unauthorized User')) {
          this.$router.push('/auth/login?error=session has expired')
        } else if (
          data.ProfessionalQualification === null ||
          data.nextofkin === null ||
          data.personal_information === null ||
          data.profiles === null
        ) {
          this.$router.push('/auth/register/details')
        }
      })
    }
    // status (ele) {
    //   console.log(ele)
    //   this.onLine = ele
    // },
    // event (ele) {
    //   console.log(ele)
    // }

    // checkInternet () {
    //   if (navigator.onLine) {
    //     this.connectionStatus = 'Connected to internet.'
    //   } else {
    //     this.connectionStatus = 'Unable to connect to internet.'
    //   }
    //   console.log(this.connectionStatus)
    // }
  }
}
</script>

<style>
html {
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
}

.main {
  display: flex;
}

.connect_checker {
  position: fixed ;
  width: 100%;
  top: 0;
  z-index: 100;
}

.header-content {
  margin-left: 19vw;
  z-index: 4;
}

.main-content {
  margin-top: 15vh;
  margin-left: 19vw;
  width: 82vw;
}

.add-new-contact {
  z-index: 3;
}

@media only screen and (max-width: 900px) {
  .main-content {
    padding: 0;
    margin-left: 0;
    width: 100vw;
  }

  .sidemenu {
    display: none;
  }

  .header-content {
    margin-left: 0;
  }
}

@media only screen and (max-width: 500px) {
.main-content {
  margin-top: 20vh;
  padding: 0;
  margin-left: 0;
  width: 100vw;
}

.sidemenu {
  display: none;
}

.header-content {
  margin-left: 0;
}

}
</style>
