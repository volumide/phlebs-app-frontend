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
        <div class="mobile inner_ come-up no_show">
          <div class="back" @click="$router.go(-1)">
            Back
          </div>
          <p class="title">
            Enter 6 digit recovery code
          </p>
          <p class="sub-title">
            We sent a verification link to your email, kindly click on the link to reset your password.
          </p>
          <p class="sub-title">
            Or enter the OTP sent.
          </p>
          <div class="form">
            <p class="label">
              Enter code here
            </p>
            <PincodeInput
              v-model="code"
              :length="6"
            />
          </div>
        </div>
      </div>
      <div class="rhs">
        <div class="rhs_inner">
          <div class="top_btn">
            <button class="trans_btn" @click="$router.go(-1)">
              Back
            </button>
          </div>
          <div class="inner_">
            <p class="title">
              Enter 6 digit recovery code
            </p>
            <p class="sub-title">
              We sent a verification link to your email, kindly click on the link to reset your password.
            </p>
            <p class="sub-title">
              Or enter the OTP sent.
            </p>
            <div class="form">
              <p class="label">
                Enter code here
              </p>
              <PincodeInput
                v-model="code"
                :length="6"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
    <ModalsResetPassword v-if="resetPassword" @sentInst="sentInst" @close-modal="resetPassword = false" />
    <ModalsLinkSent v-if="linkSent" @set-password="setPassword" />
    <ModalsCreatePassword v-if="createPassword" />
  </div>
</template>

<script>
export default {
  data () {
    return {
      checked: false,
      error: false,
      code: ''
    }
  },
  methods: {
    showHide () {
      if (this.type === 'password') {
        this.type = 'text'
      } else if (this.type === 'text') {
        this.type = 'password'
      }
    },
    toogleCheck () {
      this.checked = !this.checked
    },
    sentInst () {
      this.resetPassword = false
      this.linkSent = true
    },
    setPassword () {
      this.linkSent = false
      this.createPassword = true
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

@media only screen and (max-width: 500px) {
  .back {
    color: #00285d71;
    font-size: 13px;
  }
  .inner {
    flex-direction: column;
  }

  .logo {
    display: none;
  }

  .lhs {
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
    padding: 20px 30px;
  }

  .no_show {
    display: block;
  }

  .rhs {
    display: none;
    width: 100%;
    margin: 0;
    padding: 20px 30px;
  }

  .rhs_inner {
    width: 100%;
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
