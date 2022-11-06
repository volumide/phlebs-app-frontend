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
          <svg
            v-if="modalData.type.toLowerCase().includes('withdraw')"
            width="38"
            height="39"
            viewBox="0 0 38 39"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="19" cy="19.2266" r="19" fill="#FFE9D9" />
            <path d="M24.6392 22.0969L24.632 15.9104C24.6304 15.3723 24.4159 14.8566 24.0354 14.4761C23.6548 14.0955 23.1392 13.8811 22.601 13.8795L16.4145 13.8722C16.1454 13.873 15.8876 13.9803 15.6973 14.1706C15.507 14.3608 15.3998 14.6187 15.399 14.8877C15.3984 15.0222 15.4245 15.1554 15.4757 15.2797C15.5269 15.4041 15.6022 15.517 15.6973 15.6121C15.7924 15.7072 15.9053 15.7825 16.0297 15.8337C16.154 15.8849 16.2872 15.911 16.4217 15.9104L21.1606 15.9104L13.2384 23.8326C13.0474 24.0236 12.9401 24.2827 12.9401 24.5528C12.9401 24.823 13.0474 25.082 13.2384 25.273C13.4294 25.464 13.6885 25.5714 13.9586 25.5714C14.2287 25.5714 14.4878 25.464 14.6788 25.273L22.601 17.3508L22.601 22.0897C22.6001 22.36 22.7065 22.6196 22.8969 22.8114C23.0874 23.0032 23.3462 23.1115 23.6165 23.1124C23.8868 23.1134 24.1464 23.0069 24.3382 22.8165C24.5299 22.6261 24.6382 22.3672 24.6392 22.0969Z" fill="#F15728" />
          </svg>
          <svg
            v-else
            width="38"
            height="39"
            viewBox="0 0 38 39"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="19" cy="19.2266" r="19" transform="rotate(-180 19 19.2266)" fill="#DAEEED" />
            <path d="M13.3608 16.3562L13.368 22.5427C13.3696 23.0809 13.5841 23.5965 13.9646 23.977C14.3452 24.3576 14.8608 24.5721 15.399 24.5737L21.5855 24.5809C21.8546 24.5801 22.1124 24.4728 22.3027 24.2826C22.493 24.0923 22.6002 23.8345 22.601 23.5654C22.6016 23.4309 22.5755 23.2977 22.5243 23.1734C22.4731 23.0491 22.3978 22.9361 22.3027 22.841C22.2076 22.7459 22.0947 22.6706 21.9703 22.6194C21.846 22.5682 21.7128 22.5422 21.5783 22.5427L16.8394 22.5427L24.7616 14.6205C24.9526 14.4295 25.0599 14.1704 25.0599 13.9003C25.0599 13.6302 24.9526 13.3711 24.7616 13.1801C24.5706 12.9891 24.3115 12.8818 24.0414 12.8818C23.7713 12.8818 23.5122 12.9891 23.3212 13.1801L15.399 21.1023L15.399 16.3634C15.3999 16.0931 15.2935 15.8335 15.1031 15.6417C14.9126 15.4499 14.6538 15.3416 14.3835 15.3407C14.1132 15.3397 13.8536 15.4462 13.6618 15.6366C13.4701 15.8271 13.3618 16.0859 13.3608 16.3562Z" fill="#00B78F" />
          </svg>
        </div>
      </div>
      <h1 class="title">
        {{ modalData.type }}
      </h1>
      <p v-if="modalText" class="sub-title">
        {{ modalText }}
      </p>
      <!-- <p v-if="addDataOne" class="sub-data">
        {{ addDataOne }}
      </p>
      <p v-if="addDataTwo" class="sub-data">
        {{ addDataTwo }}
      </p> -->
      <div class="bottom_btn">
        <button v-if="transBtn" class="trans_btn" @click="$emit('trans-action')">
          {{ transBtn }}
        </button>
        <button v-if="bgBtn" class="bg_btn" @click="$emit('bg-action')">
          {{ bgBtn }}
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
    modalData: {
      type: Object,
      default: () => {}
    },
    transBtn: {
      type: String,
      default: () => ''
    },
    bgBtn: {
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
  background-color: rgba(1, 10, 20, 0.363);
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
