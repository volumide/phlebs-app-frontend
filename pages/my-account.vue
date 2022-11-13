<template>
  <div class="container">
    <div class="tab-ctn">
      <TabHeaders
        :tabs="['Personal', 'Security', 'Password']"
        padding-left="4px"
        :active-tab="activeTab"
        @set-active-tab="setActiveTab"
      />
    </div>
    <div v-if="userLoading" class="inner tab_data">
      <LoadersAccount />
    </div>
    <div v-else-if="activeTab === 'Personal'" class="tab_data">
      <ProfilePersonal
        :user-data="userData"
        :data-loader="userLoading"
        :success-text="successMsg"
        :error-text="errorText"
        :image-loading="imageLoading"
        :success="successStatus"
        :error="error"
        @saveImage="uploadProfileImage"
      />
    </div>
    <div v-if="activeTab === 'Security' && !userLoading" class="tab_data">
      <ProfileSecurity
        :user-data="userData"
        :success-text="successMsg"
        :error-text="errorText"
        :image-loading="imageLoading"
        :success="successStatus"
        :error="error"
        @saveImage="uploadProfileImage"
      />
    </div>
    <div v-if="activeTab === 'Password'" class="tab_data">
      <ProfilePassword
        :user-data="userData"
        :success-text="successMsg"
        :error-text="errorText"
        :image-loading="imageLoading"
        :success="successStatus"
        :error="error"
        @saveImage="uploadProfileImage"
      />
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
      activeTab: '',
      errorText: '',
      error: false,
      successStatus: false,
      successMsg: '',
      userLoading: true,
      imageLoading: false,
      userData: {},
      capitalizeFirstLetter: functions.capitalizeFirstLetter
    }
  },
  created () {
    const tabfromUrl = this.$route.query.type
    // console.log(tabfromUrl)
    if (tabfromUrl) {
      this.getUserDetails()
      this.activeTab = this.capitalizeFirstLetter(tabfromUrl)
    } else {
      this.getUserDetails()
      this.activeTab = 'Personal'
    }
    this.getUserDetails()
  },
  methods: {
    setActiveTab (tab) {
      this.activeTab = tab
      this.$store.commit('setPageName', tab)
    },
    getUserDetails () {
      this.userLoading = true
      this.$axios.$get('/auth/all/registration/information', {
        headers: {
          Authorization: `Bearer ${Cookies.get('token')}`
        }
      }).then((response) => {
        // console.log(response)
        this.userData = response.data
        this.userLoading = false
      })
    },
    uploadProfileImage (val) {
      // console.log(val)
      const image = val
      // this.$emit('proceed')
      this.imageLoading = true
      const formdata = new FormData()
      formdata.append('image', image)
      this.$axios.$post('/auth/upload_profile_picture', formdata,
        {
          headers: {
            Authorization: `Bearer ${Cookies.get('token')}`
          }
        }
      ).then((response) => {
        // console.log(response)
        this.imageLoading = false
        if (!response.error) {
          this.successMsg = response.statusText
          this.successStatus = true
          setTimeout(() => {
            this.successStatus = false
            window.location.reload()
          }, 3000)
        } else {
          this.error = true
          this.errorText = response.errorMsg
          setTimeout(() => {
            this.error = false
          }, 3000)
        }
      })
    }
  }
}
</script>

<style scoped>
.container {
  padding: 2vh 3vw;
  padding-right: 5vw;
}

.tab_data {
  margin-top: 5vh;
}

@media only screen and (max-width: 500px) {
  .container {
    padding-bottom: 5vh;
  }
}
</style>
