<template>
  <div class="container">
    <div class="inner">
      <div v-if="warning" class="mobile_no_show">
        <AlertsWarning :warning-head="'Instruction'" :warning-text="'Kindly Add a Primary Bank account bearing your name to allow easy withdrawal from your wallet'" />
      </div>
      <div class="top_section">
        <div></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  layout: 'MainLayout',
  data () {
    return {
      warning: true
    }
  }
}
</script>

<style scoped>
.container {
  padding: 2vh 3vw;
}

.inner {
  width: 95%;
}

@media only screen and (max-width: 500px) {
  .container {
    padding-bottom: 5vh;
  }
  .inner {
    width: 100%;
  }
}
</style>
