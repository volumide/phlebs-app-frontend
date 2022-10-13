<template>
  <div class="loader_container">
    <div class="skeleton card ts" />
    <div class="skeleton card fs" />
    <div class="skeleton card fs" />
    <div class="skeleton card fs" />
    <div class="skeleton card fs" />
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.loader_container {
  padding: 0 20px;
}
.ts {
  width: 70%;
  height: 40px;
  margin-bottom: 3vh;
  /* border-bottom: 1px solid rgba(0, 0, 0, 0.049); */
}
.fs {
  width: 100%;
  height: 80px;
  margin-bottom: 1vh;
  /* border-bottom: 1px solid rgba(0, 0, 0, 0.049); */
}

@media only screen and (max-width: 500px) {
  .loader_container {
    padding: 10px;
  }
}
</style>
