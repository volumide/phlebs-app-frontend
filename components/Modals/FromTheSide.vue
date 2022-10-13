<template>
  <div ref="modal-ctn" class="modal-backdrop reveals-2" @click="closeModal()">
    <div ref="modal-child" class="modal slide-in" :class="`${anim}`" @click.stop>
      <div class="modal_top">
        <svg
          width="14"
          height="14"
          viewBox="0 0 14 14"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          @click="closeModal()"
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
      <LoadersFromSide v-if="loading" class="big-loader" />
      <div v-else class="modal_inner">
        <p class="modal_head">
          {{ notification.subject }}
        </p>
        <p class="modal_text">
          {{ notification.message }}
        </p>
      </div>
      <div class="modal_bottom" @click="closeModal(); $emit('delete')">
        <svg width="24" height="20" viewBox="0 0 24 20" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g clip-path="url(#clip0_248_24385)">
            <path d="M20.7911 3.33333H17.8225C17.6003 2.39284 17.0122 1.54779 16.1575 0.940598C15.3027 0.333408 14.2336 0.0012121 13.1302 0L11.215 0C10.1116 0.0012121 9.04245 0.333408 8.18771 0.940598C7.33297 1.54779 6.74492 2.39284 6.52266 3.33333H3.55405C3.30008 3.33333 3.0565 3.42113 2.87691 3.57741C2.69733 3.73369 2.59644 3.94565 2.59644 4.16667C2.59644 4.38768 2.69733 4.59964 2.87691 4.75592C3.0565 4.9122 3.30008 5 3.55405 5H4.51167V15.8333C4.51319 16.938 5.01813 17.997 5.91574 18.7782C6.81335 19.5593 8.03033 19.9987 9.29974 20H15.0454C16.3148 19.9987 17.5318 19.5593 18.4294 18.7782C19.327 17.997 19.832 16.938 19.8335 15.8333V5H20.7911C21.0451 5 21.2887 4.9122 21.4683 4.75592C21.6478 4.59964 21.7487 4.38768 21.7487 4.16667C21.7487 3.94565 21.6478 3.73369 21.4683 3.57741C21.2887 3.42113 21.0451 3.33333 20.7911 3.33333ZM11.215 1.66667H13.1302C13.7242 1.6673 14.3034 1.82781 14.7884 2.1262C15.2734 2.42459 15.6405 2.84624 15.8393 3.33333H8.50588C8.70466 2.84624 9.07173 2.42459 9.55675 2.1262C10.0418 1.82781 10.621 1.6673 11.215 1.66667ZM17.9183 15.8333C17.9183 16.4964 17.6156 17.1323 17.0768 17.6011C16.5381 18.0699 15.8074 18.3333 15.0454 18.3333H9.29974C8.53781 18.3333 7.8071 18.0699 7.26833 17.6011C6.72957 17.1323 6.4269 16.4964 6.4269 15.8333V5H17.9183V15.8333Z" fill="#00295D" />
            <path d="M10.2573 15.0007C10.5113 15.0007 10.7548 14.9129 10.9344 14.7566C11.114 14.6003 11.2149 14.3883 11.2149 14.1673V9.16732C11.2149 8.9463 11.114 8.73434 10.9344 8.57806C10.7548 8.42178 10.5113 8.33398 10.2573 8.33398C10.0033 8.33398 9.75975 8.42178 9.58016 8.57806C9.40057 8.73434 9.29968 8.9463 9.29968 9.16732V14.1673C9.29968 14.3883 9.40057 14.6003 9.58016 14.7566C9.75975 14.9129 10.0033 15.0007 10.2573 15.0007Z" fill="#00295D" />
            <path d="M14.0877 15.0007C14.3417 15.0007 14.5853 14.9129 14.7649 14.7566C14.9445 14.6003 15.0454 14.3883 15.0454 14.1673V9.16732C15.0454 8.9463 14.9445 8.73434 14.7649 8.57806C14.5853 8.42178 14.3417 8.33398 14.0877 8.33398C13.8338 8.33398 13.5902 8.42178 13.4106 8.57806C13.231 8.73434 13.1301 8.9463 13.1301 9.16732V14.1673C13.1301 14.3883 13.231 14.6003 13.4106 14.7566C13.5902 14.9129 13.8338 15.0007 14.0877 15.0007Z" fill="#00295D" />
          </g>
          <defs>
            <clipPath id="clip0_248_24385">
              <rect width="22.9828" height="20" fill="white" transform="translate(0.681152)" />
            </clipPath>
          </defs>
        </svg>
        <p>Delete from Notifications</p>
      </div>
    </div>
  </div>
