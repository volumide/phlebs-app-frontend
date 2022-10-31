<template>
  <div class="box">
    <!-- <div class="skeleton card search no_show" /> -->
    <p class="box_name">
      {{ boxName }}
    </p>
    <div class="top">
      <div class="skeleton card fs" />
      <div class="skeleton card fs" />
      <div class="skeleton card fs" />
    </div>
    <div class="below">
      <div class="skeleton card notif" />
      <div class="skeleton card notif_2" />
      <div class="skeleton card notif_2" />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    boxName: {
      type: String,
      default: () => ''
    }
  }

}
</script>

<style scoped>

.box {
  width: 100%;
  background-color: #FFFFFF;
  border: 1px solid rgba(0, 41, 93, 0.1);
  border-radius: 10px;
  padding: 2vh 1.5vw;
  margin-top: 1vh;
}
.top {
  width: 100%;
  display: flex;
  justify-content: space-between;
  height: 70px;
  margin-top: 30px;
}
.search {
  width: 100%;
  height: 50px;
  margin-bottom: 30px;
}
.fs {
  width: 31%;
  height: 100%;
  margin-bottom: 30px;
}
.ms {
  width: 17%;
  height: 100%;
  margin-bottom: 30px;
}
.ls {
  width: 40%;
  height: 100%;
  margin-bottom: 30px;
}

.notif {
  margin: 50px 0;
}

.notif_2 {
  margin: 50px 0;
  height: 100px;
}

.notif_box {
  display: flex;
  justify-content: space-between;
  margin-bottom: 50px;
}

.notif_box div {
  width: 48%;
}

.box_name {
  color: var(--primary-color);
  font-weight: 700;
  font-size: 24px;
}

@media only screen and (max-width: 500px) {
  .top {
    flex-wrap: wrap;
  }

  .fs {
    width: 70%;
  }

  .ms {
    width: 27%;
  }

  .ls {
    display: none;
  }
}
</style>
