<template>
  <div class="container">
    <div class="tab-ctn">
      <TabHeaders
        :tabs="['All', 'Read', 'Unread']"
        padding-left="4px"
        :active-tab="activeTab"
        @set-active-tab="setActiveTab"
      />
    </div>
    <div v-if="activeTab === 'All'" class="tab_data">
      <NotificationAll :notifications="allNotifications" :notification-loading="allNofitLoading" @open-notification="openDetails" />
    </div>
    <div v-if="activeTab === 'Read'" class="tab_data">
      <NotificationAll :notifications="readNotifications" :notification-loading="readNofitLoading" @open-notification="openDetails" />
    </div>
    <div v-if="activeTab === 'Unread'" class="tab_data">
      <NotificationAll :notifications="unreadNotifications" :notification-loading="unreadNofitLoading" @open-notification="openDetails" />
    </div>
    <ModalsFromTheSide
      v-if="notificationDetails"
      :notification-id="notificationId"
      @closeSuccess="getNotification(); getReadNotification(); getUnreadNotification()"
      @close-modal="notificationDetails = false"
      @delete="deleteNotification = true"
    />
  </div>
</template>

<script>
import Cookies from 'js-cookie'
// import { dateInFull } from '@/utils/date-formats.js'
// import functions from '@/utils/functions'
export default {
  layout: 'MainLayout',
  data () {
    return {
      activeTab: 'All',
      allNotifications: [],
      readNotifications: [],
      unreadNotifications: [],
      notificationId: '',
      allNofitLoading: false,
      readNofitLoading: false,
      notificationDetails: false,
      unreadNofitLoading: false
    }
  },
  created () {
    const id = this.$route.query.id
    if (id) {
      // this.getNotification()
      this.openDetails(id)
    } else {
      this.activeTab = 'Personal'
    }
    this.getNotification()
  },
  methods: {
    openDetails (val) {
      // console.log(val)
      this.notificationId = val
      this.notificationDetails = true
    },
    setActiveTab (tab) {
      this.activeTab = tab
      this.$store.commit('setPageName', tab)
      if (this.activeTab === 'All') {
        this.getNotification()
      } else if (this.activeTab === 'Read') {
        this.getReadNotification()
      } else if (this.activeTab === 'Unread') {
        this.getUnreadNotification()
      }
    },
    getNotification () {
      this.allNofitLoading = true
      this.$axios.$get('/auth/notification/all/10/0', {
        headers: {
          Authorization: `Bearer ${Cookies.get('token')}`
        }
      }).then((response) => {
        this.allNofitLoading = false
        // console.log(response)
        this.allNotifications = response.data.notification
      })
    },
    getReadNotification () {
      this.readNofitLoading = true
      this.$axios.$get('/auth/notification/read/10/0', {
        headers: {
          Authorization: `Bearer ${Cookies.get('token')}`
        }
      }).then((response) => {
        this.readNofitLoading = false
        // console.log(response)
        this.readNotifications = response.data.notification
      })
    },
    getUnreadNotification () {
      this.unreadNofitLoading = true
      this.$axios.$get('/auth/notification/unread/10/0', {
        headers: {
          Authorization: `Bearer ${Cookies.get('token')}`
        }
      }).then((response) => {
        this.unreadNofitLoading = false
        // console.log(response)
        this.unreadNotifications = response.data.notification
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
</style>
