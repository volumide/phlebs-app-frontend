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
      <h1 class="title">
        Let us know why you are dismissing this order
      </h1>
      <div class="form">
        <div class="input-box">
          <p class="label">
            Select Reason
          </p>
          <div class="form-select">
            <select v-model="reason" required>
              <option value="">
                Select...
              </option>
              <option value="I am not available for the Schedule">
                I am not available for the Schedule
              </option>
              <option value="Patient Rescheduled Order">
                Patient Rescheduled Order
              </option>
              <option value="Patient Cancelled Order">
                Patient Cancelled Order
              </option>
              <option value="Admin Asked to Cancel Order">
                Admin Asked to Cancel Order
              </option>
              <option value="Other, Please Specify Below">
                Other, Please Specify Below
              </option>
            </select>
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M7.24652 11.14L2.45052 5.658C1.88452 5.013 2.34452 4 3.20352 4H12.7955C12.9878 3.99984 13.176 4.05509 13.3376 4.15914C13.4993 4.26319 13.6275 4.41164 13.707 4.58669C13.7864 4.76175 13.8137 4.956 13.7856 5.14618C13.7575 5.33636 13.6752 5.51441 13.5485 5.659L8.75252 11.139C8.65866 11.2464 8.54291 11.3325 8.41303 11.3915C8.28316 11.4505 8.14216 11.481 7.99952 11.481C7.85688 11.481 7.71589 11.4505 7.58601 11.3915C7.45614 11.3325 7.34038 11.2464 7.24652 11.139V11.14Z" fill="black" />
            </svg>
          </div>
        </div>
        <div v-if="reason === 'Other, Please Specify Below'" class="input-box come-down">
          <p class="label">
            Specify here (Optional)
          </p>
          <div class="">
            <textarea v-model="other" cols="30" rows="10" placeholder="Type Here" />
          </div>
        </div>
      </div>
      <div class="bottom_btn">
        <button class="trans_btn" @click="$emit('trans-action')">
          Back
        </button>
        <button v-if="loading" class="bg_btn" disabled>
          <Loader class="come-down" />
        </button>
        <button v-else class="bg_btn" @click="dismissOrder()">
          Submit and Dismiss
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import Cookies from 'js-cookie'
export default {
  props: {
  },
  data () {
    return {
      anim: '',
      other: '',
      reason: ''
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
    dismissOrder () {
      this.loading = true
      const id = this.$route.query.id
      // console.log(this.reason)
      this.$axios.$post('/orders/dismiss/order', {
        orderId: id,
        dismissalReason: this.reason
      },
      {
        headers: {
          Authorization: `Bearer ${Cookies.get('token')}`
        }
      }
      ).then((response) => {
        // console.log(response)
        this.loading = false
        if (!response.error) {
          this.$emit('bg-action')
        }
      })
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

.form {
  margin-top: 4vh;
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
  width: 50%;
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
