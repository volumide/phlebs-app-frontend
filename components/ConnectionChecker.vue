<template>
  <div class="checker_ctn">
    <div v-if="$nuxt.isOffline" class="offline come-down">
      <p class="head mobile_no_show">
        Connection Offline :
      </p>
      <p class="text">
        You are not connected to the Internet
      </p>
    </div>
    <div>
      <div v-if="onlineStatus && $store.state.isOnline" class="online come-down">
        <p class="head mobile_no_show">
          Connection Online :
        </p>
        <p class="text">
          You are back online
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      status: this.$nuxt.isOnline,
      // onlineStatus: this.$nuxt.isOnline,
      offlineStatus: this.$nuxt.isOffline
    }
  },
  computed: {
    onlineStatus () {
      if (this.$nuxt.isOnline) {
        this.$store.dispatch('onlineStatusChange', this.$nuxt.isOnline)
      }
      return this.$nuxt.isOnline
    }
  }
}
</script>

<style scoped>
.checker_ctn {
  width: 100%;
  height: 30px;
}

.offline {
  display: flex;
  align-items: center;
  background-color: rgb(188, 17, 17);
  height: 40px;
  padding: 0 50px;
}

.offline .head {
  margin-right: 20px;
  font-weight: 700;
  color: #fff;
}

.offline .text {
  margin-right: 20px;
  font-weight: 500;
  color: #fff;
}

.online {
  display: flex;
  align-items: center;
  background-color: rgb(45, 144, 21);
  height: 40px;
  padding: 0 50px;
}

.online .head {
  margin-right: 20px;
  font-weight: 700;
  color: #fff;
}

.online .text {
  margin-right: 20px;
  font-weight: 500;
  color: #fff;
}

@media only screen and (max-width: 500px) {
  .offline {
    padding: 0 15px;
    justify-content: center;
  }
  .online {
    padding: 0 15px;
    justify-content: center;
  }
}
</style>
