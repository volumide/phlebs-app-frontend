<template>
  <div class="loader_container">
    <div class="skeleton card fs" />
    <div class="skeleton card ls" />
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.loader_container {
  /* padding: 0 20px; */
  width: 60%;
  display: flex;
  justify-content: space-between;
}
.fs {
  width: 48%;
  height: 10rem;
  margin-bottom: 2vh;
  /* border-bottom: 1px solid rgba(0, 0, 0, 0.049); */
}
.ls {
  width: 48%;
  height: 10rem;
  margin-bottom: 2vh;
  /* border-bottom: 1px solid rgba(0, 0, 0, 0.049); */
}

@media only screen and (max-width: 500px) {
  .loader_container {
    padding: 10px;
    flex-direction: column;
  }

  .lhs, .rhs {
    width: 100%;
    margin-bottom: 10px;
  }
}
</style>
