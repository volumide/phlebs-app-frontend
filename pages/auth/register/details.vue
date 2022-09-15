<template>
  <div class="container">
    <div class="inner">
      <div class="logo">
        <img src="~assets/images/logo Blue .png" alt="">
      </div>
      <div class="progress_bars">
        <hr class="progress_1 active_bar">
        <hr :class="`progress_1 ${nextOfKin ? 'active_bar' : ''}`">
        <hr :class="`progress_1 ${bar_active_3 ? 'active_bar' : ''}`">
        <hr :class="`progress_1 ${bar_active_4 ? 'active_bar' : ''}`">
      </div>
      <div class="form_ctn">
        <RegistrationPersonalInformation v-if="personalInformation" @back="back" @proceed="personalInformation = false; nextOfKin = true" />
        <RegistrationNextOfKin v-if="nextOfKin" @back="back" @proceed="proceed" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      personalInformation: false,
      nextOfKin: true,
      bar_active_2: false,
      bar_active_3: false,
      bar_active_4: false
    }
  }
}
</script>

<style scoped>
.container {
  padding: 3rem;
}

.inner {
  max-width: 40%;
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
