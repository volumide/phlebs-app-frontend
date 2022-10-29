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
        Share with Friends
      </h1>
      <p class="sub-title">
        Hey! Get more value for your health with Chekker. You can book a medical test from the comfort of your home and get your result in 24-72 hours.
      </p>
      <p class="sub-title">
        Book a Test Now. Click <a class="link" :href="`https://www.mychekker.com/r/${referralCode}`" target="_blank">https://www.mychekker.com/r/{{ referralCode }}</a> to get started
      </p>
      <div class="bottom_btn">
        <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g clip-path="url(#clip0_230_11831)">
            <path d="M1.05899 24.7013C1.05782 28.9022 2.1555 33.0042 4.24271 36.6197L0.859375 48.9728L13.5012 45.6581C16.9978 47.5616 20.9155 48.559 24.8966 48.5592H24.907C38.0495 48.5592 48.7477 37.8648 48.7534 24.7201C48.7559 18.3505 46.2776 12.361 41.7749 7.85475C37.2729 3.34894 31.2855 0.866188 24.9061 0.863281C11.7621 0.863281 1.06461 11.5571 1.05918 24.7013" fill="url(#paint0_linear_230_11831)" />
            <path d="M0.207364 24.693C0.206008 29.0452 1.34302 33.2938 3.50465 37.0388L0 49.8347L13.0952 46.4012C16.7033 48.3684 20.7657 49.4056 24.8994 49.4072H24.9101C38.524 49.4072 49.6066 38.3281 49.6124 24.7128C49.6147 18.1143 47.0473 11.9095 42.3837 7.24186C37.7196 2.57481 31.518 0.00271318 24.9101 0C11.2938 0 0.212984 11.0775 0.207558 24.693H0.207364ZM8.00581 36.3938L7.51686 35.6176C5.46143 32.3494 4.37655 28.5727 4.3781 24.6946C4.38256 13.3777 13.5926 4.17054 24.9178 4.17054C30.4023 4.17287 35.5566 6.31085 39.4333 10.1899C43.3099 14.0694 45.443 19.2264 45.4417 24.7112C45.4366 36.0281 36.2264 45.2364 24.9101 45.2364H24.9019C21.2172 45.2345 17.6035 44.245 14.4519 42.375L13.7019 41.9302L5.93101 43.9676L8.00581 36.3936V36.3938Z" fill="url(#paint1_linear_230_11831)" />
            <path d="M18.7353 14.3699C18.2729 13.3422 17.7863 13.3214 17.3466 13.3034C16.9865 13.2879 16.5749 13.2891 16.1636 13.2891C15.752 13.2891 15.0832 13.4439 14.5179 14.0612C13.952 14.679 12.3574 16.172 12.3574 19.2087C12.3574 22.2455 14.5692 25.1802 14.8776 25.5924C15.1863 26.0038 19.1475 32.4348 25.4212 34.9088C30.6351 36.9649 31.6962 36.5559 32.8278 36.4528C33.9596 36.3501 36.4797 34.9602 36.9939 33.5189C37.5084 32.0778 37.5084 30.8426 37.3541 30.5844C37.1999 30.3273 36.7882 30.1728 36.171 29.8643C35.5535 29.5556 32.519 28.0623 31.9533 27.8563C31.3875 27.6505 30.976 27.5478 30.5644 28.1658C30.1528 28.7829 28.9708 30.1728 28.6105 30.5844C28.2506 30.997 27.8904 31.0484 27.2733 30.7397C26.6557 30.43 24.6679 29.779 22.3096 27.6765C20.4747 26.0404 19.2359 24.0201 18.8758 23.4021C18.5158 22.785 18.8373 22.4505 19.1468 22.143C19.4241 21.8664 19.7642 21.4222 20.0731 21.062C20.3809 20.7015 20.4836 20.4443 20.6894 20.0327C20.8954 19.6207 20.7923 19.2602 20.6382 18.9515C20.4836 18.6428 19.2842 15.5904 18.7353 14.3701" fill="white" />
          </g>
          <defs>
            <linearGradient
              id="paint0_linear_230_11831"
              x1="24.8064"
              y1="48.9728"
              x2="24.8064"
              y2="0.863281"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#1FAF38" />
              <stop offset="1" stop-color="#60D669" />
            </linearGradient>
            <linearGradient
              id="paint1_linear_230_11831"
              x1="24.8062"
              y1="49.8347"
              x2="24.8062"
              y2="0"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#F9F9F9" />
              <stop offset="1" stop-color="white" />
            </linearGradient>
            <clipPath id="clip0_230_11831">
              <rect width="49.6124" height="50" fill="white" />
            </clipPath>
          </defs>
        </svg>
        <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g clip-path="url(#clip0_230_11841)">
            <path d="M40 20C40 8.95438 31.0456 0 20 0C8.95437 0 0 8.95422 0 20C0 29.9825 7.31375 38.2567 16.875 39.757V25.7813H11.7969V20H16.875V15.5938C16.875 10.5813 19.8609 7.8125 24.4292 7.8125C26.6175 7.8125 28.9062 8.20313 28.9062 8.20313V13.125H26.3844C23.8997 13.125 23.125 14.6667 23.125 16.2484V20H28.6719L27.7852 25.7813H23.125V39.757C32.6862 38.2567 40 29.9827 40 20Z" fill="#1877F2" />
            <path d="M27.7852 25.7812L28.6719 20H23.125V16.2484C23.125 14.6666 23.8998 13.125 26.3844 13.125H28.9062V8.20312C28.9062 8.20312 26.6175 7.8125 24.4292 7.8125C19.8609 7.8125 16.875 10.5813 16.875 15.5938V20H11.7969V25.7812H16.875V39.757C17.9088 39.919 18.9536 40.0003 20 40C21.0464 40.0003 22.0912 39.9191 23.125 39.757V25.7812H27.7852Z" fill="white" />
          </g>
          <defs>
            <clipPath id="clip0_230_11841">
              <rect width="40" height="40" fill="white" />
            </clipPath>
          </defs>
        </svg>
        <svg width="49" height="40" viewBox="0 0 49 40" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g clip-path="url(#clip0_230_11848)">
            <path d="M48.9952 4.8717C47.1605 5.68447 45.2145 6.21798 43.2218 6.45447C45.2974 5.21045 46.8911 3.2405 47.6415 0.893323C45.6684 2.0642 43.5097 2.88916 41.2586 3.33256C39.4249 1.37906 36.8126 0.158203 33.9213 0.158203C28.37 0.158203 23.8691 4.65887 23.8691 10.2099C23.8691 10.9978 23.9581 11.7649 24.1294 12.5008C15.7753 12.0815 8.36861 8.07973 3.41072 1.9982C2.54565 3.4828 2.04995 5.20969 2.04995 7.0516C2.04995 10.5391 3.82469 13.6156 6.52172 15.4183C4.92545 15.3683 3.3643 14.9372 1.96861 14.1609C1.96804 14.203 1.96804 14.2451 1.96804 14.2874C1.96804 19.1576 5.43292 23.2204 10.0312 24.1438C8.55098 24.5464 6.99833 24.6053 5.49187 24.3161C6.77091 28.3096 10.4833 31.2156 14.8817 31.297C11.4415 33.9928 7.10718 35.5999 2.39789 35.5999C1.58641 35.5999 0.786412 35.5523 0 35.4594C4.44842 38.3115 9.73206 39.9756 15.4086 39.9756C33.898 39.9756 44.0084 24.6587 44.0084 11.3756C44.0084 10.9396 43.9989 10.5061 43.9793 10.0751C45.9472 8.65253 47.6458 6.89048 48.9952 4.8717Z" fill="#55ACEE" />
          </g>
          <defs>
            <clipPath id="clip0_230_11848">
              <rect width="48.9952" height="40" fill="white" />
            </clipPath>
          </defs>
        </svg>
        <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g clip-path="url(#clip0_230_11853)">
            <path d="M34.0819 34.0824H28.1552V24.8007C28.1552 22.5874 28.1156 19.7382 25.0727 19.7382C21.9858 19.7382 21.5134 22.1498 21.5134 24.6396V34.0818H15.5869V14.9949H21.2764V17.6034H21.3561C21.9255 16.6298 22.7483 15.8289 23.7369 15.2859C24.7254 14.7429 25.8428 14.4783 26.9698 14.5201C32.9769 14.5201 34.0844 18.4713 34.0844 23.6117L34.0819 34.0824ZM8.89937 12.386C6.99984 12.3863 5.45969 10.8467 5.45937 8.94713C5.45906 7.0476 6.99859 5.50744 8.89812 5.50713C10.7977 5.50666 12.3378 7.04635 12.3381 8.94588C12.3383 9.85807 11.9761 10.733 11.3312 11.3781C10.6863 12.0233 9.81157 12.3858 8.89937 12.386ZM11.8628 34.0826H5.92984V14.9949H11.8627V34.0824L11.8628 34.0826ZM37.0366 0.00291123H2.95172C1.34078 -0.0152138 0.0196875 1.27525 0 2.88619V37.1132C0.0190625 38.7249 1.34 40.0167 2.95156 39.9998H37.0366C38.6516 40.0198 39.9777 38.7281 40 37.1132V2.88354C39.977 1.26947 38.6508 -0.0208388 37.0366 0.000254983" fill="#0A66C2" />
          </g>
          <defs>
            <clipPath id="clip0_230_11853">
              <rect width="40" height="40" fill="white" />
            </clipPath>
          </defs>
        </svg>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    modalWidth: {
      type: Number,
      default: () => 32
    },
    referralCode: {
      type: String,
      default: () => ''
    }
  },
  data () {
    return {
      anim: ''
    }
  },
  mounted () {
    const windowWidth = window.innerWidth
    if (windowWidth < 500) {
      // console.log('come-up')
      this.anim = 'come-up'
    } else {
      this.anim = 'reveals'
    }
  },
  methods: {
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
  width: 32%;
  height: fit-content;
  align-items: center;
  border-radius: 10px;
  overflow-y: auto;
  padding: 3vh 2vw;
  padding-bottom: 5vh;
}

.modal_top {
  display: flex;
  justify-content: flex-end;
}

.modal_top svg {
  cursor: pointer;
}

.modal-icon {
  text-align: center;
}

.modal-icon img {
  width: 120px;
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
  /* text-align: center; */
  width: 90%;
  margin: auto;
  color: #000;
  margin-top: 2vh;
  line-height: 24px;
}

.sub-data {
  color: rgba(0, 0, 0, 0.5);
  text-align: center;
  font-size: 12px;
  font-weight: 600;
  margin: 12px 0;
}

.bottom_btn {
  width: 90%;
  margin: auto;
  display: flex;
  align-items: center;
  margin-top: 4vh;
}

.bottom_btn svg {
  margin-right: 20px;
  cursor: pointer;
}

.trans_btn {
  width: 50%;
  font-weight: 700;
}

.bg_btn {
  width: 50%;
  font-weight: 700;
}

.link {
  color: #00295D;
  font-weight: 600;
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
    font-size: 20px;
  }

  .sub-title {
    font-size: 14px;
    width: 100%;
  }

  .bottom_btn {
    width: 100%;
    margin-top: 6vh;
  }

}

</style>
