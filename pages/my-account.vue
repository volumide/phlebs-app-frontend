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
    <div v-if="activeTab === 'Personal'" class="tab_data">
      <ProfilePersonal />
    </div>
    <div v-if="activeTab === 'Security'" class="tab_data">
      <ProfileSecurity />
    </div>
    <div v-if="activeTab === 'Password'" class="tab_data">
      <ProfilePassword />
    </div>
  </div>
</template>

<script>
import Cookies from 'js-cookie'
export default {
  layout: 'MainLayout',
  data () {
    return {
      activeTab: 'Personal'
    }
  },
  created () {
    this.getUserDetails()
  },
  methods: {
    setActiveTab (tab) {
      this.activeTab = tab
      this.$store.commit('setPageName', tab)
    },
    getUserDetails () {
      this.$axios.$get('/auth/all/registration/information', {
        headers: {
          Authorization: `Bearer ${Cookies.get('token')}`
        }
      }).then((response) => {
        console.log(response)
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
