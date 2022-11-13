<template>
  <div class="container">
    <div class="inner">
      <div class="logo">
        <img src="~assets/images/logo Blue .png" alt="">
      </div>
      <div v-show="!successPage" class="progress_bars">
        <hr class="progress_1 active_bar">
        <hr :class="`progress_1 ${bar_active_2 ? 'active_bar' : ''}`">
        <hr :class="`progress_1 ${bar_active_3 ? 'active_bar' : ''}`">
        <hr :class="`progress_1 ${bar_active_4 ? 'active_bar' : ''}`">
      </div>
      <div class="form_ctn">
        <RegistrationPersonalInformation
          v-if="personalInformation"
          :user-details="userDetails"
          @back="$router.go(-1)"
          @proceed="personalInformation = false; nextOfKin = true"
        />
        <RegistrationNextOfKin
          v-if="nextOfKin"
          :user-details="userDetails"
          @back="nextOfKin = false; personalInformation = true;"
          @proceed="nextOfKin = false; personalInformation = false; personalQualification = true"
        />
        <RegistrationPersonalQualification
          v-if="personalQualification"
          :user-details="userDetails"
          @back="personalInformation = false; personalQualification = false; nextOfKin = true;"
          @proceed="nextOfKin = false; personalInformation = false; personalQualification = false; identification = true"
        />
        <RegistrationIdentification
          v-if="identification"
          :user-details="userDetails"
          @back="personalInformation = false; nextOfKin = false; identification = false; personalQualification = true;"
          @proceed="nextOfKin = false; personalInformation = false; personalQualification = false; identification = false; successPage = true"
        />
        <ModalsAuthSuccess
          v-if="successPage"
          class="success_page"
          :heading="'Your registration has been completed successfully but pending'"
          :sub-heading="'We’ve kept your account pending for verifcation by the admin. You will be able o login to your dashboard once your account verified. '"
          :btn-text="'Proceed to Dashboard'"
          @btnAction="$router.push('/')"
        />
      </div>
    </div>
  </div>
</template>

<script>
import Cookies from 'js-cookie'
export default {
  data () {
    return {
      userDetails: {},
      personalInformation: false,
      nextOfKin: false,
      personalQualification: false,
      identification: false,
      successPage: false
      // bar_active_2: false,
      // bar_active_3: false,
      // bar_active_4: false
    }
  },
  computed: {
    bar_active_2 () {
      return this.nextOfKin === true || this.personalQualification === true || this.identification === true
    },
    bar_active_3 () {
      return this.personalQualification === true || this.identification === true
    },
    bar_active_4 () {
      return this.identification === true
    }
  },
  mounted () {
    this.getUserDetails()
  },
  methods: {
    getUserDetails () {
      this.$axios.$get('/auth/all/registration/information', {
        headers: {
          Authorization: `Bearer ${Cookies.get('token')}`
        }
      }).then((response) => {
        this.loading = false
        // console.log(response)
        this.userDetails = response.data
        // console.log(this.userDetails)
        this.$store.commit('setUserDetails', this.userDetails)
        this.personalInformation = true
      })
    }
  }
}
</script>

<style scoped>
.container {
  padding: 3rem;
}

.inner {
  width: 40%;
  margin: auto;
}

.logo {
  text-align: center;
}

.logo img {
  width: 25%;
}

.progress_bars {
  display: flex;
  justify-content: space-between;
  margin-top: 5vh;
}

.progress_1 {
  width: 24%;
  border: none;
  border-top: 6px solid rgba(15, 178, 243, 0.2);
  border-radius: 10px;
  margin-bottom: 10px;
}

.active_bar {
  border-top: 6px solid #0FB2F3;
}

.form_ctn {
  height: 80vh;
  margin: auto;
  overflow: auto;
}

/* Hide scrollbar for Chrome, Safari and Opera */
.form_ctn::-webkit-scrollbar {
  display: none;
}

/* Hide scrollbar for IE, Edge and Firefox */
.form_ctn {
  -ms-overflow-style: none;  /* IE and Edge */
  scrollbar-width: none;  /* Firefox */
}

.success_page {
  margin-top: 12vh;
}

@media only screen and (max-width: 500px) {
  .container {
    padding: 30px 20px;
  }

  .inner {
    width: 100%;
  }

  .logo img {
    width: 35%;
  }
}
</style>
