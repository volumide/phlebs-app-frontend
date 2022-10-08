<template>
  <div class="loader_container">
    <div class="top">
      <div class="skeleton card fs" />
      <div class="skeleton card ms" />
      <div class="skeleton card ls" />
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
}
.fs {
  width: 45%;
}
.ms {
  width: 20%;
}
.ls {
  width: 30%;
}
</style>
