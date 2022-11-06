<template>
  <div class="footer_ctn">
    <div class="inner">
      <!-- <div class="lhs">
        dc
      </div> -->
      <div class="m mobile_no_show">
        Showing 1 to 10 of 57 Entries
      </div>
      <div class="m no_show">
        1 to 10 of 57
      </div>
      <div class="rhs">
        <p class="prev" @click="$emit('prev')">
          Prev
        </p>
        <p class="next" @click="$emit('next')">
          Next
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.footer_ctn {
  padding: 10px 20px;
  width: 100%;
}
.inner {
  display: flex;
  height: 70px;
  align-items: center;
  justify-content: space-between;
  width: 100%;
}

.lhs {
  flex-basis: 20%;
}

.rhs {
  flex-basis: 15%;
  display: flex;
  justify-content: space-between;
}

.prev {
  border: 1px solid rgba(0, 0, 0, 0.212);
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
}

.prev:hover {
  color: var(--primary-color);
  font-weight: 700;
  border: 2px solid var(--primary-color);
}

.next {
  border: 1px solid rgba(0, 0, 0, 0.212);
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
}

.next:hover {
  color: var(--primary-color);
  font-weight: 700;
  border: 2px solid var(--primary-color);
}

 @media only screen and (max-width: 500px) {
  .footer_ctn {
    padding: 10px 0;
  }
  .lhs {
    flex-basis: 40%;
  }
  .rhs {
    flex-basis: 45%;
  }
 }
</style>
