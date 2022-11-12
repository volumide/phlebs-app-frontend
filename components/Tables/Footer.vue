<template>
  <div class="footer_ctn">
    <div class="inner">
      <div class="lhs">
        <div class="lhs_inner">
          <span class="mobile_no_show">Show</span>
          <div class="form-select">
            <select
              v-model="limit"
              @change="$emit('set-limit', limit)"
            >
              <!-- <option value="">
                Select...
              </option> -->
              <option v-for="index in dropDownNum" :key="index" :value="index">
                {{ index }}
              </option>
            </select>
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M7.24652 11.14L2.45052 5.658C1.88452 5.013 2.34452 4 3.20352 4H12.7955C12.9878 3.99984 13.176 4.05509 13.3376 4.15914C13.4993 4.26319 13.6275 4.41164 13.707 4.58669C13.7864 4.76175 13.8137 4.956 13.7856 5.14618C13.7575 5.33636 13.6752 5.51441 13.5485 5.659L8.75252 11.139C8.65866 11.2464 8.54291 11.3325 8.41303 11.3915C8.28316 11.4505 8.14216 11.481 7.99952 11.481C7.85688 11.481 7.71589 11.4505 7.58601 11.3915C7.45614 11.3325 7.34038 11.2464 7.24652 11.139V11.14Z" fill="black" />
            </svg>
          </div>
          <span>entries</span>
        </div>
      </div>
      <!-- <div class="m mobile_no_show">
        Showing 1 to 10 of {{ totalDocs }} Entries
      </div>
      <div class="m no_show">
        1 to 10 of {{ totalDocs }}
      </div> -->
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
    limitProps: {
      type: Number,
      default: () => 8
    },
    prevDisabled: {
      type: Boolean,
      default: () => null
    },
    nextDisabled: {
      type: Boolean,
      default: () => null
    }
  },
  data () {
    return {
      dropDownNum: [5, 6, 7, 8, 9, 10, 15, 20, 25, 30],
      limit: 8
    }
  },
  watch: {
    limitProps: {
      immediate: true,
      handler (val) {
        this.limit = val
      }
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

.lhs_inner {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.form-select select {
  width: 7rem;
  border: 1px solid #79839684;
}

.form-select svg {
  top: 30px;
  left: 80%;
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

  .form-select {
    margin-right: 10px;
  }
  .form-select select {
    height: 40px;
  }

  .form-select svg {
    top: 23px;
    left: 80%;
  }
 }
</style>
