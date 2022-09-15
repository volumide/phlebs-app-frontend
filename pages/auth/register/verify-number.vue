<template>
  <div class="container">
    <div class="inner">
      <div class="lhs">
        <div class="logo">
          <img src="~assets/images/logo-white.png" alt="">
        </div>
        <div class="intro slide-in-from-left">
          <p class="intro_header">
            Customised Portal for Field Health Workers
          </p>
          <p class="intro_subheader">
            Log and Monitor your daily test order on your customised dashboard
          </p>
        </div>
      </div>
      <div class="rhs">
        <div class="rhs_inner">
          <div class="top_btn">
            <button v-if="SuccessPage" class="trans_btn" @click="$router.push('/auth/login')">
              Login
            </button>
            <button v-else class="trans_btn" @click="$router.go(-1)">
              Back
            </button>
          </div>
          <div v-if="SuccessPage" class="inner_">
            <ModalsSuccess
              :heading="'Your Account has been created successfully!'"
              :sub-heading="'Just a few steps to go.'"
              :btn-text="'Complete Registration'"
              :whatsapp-status="true"
              @btnAction="$router.push('/auth/register/details')"
            />
          </div>
          <div v-else class="inner_">
            <div class="back" @click="$router.go(-1)">
              Back
            </div>
            <ModalsWhatsapp @closeWhatsapp="SuccessPage = true" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      resetPassword: false,
      SuccessPage: false
    }
  }
}
</script>

<style scoped>
.inner {
  display: flex;
  height: 100vh;
}

.rhs {
  flex-basis: 42%;
  margin-left: 58%;
}

.rhs_inner {
  width: 60%;
  margin: auto;
  padding: 4vh 0;
}

.top_btn {
  display: flex;
  justify-content: flex-end;
}

.trans_btn {
  width: 9rem;
}

.back {
  display: none;
}

.inner_ {
  height: 100%;
  padding-top: 10vh;
}

.logo {
  width: 9vw;
}

.logo img {
  width: 100%;
}

.lhs {
  width: 58%;
  background-image: url('assets/images/login-bg.jpg');
  background-size: cover;
  background-position-y: bottom;
  height: 100vh;
  /* margin-left: 35%; */
  position: fixed;
  padding: 6vh 7vw;
}

.intro {
  height: 100%;
  width: 65%;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.intro_header {
  color: #fff;
  font-size: 35px;
  font-weight: 600;
}

.intro_subheader {
  color: rgba(255, 255, 255, 0.392);
  font-size: 16px;
  margin-top: 10px;
}

.title {
  font-size: 20px;
  font-weight: 700;
  color: var(--primary-color);
}

.sub-title {
  color: black;
  margin-top: 10px;
}

.form {
  margin-top: 3rem;
}

.bg_btn {
  width: 100%;
  margin-top: 3.5vh;
}

.bottom_sec {
  padding-top: 3.5vh;
  display: flex;
  justify-content: space-between;
  width: 90%;
  margin: auto;
}

.no_code {
  color: rgba(0, 0, 0, 0.452);
}

.resend {
  display: flex;
  align-items: center;
  gap: 5px;
  cursor: pointer;
}

.resend p {
  color: var(--primary-color);
  font-weight: 700;
}

@media only screen and (max-width: 500px) {
  .back {
    display: block;
    color: #00285d71;
    font-size: 13px;
    margin-top: 20px;
    margin-bottom: 3vh;
  }
  .inner {
    flex-direction: column;
  }

  .logo {
    display: none;
  }

  .lhs {
    display: none;
    background-position: center;
    position: unset;
    width: 100%;
    padding: 0;
  }

  .intro {
    display: block;
    width: 100%;
    height: fit-content;
    padding: 20vh 7vw 7vh;
  }

  .inner_ {
    height: fit-content;
    background-color: #fff;
    border-radius: 20px 20px 0px 0px;
    padding: 0;
  }

  .no_show {
    display: block;
  }

  .rhs {
    /* display: none; */
    width: 100%;
    margin: 0;
    padding: 20px 30px;
  }

  .rhs_inner {
    width: 100%;
    padding: 0;
  }

  .intro_header {
    font-size: 20px;
  }

  .intro_subheader {
    font-size: 14px;
  }

  .top_btn {
    display: none;
  }

  .title {
    font-size: 18px;
    margin-top: 1.5rem;
  }

  .sub-title {
    font-size: 13px;
  }

  .form {
    margin-top: 8vh;
  }
}

</style>
