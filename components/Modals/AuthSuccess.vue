<template>
  <div class="ctn come-up">
    <div class="inner_ctn">
      <p class="head">
        {{ heading }}
      </p>
      <p class="sub_head">
        {{ subHeading }}
      </p>
      <div v-if="whatsappStatus" class="ctn_img">
        <img src="~assets/gifs/94110-whatsapp-transparent.gif" alt="">
      </div>
      <div v-else class="ctn_img">
        <img src="~assets/gifs/96673-success.gif" alt="">
      </div>
      <div class="btn">
        <button class="bg_btn" @click="$emit('btnAction')">
          {{ btnText }}
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    heading: {
      type: String,
      default: () => ''
    },
    subHeading: {
      type: String,
      default: () => ''
    },
    btnText: {
      type: String,
      default: () => ''
    },
    whatsappStatus: {
      type: Boolean,
      default: () => false
    }
  }

}
</script>

<style scoped>
.inner_ctn {
  width: 100%;
}
.btn {
  display: flex;
  margin-top: 5vh;
  margin-bottom: 5vh;
  justify-content: center;
}
.bg_btn {
  width: 60%;
}

.head {
  text-align: center;
  font-size: 20px;
  font-weight: 700;
  width: 70%;
  margin: auto;
  color: var(--primary-color);
}

.sub_head {
  text-align: center;
  width: 80%;
  margin: auto;
  color: black;
  margin-top: 3vh;
}

.ctn_img {
  margin-top: 5vh;
  display: flex;
  justify-content: center;
}

.ctn_img img {
  width: 30%;
}

@media only screen and (max-width: 500px) {
  .inner_ctn {
    margin-top: 12vh;
  }

  .head {
    font-size: 18px;
    margin-top: 1.5rem;
  }

  .sub_head {
    font-size: 13px;
  }
  .btn {
    margin-top: 10vh;
  }
  .bg_btn {
    width: 100%;
  }
}
</style>
