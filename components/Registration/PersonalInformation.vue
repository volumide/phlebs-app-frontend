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
            <input v-model="age" placeholder="e.g. 45" type="text">
          </div>
        </div>
        <div class="input-box">
          <p class="label">
            Proficiency
          </p>
          <div class="form-select">
            <select v-model="proficiency" required>
              <option value="">
                Select...
              </option>
              <option value="Nurse">
                Nurse
              </option>
              <option value="Med Lab Scientists">
                Med Lab Scientists
              </option>
              <option value="Science Lab Technician">
                Science Lab Technician
              </option>
              <option value="Phlebotomist">
                Phlebotomist
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
              <option value="Medplus, Obalende">
                Medplus, Obalende
              </option>
              <option value="Medplus, Ikoyi">
                Medplus, Ikoyi
              </option>
              <option value="Super Pharmacy, Ikota">
                Super Pharmacy, Ikota
              </option>
              <option value="The Crown Plus Pharmacy, Ogudu">
                The Crown Plus Pharmacy, Ogudu
              </option>
              <option value="Medplus, Ojoo">
                Medplus, Ojoo
              </option>
            </select>
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M7.24652 11.14L2.45052 5.658C1.88452 5.013 2.34452 4 3.20352 4H12.7955C12.9878 3.99984 13.176 4.05509 13.3376 4.15914C13.4993 4.26319 13.6275 4.41164 13.707 4.58669C13.7864 4.76175 13.8137 4.956 13.7856 5.14618C13.7575 5.33636 13.6752 5.51441 13.5485 5.659L8.75252 11.139C8.65866 11.2464 8.54291 11.3325 8.41303 11.3915C8.28316 11.4505 8.14216 11.481 7.99952 11.481C7.85688 11.481 7.71589 11.4505 7.58601 11.3915C7.45614 11.3325 7.34038 11.2464 7.24652 11.139V11.14Z" fill="black" />
            </svg>
          </div>
        </div>
        <div class="bottom_btn">
          <button class="trans_btn" @click="$emit('back')">
            Back
          </button>
          <button class="bg_btn" @click="$emit('proceed')">
            Save and Proceed
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      first_name: '',
      last_name: '',
      proficiency: '',
      gender: '',
      address: '',
      drop_location: '',
      age: ''
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
}
</style>
