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
      @close-modal="notificationDetails = false"
      @delete="deleteNotification = true"
    />
    <ModalsConfirmationModal
      v-if="deleteNotification"
      :modal-head="'Are you sure you want to delete this Notification?'"
      :modal-text="'You will no longer beb ale to view this notification once its deleted'"
      :trans-btn="'No, Go Back'"
      :bg-btn="'Yes, Delete'"
      @close-modal="deleteNotification = false"
      @bg-action="deleteNotificationAction()"
      @trans-action="deleteNotification = false"
    />
    <ModalsSuccessModal
      v-if="successModal"
      :modal-image="require('assets/images/96673-success.gif')"
      :modal-head="'Deleted!'"
      :bg-btn="'Close'"
      @close-modal="successModal = false"
      @bg-action="successModal = false"
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
      unreadNofitLoading: false,
      notificationDetails: false,
      successModal: false,
      deleteNotification: false
    }
  },
  created () {
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
        console.log(response)
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
        console.log(response)
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
        console.log(response)
        this.unreadNotifications = response.data.notification
      })
    },
    deleteNotificationAction () {
      this.deleteNotification = false
      this.successModal = true
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