</template>

<script>
import Cookies from 'js-cookie'
export default {
  props: {
    notificationId: {
      type: String,
      default: () => ''
    }
  },
  data () {
    return {
      anim: '',
      loading: true,
      notification: {}
    }
  },
  // mounted () {
  //   const windowWidth = window.innerWidth
  //   if (windowWidth < 500) {
  //     // console.log('come-up')
  //     this.anim = 'come-up'
  //   } else {
  //     // this.anim = 'reveals'
  //   }
  // },
  created () {
    this.getNotificationDetails()
  },
  methods: {
    getNotificationDetails () {
      this.loading = true
      this.$axios.$get(`/auth/notification/${this.notificationId}`, {
        headers: {
          Authorization: `Bearer ${Cookies.get('token')}`
        }
      }).then((response) => {
        this.loading = false
        // console.log(response)
        this.notification = response.data
      })
    },
    closeModal () {
      const modalRef = this.$refs['modal-ctn']
      modalRef.classList.remove('reveals-2')
      modalRef.classList.add('-reveals-2')
      this.$refs['modal-child'].classList.add('slide-out-from-left')
      this.$refs['modal-child'].classList.remove('slide-in')
      window.setTimeout(() => {
        modalRef.classList.add('reveals-2')
        modalRef.classList.remove('-reveals-2')
        this.$refs['modal-child'].classList.remove('slide-out-from-left')
        this.$refs['modal-child'].classList.remove('slide-in')
        this.$emit('close-modal')
      }, 600)
    }
  }
}
</script>

<style scoped>
.slide-in {
  animation: slide-in 0.7s forwards;
  -webkit-animation: slide-in 0.7s forwards;
}

@keyframes slide-in {
  0% {
    /* opacity: 0; */
    transform: translateX(100%);
    -webkit-transform: translateX(100%);
    -moz-transform: translateX(100%);
    -ms-transform: translateX(100%);
    -o-transform: translateX(100%);
  }
  100% {
    /* opacity: 1; */
    transform: translateX(0vw);
    -webkit-transform: translateX(0vw);
    -moz-transform: translateX(0vw);
    -ms-transform: translateX(0vw);
    -o-transform: translateX(0vw);
  }
}

.reveals-2 {
  animation: reveals 0.5s forwards;
  -webkit-animation: reveals 0.5s forwards;
}
@keyframes reveals {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

.-reveals-2 {
  animation: -reveals 0.5s forwards;
  -webkit-animation: -reveals 0.5s forwards;
}

@keyframes -reveals {
  0% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
}

.modal-backdrop {
  z-index: 7;
  position: fixed;
  overflow: auto;
  height: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(1, 10, 20, 0.129);
  backdrop-filter: blur(2px);
}

.modal {
  /* margin-top: 5%; */
  background-color: white;
  width: 32%;
  height: 100%;
  align-items: center;
  overflow-y: auto;
  padding: 3vh 4vw;
  padding-bottom: 5vh;
}

.modal_top {
  display: flex;
  justify-content: flex-end;
  margin: 5vh 0;
  /* position: fixed;
  width: 85%; */
}

.modal_top svg {
  cursor: pointer;
}

.modal_inner {
  position: fixed;
  width: 75%;
  height: 70%;
  overflow: auto;
}

.modal_head {
  font-weight: 700;
  font-size: 17px;
  margin-bottom: 4vh;
}

.modal_text {
  margin-bottom: 4vh;
  line-height: 26px;
}

.modal_bottom {
  display: flex;
  position: absolute;
  bottom: 10%;
  cursor: pointer;
  width: fit-content;
}

.modal_bottom p{
  color: rgba(0, 0, 0, 0.5);
  margin-left: 1vw;
}

@media only screen and (max-width: 500px) {
  .modal-backdrop {
    align-items: flex-end;
  }
  .modal {
    width: 90%;
    padding: 2vh 30px 10vh;
    border-radius: 0;
    margin-top: 1rem;
  }
  .modal_bottom {
    bottom: 5%;
  }

  .modal_inner {
    width: 85%;
  }
}

</style>
