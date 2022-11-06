<template>
  <div class="modal-backdrop-2 no_show" @click="$emit('close-modal')">
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
      <div class="modal-icon">
        <div class="icon_type">
          <svg width="40" height="40" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clip-path="url(#clip0_398_12174)">
              <path d="M23.2263 2.6753L15.395 0.064051C15.1386 -0.0213503 14.8614 -0.0213503 14.605 0.064051L6.7725 2.6753C5.52762 3.08912 4.44478 3.88468 3.6778 4.94898C2.91082 6.01327 2.49871 7.29219 2.5 8.60405V15.0003C2.5 24.4541 14 29.6753 14.4925 29.8928C14.6523 29.9638 14.8252 30.0005 15 30.0005C15.1748 30.0005 15.3477 29.9638 15.5075 29.8928C16 29.6753 27.5 24.4541 27.5 15.0003V8.60405C27.5012 7.29203 27.0889 6.01301 26.3217 4.94869C25.5545 3.88437 24.4714 3.0889 23.2263 2.6753ZM15 23.7503C14.7528 23.7503 14.5111 23.677 14.3055 23.5396C14.1 23.4023 13.9398 23.2071 13.8452 22.9787C13.7505 22.7502 13.7258 22.4989 13.774 22.2564C13.8223 22.014 13.9413 21.7912 14.1161 21.6164C14.2909 21.4416 14.5137 21.3225 14.7561 21.2743C14.9986 21.2261 15.25 21.2508 15.4784 21.3455C15.7068 21.4401 15.902 21.6003 16.0393 21.8058C16.1767 22.0114 16.25 22.2531 16.25 22.5003C16.25 22.8318 16.1183 23.1498 15.8839 23.3842C15.6495 23.6186 15.3315 23.7503 15 23.7503ZM16.25 17.5003C16.25 17.8318 16.1183 18.1498 15.8839 18.3842C15.6495 18.6186 15.3315 18.7503 15 18.7503C14.6685 18.7503 14.3505 18.6186 14.1161 18.3842C13.8817 18.1498 13.75 17.8318 13.75 17.5003V7.5003C13.75 7.16878 13.8817 6.85084 14.1161 6.61642C14.3505 6.382 14.6685 6.2503 15 6.2503C15.3315 6.2503 15.6495 6.382 15.8839 6.61642C16.1183 6.85084 16.25 7.16878 16.25 7.5003V17.5003Z" fill="#F15728" />
            </g>
            <defs>
              <clipPath id="clip0_398_12174">
                <rect width="30" height="30" fill="white" />
              </clipPath>
            </defs>
          </svg>
        </div>
      </div>
      <h1 class="title">
        Kindly Contact Support
      </h1>
      <p class="sub-title">
        Due to security terms, you wont be allowed to change your primary bank account at the moment.
      </p>
      <p class="sub-title">
        Kindly contact the technical support team to handle this for you.
      </p>
      <div class="bottom_btn">
        <button v-if="transBtn" class="trans_btn" @click="$emit('trans-action')">
          {{ transBtn }}
        </button>
        <button v-if="!bgLoading && bgBtn" class="bg_btn" @click="$emit('bg-action')">
          {{ bgBtn }}
        </button>
        <button v-else class="bg_btn" disabled>
          <Loader class="come-down" />
        </button>
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
    modalImage: {
      type: String,
      default: () => ''
    },
    modalHead: {
      type: String,
      default: () => ''
    },
    modalText: {
      type: String,
      default: () => ''
    },
    transBtn: {
      type: String,
      default: () => ''
    },
    bgBtn: {
      type: String,
      default: () => ''
    },
    bgLoading: {
      type: Boolean,
      default: () => false
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

.modal-icon {
  text-align: center;
}

.modal-icon img {
  width: 60px;
  margin-top: 40px;
}

.title {
  color: var(--primary-color);
  font-size: 18px;
  font-weight: 700;
  text-align: center;
  width: 100%;
  margin: auto;
  margin-top: 3vh;
}

.sub-title {
  text-align: center;
  width: 80%;
  margin: auto;
  color: rgba(0, 0, 0, 0.5);
  margin-top: 2vh;
  line-height: 24px;
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
    font-size: 20px;
  }

  .sub-title {
    font-size: 14px;
    width: 100%;
  }

  .bottom_btn {
    width: 100%;
    gap: 2vw;
    margin-top: 6vh;
  }

}

</style>
