<template>
  <div class="loader_container">
    <div class="lhs">
      <div class="skeleton card fs" />
      <div class="skeleton card fs" />
    </div>
    <div class="rhs">
      <div class="skeleton card fs" />
      <div class="skeleton card fs" />
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.loader_container {
  /* padding: 0 20px; */
  width: 100%;
  display: flex;
  justify-content: space-between;
}

.lhs {
  width: 45%;
  /* padding: 4vh 0; */
}

.rhs {
  width: 45%;
  /* padding: 2vh 4vw; */
}

.fs {
  width: 100%;
  height: 70px;
  margin-top: 40px;
  /* border-bottom: 1px solid rgba(0, 0, 0, 0.049); */
}

@media only screen and (max-width: 500px) {
  .loader_container {
    /* padding: 10px; */
    flex-direction: column;
  }

  .lhs, .rhs {
    width: 100%;
    margin-bottom: 10px;
  }
}
</style>
