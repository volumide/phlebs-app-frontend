<template>
  <div class="loader_container">
    <div class="lhs">
      <div class="skeleton card img" />
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
  padding: 0 20px;
  width: 100%;
  display: flex;
  justify-content: space-between;
}

.lhs {
  width: 25%;
  padding: 4vh 0;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0px 4px 4px rgba(0, 41, 93, 0.09);
  border-radius: 4px;
}

.rhs {
  width: 72%;
  box-shadow: 0px 4px 4px rgba(0, 41, 93, 0.09);
  border-radius: 4px;
  padding: 2vh 4vw;
}

.img {
  width: 50%;
  height: 8rem;
}
.fs {
  width: 100%;
  height: 70px;
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
