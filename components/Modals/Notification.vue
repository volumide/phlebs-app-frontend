<template>
  <div class="modal-backdrop come-down" @click="$emit('close-notification')">
    <div class="container" @click.stop>
      <div class="top-head">
        <div class="top-top">
          <p class="notif">
            Notifications
          </p>
          <!-- <Loader v-if="markLoading" /> -->
        </div>
        <button class="mark-all" :disabled="disabled" @click="markAll()">
          <p class="mark">
            Mark all as read
          </p>
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M14 8C14 4.6875 11.3125 2 8 2C4.6875 2 2 4.6875 2 8C2 11.3125 4.6875 14 8 14C11.3125 14 14 11.3125 14 8Z" stroke="#1A1F36" stroke-width="1.5" stroke-miterlimit="10" />
            <path d="M11 5.5L6.8 10.5L5 8.5" stroke="#1A1F36" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
          </svg>
        </button>
      </div>
      <div class="content">
        <div class="notification-list">
          <LoadersNotificationModal v-if="loading" class="big-loader" />
          <EmptyNotification v-else-if="notifications.length === 0" />
          <div v-for="(list, index) in notifications" v-else :key="index" class="list" @click="$emit('close-notification'); $router.push(`/notifications?id=${list.id}`)">
            <div class="lhs">
              <img src="~assets/images/notif.png" alt="">
            </div>
            <div class="rhs">
              <div class="top-message">
                <!-- <div v-if="list.status === 'unread'" class="dot" /> -->
                <p class="notification-text mobile_no_show">
                  {{ truncateString(list.message) }}
                </p>
                <p class="notification-text no_show">
                  {{ mobileTruncateString(list.message) }}
                </p>
              </div>
              <div class="btns">
                <button v-if="list.status === 'unread'" class="btn1" @click="markRead(list)">
                  Mark as Read
                </button>
                <p class="date">
                  {{ dateInFull(list.updatedAt) }}
                </p>
                <!-- <button class="btn2">Read</button> -->
              </div>
            </div>
          </div>
          <!-- <hr class="line"> -->
        </div>
      </div>
      <div class="bottom-bar">
        <p class="clear" @click="$router.push('/notifications'); $emit('close-notification')">
          See All
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import Cookies from 'js-cookie'
import { dateInFull } from '@/utils/date-formats.js'
import functions from '@/utils/functions'
export default {
  data () {
    return {
      loading: false,
      markLoading: false,
      truncateString: functions.truncateString,
      mobileTruncateString: functions.mobileTruncateString,
      dateInFull,
      notifications: []
    }
  },
  computed: {
    disabled () {
      return (
        this.notifications.length === 0
      )
    }
  },
  created () {
    this.getNotification()
  },
  methods: {
    getNotification () {
      this.loading = true
      this.$axios.$get('/auth/notification/unread/3/0', {
        headers: {
          Authorization: `Bearer ${Cookies.get('token')}`
        }
      }).then((response) => {
        this.loading = false
        console.log(response)
        this.notifications = response.data.notification
      })
    },
    formatDate (dateString) {
      return (new Date(dateString)).toUTCString()
    }
  }

}
</script>

<style scoped>
.modal-backdrop {
  z-index: 7;
  position: fixed;
  overflow: auto;
  height: 100%;
  display: flex;
  justify-content: right;
  /* align-items: center; */
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(24, 18, 46, 0.096);
}

.container {
  background-color: #fff;
  padding: 20px 0;
  width: 25rem;
  height: fit-content;
  max-height: 25rem;
  overflow: auto;
  margin-top: 60px;
  margin-right: 70px;
  /* border: 1px solid rgb(165, 165, 165); */
  border-radius: 10px;
  box-shadow: 0px 5px 5px rgba(39, 53, 174, 0.08);
}

.top-head {
  display: flex;
  justify-content: space-between;
  padding: 0 20px;
  margin-bottom: 10px;
}

.top-top {
  display: flex;
}

.notif {
  font-size: 14px;
  font-weight: 600;
  margin-right: 20px;
  color: #3C4257;
}

.mark-all {
  display: flex;
  cursor: pointer;
  background-color: transparent;
  border: none;
}

.mark {
  font-size: 14px;
  margin-right: 5px;
  color: #3C4257;
}

.big-loader {
  margin: 50px 0;
}

.list {
  display: flex;
  padding: 20px 20px;
  border-bottom: 1px solid #3c425727;
  cursor: pointer;
}

.lhs img {
  width: 32px;
  height: 32px;
  margin-right: 20px;
}

.top-message {
  display: flex;
}

.dot {
  height: 10px;
  width: 10px;
  background-color: rgb(0, 163, 27);
  border-radius: 100%;
  margin-top: 4px;
  margin-right: 7px;
}

.notification-text {
  font-size: 15px;
  font-weight: 500;
  margin-bottom: 10px;
}

.btns {
  display: flex;
  align-items: center;
}

.btn1 {
  color: #fff;
  background-color: #0082FA;
  border: none;
  border-radius: 4px;
  font-size: 12px;
  padding: 4px 15px;
  cursor: pointer;
  /* width: 60px;
  height: 25px; */
  margin-right: 10px;
}

.btn2 {
  color: #3C4257;
  background-color: #fff;
  border: 1px solid #DDDEE1;
  border-radius: 4px;
  font-size: 14px;
  width: 60px;
  height: 25px;
}

.date {
  font-size: 12px;
  color: #A5ACB8;
  /* margin-top: 10px; */
}

/* .bottom-bar {
  width: 100%;
} */

.clear {
  font-size: 13px;
  font-weight: 600;
  color: rgb(212, 0, 0);
  margin-top: 15px;
  margin-right: 20px;
  text-align: right;
  cursor: pointer;
}

.mark-all:disabled,
.mark-all[disabled] {
  /* background-color: #cacaca; */
  /* color: #929292; */
  cursor: not-allowed;
  opacity: 0.3;
}

@media only screen and (max-width: 500px) {
  .container {
    width: 20rem;
    margin-top: 60px;
    margin-right: 10px;
  }
  .lhs img {
    width: 32px;
    height: 32px;
    margin-right: 10px;
  }

  .notification-text {
    font-size: 13px;
    font-weight: 500;
    /* margin-bottom: 10px; */
  }
}
</style>
