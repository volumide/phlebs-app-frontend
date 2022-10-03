<template>
  <div class="form_container come-up">
    <div class="form_inner">
      <p class="title">
        Let&apos;s have your Personal Information
      </p>
      <p class="sub_title">
        This information are kept confidential with us, only your first name and profile picture are visible during bookings
      </p>
      <div class="form">
        <div class="input-box">
          <p class="label">
            Your First Name
          </p>
          <div class="new_input">
            <input v-model="first_name" placeholder="Your Legal First Name" type="text">
          </div>
        </div>
        <div class="input-box">
          <p class="label">
            Your Last Name
          </p>
          <div class="new_input">
            <input v-model="last_name" placeholder="Your Legal Surname" type="text">
          </div>
        </div>
        <div class="input-box">
          <p class="label">
            Age
          </p>
          <div class="new_input">
            <input v-model="age" placeholder="e.g. 45" type="number">
          </div>
        </div>
        <div class="input-box">
          <p class="label">
            Gender
          </p>
          <div class="form-select">
            <select v-model="gender" required>
              <option value="">
                Select...
              </option>
              <option value="male">
                Male
              </option>
              <option value="female">
                Female
              </option>
            </select>
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M7.24652 11.14L2.45052 5.658C1.88452 5.013 2.34452 4 3.20352 4H12.7955C12.9878 3.99984 13.176 4.05509 13.3376 4.15914C13.4993 4.26319 13.6275 4.41164 13.707 4.58669C13.7864 4.76175 13.8137 4.956 13.7856 5.14618C13.7575 5.33636 13.6752 5.51441 13.5485 5.659L8.75252 11.139C8.65866 11.2464 8.54291 11.3325 8.41303 11.3915C8.28316 11.4505 8.14216 11.481 7.99952 11.481C7.85688 11.481 7.71589 11.4505 7.58601 11.3915C7.45614 11.3325 7.34038 11.2464 7.24652 11.139V11.14Z" fill="black" />
            </svg>
          </div>
        </div>
        <div class="input-box">
          <p class="label">
            Address
          </p>
          <div class="new_input">
            <input v-model="address" placeholder="House Nuumber, Street , Bus Stop City," type="text">
          </div>
        </div>
        <div class="input-box">
          <p class="label">
            Nearest drop-off location
          </p>
          <div class="form-select">
            <select v-model="drop_location" required>
              <option value="">
                Select...
              </option>
              <option v-for="(data, index) in dropoffLocation" :key="index" :value="data">
                {{ data }}
              </option>
            </select>
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M7.24652 11.14L2.45052 5.658C1.88452 5.013 2.34452 4 3.20352 4H12.7955C12.9878 3.99984 13.176 4.05509 13.3376 4.15914C13.4993 4.26319 13.6275 4.41164 13.707 4.58669C13.7864 4.76175 13.8137 4.956 13.7856 5.14618C13.7575 5.33636 13.6752 5.51441 13.5485 5.659L8.75252 11.139C8.65866 11.2464 8.54291 11.3325 8.41303 11.3915C8.28316 11.4505 8.14216 11.481 7.99952 11.481C7.85688 11.481 7.71589 11.4505 7.58601 11.3915C7.45614 11.3325 7.34038 11.2464 7.24652 11.139V11.14Z" fill="black" />
            </svg>
          </div>
        </div>
        <div class="input-box">
          <p class="label">
            Operating Location
          </p>
          <div class="new_input">
            <input v-model="operating_location" placeholder="eg. Agege, Oshodi, Lekki" type="text">
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
  data () {
    return {
      dropoffLocation: '',
      first_name: '',
      loading: false,
      last_name: '',
      gender: '',
      address: '',
      drop_location: '',
      operating_location: '',
      age: ''
    }
  },
  computed: {
    disabled () {
      return (
        this.first_name === '' ||
        this.last_name === '' ||
        this.age === '' ||
        this.gender === '' ||
        this.address === '' ||
        this.operating_location === '' ||
        this.drop_location === ''
      )
    }
  },
  created () {
    this.getDropofflist()
  },
  methods: {
    getDropofflist (val) {
      this.$axios.$get('/auth/get_drop_off_location', {
      }).then((response) => {
        this.dropoffLocation = response.data.location
        this.$store.commit('setDropoffLocation', this.dropoffLocation)
        // console.log(response)
      })
    },
    submit () {
      // this.$router.push(`/auth/register/verify-number?phone=${this.phone}`)
      this.loading = true
      this.$axios.$post('/auth/upload_personal_info', {
        firstname: this.first_name,
        lastname: this.last_name,
        age: this.age,
        gender: this.gender,
        address: this.address,
        dropoff: this.drop_location,
        operatingLocation: this.operating_location
      },
      {
        headers: {
          Authorization: `Bearer ${Cookies.get('token')}`
        }
      }
      ).then((response) => {
        this.loading = false
        console.log(response)
        this.$emit('back')
      }).catch((onrejected) => {
        console.log(onrejected)
        this.loading = false
        if (onrejected.error) {
          // this.$toast.error(onrejected.errorMsg)
        }
      })
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
