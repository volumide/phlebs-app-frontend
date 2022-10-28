<template>
  <div class="modal-backdrop-2" @click="$emit('close-modal')">
    <div :class="`modal-2 ${anim}`" @click.stop>
      <div class="modal_top">
        <svg
          width="14"
          height="14"
          viewBox="0 0 14 14"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          @click="$emit('close-modal')"
        >
          <g clip-path="url(#clip0_647_7946)">
            <path d="M8.23742 7.00047L13.7439 1.49462C14.0857 1.15281 14.0857 0.598629 13.7439 0.256846C13.4021 -0.0849643 12.8479 -0.0849643 12.5061 0.256846L7.00022 5.76327L1.49438 0.256846C1.15257 -0.0849643 0.598385 -0.0849643 0.256602 0.256846C-0.0851811 0.598656 -0.0852084 1.15284 0.256602 1.49462L5.76302 7.00047L0.256602 12.5063C-0.0852084 12.8482 -0.0852084 13.4023 0.256602 13.7441C0.598412 14.0859 1.15259 14.0859 1.49438 13.7441L7.00022 8.23767L12.5061 13.7441C12.8479 14.0859 13.4021 14.0859 13.7438 13.7441C14.0857 13.4023 14.0857 12.8481 13.7438 12.5063L8.23742 7.00047Z" fill="#FF0000" />
          </g>
          <defs>
            <clipPath id="clip0_647_7946">
              <rect width="14" height="14" fill="white" />
            </clipPath>
          </defs>
        </svg>
      </div>
      <div v-if="error">
        <AlertsError :error-text="errorText" />
      </div>
      <h1 class="title">
        Setup Withdrawal Pin
      </h1>
      <p class="sub-title">
        Enter a 4-digit Pin
      </p>
      <div class="form">
        <PincodeInput
          v-model="code"
          :length="4"
          @input="error = false"
        />
      </div>
      <div class="bottom_btn">
        <!-- <button class="trans_btn" @click="$emit('trans-action')">
          Back
        </button> -->
        <button v-if="loading" class="bg_btn" disabled>
          <Loader class="come-down" />
        </button>
        <button v-else class="bg_btn" @click="submit">
          Set Pin
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import Cookies from 'js-cookie'
export default {
  props: {
    phoneNumber: {
      type: String,
      default: () => ''
    }
  },
  data () {
    return {
      loading: false,
      error: false,
      anim: '',
      code: ''
    }
  },
  mounted () {
    const windowWidth = window.innerWidth
    if (windowWidth < 500) {
      // console.log('come-up')
      this.anim = 'come-up'
    } else {
      this.anim = 'come-down'
    }
  },
  methods: {
    submit () {
      this.loading = true
      if (this.code.length < 4) {
        this.error = true
        this.loading = false
        this.errorText = 'Please fill up the OTP field'
        setTimeout(() => {
          this.error = false
        }, 3000)
      } else {
        this.$axios.$post('earning/set/withrawal/pin', {
          pin: this.code
        },
        {
          headers: {
            Authorization: `Bearer ${Cookies.get('token')}`
          }
        }
        ).then((response) => {
          console.log(response)
          this.loading = false
          if (!response.error) {
            this.$emit('bg-action')
          } else {
            this.error = true
            this.errorText = response.errorMsg
          }
        }).catch(() => {
          this.loading = false
        })
      }
    }
  }
}
</script>

<style scoped>
.modal-backdrop-2 {
  z-index: 7;
  position: fixed;
  overflow: auto;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(1, 10, 20, 0.6);
  backdrop-filter: blur(4px);
}

.modal-2 {
  /* margin-top: 5%; */
  background-color: white;
  width: 30%;
  height: fit-content;
  align-items: center;
  border-radius: 10px;
  overflow-y: auto;
  padding: 3vh 2.5vw;
  padding-bottom: 5vh;
  transition: all 0.3s ease-out;
}

.modal_top {
  display: flex;
  justify-content: flex-end;
}

.modal-icon {
  text-align: center;
}

.modal-icon img {
  width: 60px;
  margin-top: 40px;
}

.title {
  color: var(--primary-color);
  font-size: 20px;
  font-weight: 700;
  text-align: center;
  width: 70%;
  margin: auto;
  margin-top: 3vh;
}

.sub-title {
  text-align: center;
  width: 80%;
  margin: auto;
  color: #000;
  margin-top: 2vh;
  line-height: 24px;
}

.form {
  margin-top: 1vh;
  display: flex;
  justify-content: center;
  transition: all 0.3s ease-out;
}

.input-box {
  margin-bottom: 3vh;
  transition: all 0.3s ease-out;
}

.bottom_btn {
  display: flex;
  justify-content: center;
  gap: 1vw;
  width: 80%;
  margin: auto;
  margin-top: 4vh;
}

.trans_btn {
  width: 50%;
  font-weight: 700;
}

.bg_btn {
  width: 100%;
  font-weight: 700;
}

@media only screen and (max-width: 900px) {
  .modal-2 {
    width: 70%;
  }
}

@media only screen and (max-width: 500px) {
  .modal-backdrop-2 {
    align-items: flex-end;
  }
  .modal-2 {
    width: 100%;
    padding: 30px;
    border-radius: 40px 40px 0px 0px;
    margin-top: 1rem;
    padding-bottom: 10vh;
  }

  .modal-icon {
    margin-top: 0;
  }

  .title {
    font-size: 18px;
  }

  .sub-title {
    font-size: 14px;
    width: 100%;
  }

  .bottom_btn {
    width: 100%;
    gap: 2vw;
  }

}

</style>
