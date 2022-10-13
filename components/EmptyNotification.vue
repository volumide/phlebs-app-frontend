<template>
  <div class="empty-state-ctn">
    <div class="empty-state">
      <div class="image-file">
        <img class="reveals" src="~assets/icons/empty-file.svg" alt="">
      </div>
      <div class="text-box come-up">
        <p class="not-text">
          You have no Notification
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'EmptyState',
  props: {
    page: {
      type: String,
      default: () => null
    }
  }
}
</script>

<style scoped>
.empty-state-ctn {
  padding: 20px 0;
}

.modal-icon {
  text-align: center;
}

a {
  margin-top: 5%;
  display: inline-grid;
  padding: 0 10%;
  place-items: center;
  /* background: #004368; */
}
.text-box {
  display: flex;
  justify-content: center;
}
.not-text {
  margin: auto;
  margin-top: 5%;
  text-align: center;
  font-weight: normal;
  font-size: 18px;
  /* line-height: 30px; */
  color: #000c133d;
}
.image-file {
  text-align: center;
}
.image-file img {
  width: 30%;
  margin-top: 5%;
}
@media screen and (max-width: 1050px) {
  .empty-state.services img {
    margin-top: 10%;
  }
  .empty-state.payments img {
    margin-top: 10%;
  }
  .empty-state .text {
    width: 40%;
    margin: 0 auto;
  }
}
@media screen and (max-width: 800px) {
  .empty-state.services img {
    margin-top: 10%;
  }
  .empty-state.payments img {
    margin-top: 10%;
  }
  .empty-state .text {
    width: 40%;
    margin: 0 auto;
    font-size: 19px;
  }
}
@media screen and (max-width: 500px) {
  .empty-state.services img {
    width: 100px;
  }
  .empty-state.payments img {
    width: 100px;
  }
  .empty-state .text {
    width: 60%;
    margin: 0 auto;
    font-size: 15px;
    line-height: 20px;
    margin-top: 10px;
  }
  .empty-state.services .text {
    margin-top: 10px;
  }
  .empty-state.payments .text {
    margin-top: 10px;
  }
  .empty-state {
    margin-bottom: 10%;
  }
}
</style>
