<template>
  <div class="form_container come-up">
    <div class="form_inner">
      <p class="title">
        Next of Kin
      </p>
      <p class="sub_title">
        Who else can we reach incase of emergency?
      </p>
      <div class="form">
        <div class="input-box">
          <p class="label">
            Next of Kin First Name
          </p>
          <div class="new_input">
            <input v-model="nok_first_name" placeholder="Your Legal First Name" type="text">
          </div>
        </div>
        <div class="input-box">
          <p class="label">
            Next of Kin Last Name
          </p>
          <div class="new_input">
            <input v-model="nok_last_name" placeholder="Your Legal Surname" type="text">
          </div>
        </div>
        <div class="input-box">
          <p class="label">
            Next of Kin Phone Number
          </p>
          <div class="new_input">
            <input v-model="nok_phone" placeholder="e.g. 45" type="number">
          </div>
        </div>
        <div class="input-box">
          <p class="label">
            Next of Kin Address
          </p>
          <div class="new_input">
            <input v-model="nok_address" placeholder="House Nuumber, Street , Bus Stop City," type="text">
          </div>
        </div>
        <div class="input-box">
          <p class="label">
            Relationship to Next of Kin
          </p>
          <div class="form-select">
            <select v-model="nok_relationship" required>
              <option value="">
                Select...
              </option>
              <option value="Brother">
                Brother
              </option>
              <option value="Sister">
                Sister
              </option>
              <option value="Friend">
                Friend
              </option>
              <option value="Father">
                Father
              </option>
              <option value="Mother">
                Mother
              </option>
              <option value="Others">
                Others
              </option>
            </select>
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M7.24652 11.14L2.45052 5.658C1.88452 5.013 2.34452 4 3.20352 4H12.7955C12.9878 3.99984 13.176 4.05509 13.3376 4.15914C13.4993 4.26319 13.6275 4.41164 13.707 4.58669C13.7864 4.76175 13.8137 4.956 13.7856 5.14618C13.7575 5.33636 13.6752 5.51441 13.5485 5.659L8.75252 11.139C8.65866 11.2464 8.54291 11.3325 8.41303 11.3915C8.28316 11.4505 8.14216 11.481 7.99952 11.481C7.85688 11.481 7.71589 11.4505 7.58601 11.3915C7.45614 11.3325 7.34038 11.2464 7.24652 11.139V11.14Z" fill="black" />
            </svg>
          </div>
        </div>
        <div v-if="nok_relationship === 'Others'" class="input-box come-down">
          <p class="label">
            Others (Specify)
          </p>
          <div class="new_input">
            <input v-model="nok_relationship_others" placeholder="Specify Next of Kin Relationship" type="text">
          </div>
        </div>
        <div class="bottom_btn">
          <button class="trans_btn" @click="$emit('back')">
            Back
          </button>
          <button v-if="loading" class="bg_btn">
            <Loader class="come-down" />
          </button>
          <button v-else :disabled="disabled" class="bg_btn" @click="submit()">
            Save and Proceed
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Cookies from 'js-cookie'
export default {
  props: {
    userDetails: {
      type: Object,
      default: () => {}
    }
  },
  data () {
    return {
      loading: false,
      nok_first_name: '',
      nok_last_name: '',
      nok_phone: '',
      nok_address: '',
      nok_relationship: '',
      nok_relationship_others: ''
    }
  },
  computed: {
    disabled () {
      return (
        this.nok_first_name === '' ||
        this.nok_last_name === '' ||
        this.nok_phone === '' ||
        this.nok_address === '' ||
        this.nok_relationship === ''
      )
    }
  },
  created () {
    this.getDetails()
  },
  methods: {
    submit () {
      // this.$emit('proceed')
      this.loading = true
      this.$axios.$post('/auth/upload_next_of_kin', {
        kinfirstname: this.nok_first_name,
        kinlastname: this.nok_last_name,
        kin_mobile_number: this.nok_phone,
        kin_relationship: this.nok_relationship === 'Others' ? this.nok_relationship_others : this.nok_relationship,
        kinaddress: this.nok_address
      },
      {
        headers: {
          Authorization: `Bearer ${Cookies.get('token')}`
        }
      }
      ).then((response) => {
        this.loading = false
        if (!response.error) {
          this.$emit('proceed')
        } else {
          this.error = true
          this.errorText = response.errorMsg
          setTimeout(() => {
            this.error = false
          }, 2000)
        }
      })
    },
    getDetails () {
      // console.log(this.userDetails)
      const details = this.userDetails.nextofkin
      this.nok_first_name = details.kinfirstname
      this.nok_last_name = details.kinlastname
      this.nok_phone = details.kin_mobile_number
      this.nok_address = details.kinaddress
      this.nok_relationship = details.kin_relationship
      this.nok_relationship_others = details.kin_relationship
    }
  }
}
</script>

<style scoped>
.form_container {
  padding: 2rem;
}

.title {
  font-size: 20px;
  font-weight: 700;
  text-align: center;
  color: var(--primary-color);
}

.sub_title {
  color: black;
  margin-top: 10px;
  text-align: center;
}

.form {
  margin-top: 3rem;
}

.input-box {
  margin-bottom: 3vh;
}

.bottom_btn {
  display: flex;
  justify-content: space-between;
  margin-top: 6vh;
}

.trans_btn {
  width: 48%;
}

.bg_btn {
  width: 48%;
}

button:disabled,
button[disabled] {
  background-color: #cacaca;
  color: #929292;
  cursor: not-allowed;
  opacity: 0.7;
}

@media only screen and (max-width: 500px) {
  .form_container {
    padding: 10px 0;
  }

  .title {
    font-size: 18px;
    margin-top: 1.5rem;
  }

  .sub_title {
    font-size: 13px;
  }

  .input-box {
    margin-bottom: 5vh;
  }
}
</style>
