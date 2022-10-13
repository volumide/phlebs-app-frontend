<template>
  <div class="loader_container">
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
.fs {
  width: 100%;
  height: 60px;
  margin-bottom: 10px;
  /* border-bottom: 1px solid rgba(0, 0, 0, 0.049); */
}
</style>
