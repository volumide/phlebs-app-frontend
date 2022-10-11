<template>
  <div class="loader_container">
    <div class="skeleton card search no_show" />
    <div class="top">
      <div class="skeleton card fs" />
      <div class="skeleton card ms" />
      <div class="skeleton card ls" />
    </div>
    <div class="below">
      <div class="skeleton card notif" />
      <div class="notif_box">
        <div class="skeleton card" />
        <div class="skeleton card" />
      </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.top {
  width: 100%;
  display: flex;
  justify-content: space-between;
  height: 12rem;
}
.search {
  width: 100%;
  height: 50px;
  margin-bottom: 30px;
}
.fs {
  width: 35%;
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

.notif_box {
  display: flex;
  justify-content: space-between;
  margin-bottom: 50px;
}

.notif_box div {
  width: 48%;
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
