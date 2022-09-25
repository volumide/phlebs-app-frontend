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
      <NotificationAll @open-notification="notificationDetails = true" />
    </div>
    <div v-if="activeTab === 'Read'" class="tab_data">
      <NotificationAll @open-notification="notificationDetails = true" />
    </div>
    <div v-if="activeTab === 'Unread'" class="tab_data">
      <NotificationAll @open-notification="notificationDetails = true" />
    </div>
    <ModalsFromTheSide
      v-if="notificationDetails"
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
export default {
  layout: 'MainLayout',
  data () {
    return {
      activeTab: 'All',
      notificationDetails: false,
      successModal: false,
      deleteNotification: false
    }
  },
  methods: {
    setActiveTab (tab) {
      this.activeTab = tab
      this.$store.commit('setPageName', tab)
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
