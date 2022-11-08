<template>
  <div class="footer_ctn">
    <div class="inner">
      <!-- <div class="lhs">
        dc
      </div> -->
      <div class="m mobile_no_show">
        Showing 1 to 10 of {{ totalDocs }} Entries
      </div>
      <div class="m no_show">
        1 to 10 of {{ totalDocs }}
      </div>
      <div class="rhs">
        <p class="prev" :disabled="!prevDisabled" @click="$emit('prev')">
          Prev
        </p>
        <p class="next" :disabled="!nextDisabled" @click="$emit('next')">
          Next
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    totalDocs: {
      type: Number,
      default: () => null
    },
    prevDisabled: {
      type: Boolean,
      default: () => null
    },
    nextDisabled: {
      type: Boolean,
      default: () => null
    }
  }
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
  border: 1.5px solid var(--primary-color);
  padding: 10px 20px;
  border-radius: 5px;
  color: var(--primary-color);
  font-weight: 600;
  cursor: pointer;
}

/* .prev:hover {
  color: var(--primary-color);
  font-weight: 700;
  border: 2px solid var(--primary-color);
} */

.next {
  border: 1.5px solid var(--primary-color);
  padding: 10px 20px;
  border-radius: 5px;
  color: var(--primary-color);
  font-weight: 600;
  cursor: pointer;
}

/* .next:hover {
  color: var(--primary-color);
  font-weight: 700;
  border: 2px solid var(--primary-color);
} */

p:disabled,
p[disabled] {
  border: 1.5px solid #929292;
  background-color: #cacaca69;
  color: #929292;
  cursor: not-allowed;
  opacity: 0.7;
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
