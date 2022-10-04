<template>
  <div class="form_container come-up">
    <div class="form_inner">
      <p class="title">
        We want to Identify you!
      </p>
      <p class="sub_title">
        Upload the following means of Identification
      </p>
      <div class="form">
        <div class="image_box">
          <p class="label">
            Upload Profile Picture
          </p>
          <div class="user-image-container">
            <div class="user-image">
              <img :src="userImage === null ? altImage : userImage" alt="" @click="chooseFile">
              <!-- <img :src="require(`~${userImage === null ? altImage : userImage}`)" alt="" @click="chooseFile"> -->
            </div>
            <input
              id="formFileLg"
              ref="fileInput"
              class="select-image"
              type="file"
              name="image"
              accept="image/jpeg, image/png"
              @input="selectImgFile"
            >
            <div class="edit-icon">
              <Loader2 v-if="profileLoading" class="come-down" />
              <svg
                v-else
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clip-path="url(#clip0_262_5442)">
                  <path d="M15.8333 3.33333H15.41L13.59 0.973333C13.3554 0.671505 13.0553 0.427014 12.7122 0.258378C12.3692 0.0897429 11.9923 0.00138587 11.61 0L8.39 0C8.00775 0.00138587 7.63082 0.0897429 7.28778 0.258378C6.94473 0.427014 6.64456 0.671505 6.41 0.973333L4.59 3.33333H4.16667C3.062 3.33466 2.00296 3.77407 1.22185 4.55518C0.440735 5.3363 0.00132321 6.39534 0 7.5L0 15.8333C0.00132321 16.938 0.440735 17.997 1.22185 18.7782C2.00296 19.5593 3.062 19.9987 4.16667 20H15.8333C16.938 19.9987 17.997 19.5593 18.7782 18.7782C19.5593 17.997 19.9987 16.938 20 15.8333V7.5C19.9987 6.39534 19.5593 5.3363 18.7782 4.55518C17.997 3.77407 16.938 3.33466 15.8333 3.33333ZM7.73 1.99167C7.80806 1.89088 7.90808 1.80922 8.02244 1.7529C8.13681 1.69658 8.26252 1.66709 8.39 1.66667H11.61C11.7375 1.66721 11.8631 1.69676 11.9775 1.75307C12.0918 1.80938 12.1919 1.89097 12.27 1.99167L13.305 3.33333H6.695L7.73 1.99167ZM18.3333 15.8333C18.3333 16.4964 18.0699 17.1323 17.6011 17.6011C17.1323 18.0699 16.4964 18.3333 15.8333 18.3333H4.16667C3.50363 18.3333 2.86774 18.0699 2.3989 17.6011C1.93006 17.1323 1.66667 16.4964 1.66667 15.8333V7.5C1.66667 6.83696 1.93006 6.20107 2.3989 5.73223C2.86774 5.26339 3.50363 5 4.16667 5H15.8333C16.4964 5 17.1323 5.26339 17.6011 5.73223C18.0699 6.20107 18.3333 6.83696 18.3333 7.5V15.8333Z" fill="#00295D" />
                  <path d="M10 6.66666C9.0111 6.66666 8.0444 6.95991 7.22215 7.50932C6.39991 8.05872 5.75904 8.83962 5.3806 9.75325C5.00217 10.6669 4.90315 11.6722 5.09608 12.6421C5.289 13.612 5.76521 14.5029 6.46447 15.2022C7.16373 15.9015 8.05465 16.3777 9.02455 16.5706C9.99446 16.7635 10.9998 16.6645 11.9134 16.2861C12.827 15.9076 13.6079 15.2668 14.1573 14.4445C14.7068 13.6223 15 12.6556 15 11.6667C14.9987 10.341 14.4715 9.06999 13.5341 8.13259C12.5967 7.1952 11.3257 6.66799 10 6.66666ZM10 15C9.34073 15 8.69627 14.8045 8.1481 14.4382C7.59994 14.072 7.1727 13.5514 6.9204 12.9423C6.66811 12.3332 6.6021 11.663 6.73072 11.0164C6.85934 10.3698 7.1768 9.77582 7.64298 9.30964C8.10915 8.84347 8.7031 8.526 9.3497 8.39738C9.9963 8.26876 10.6665 8.33477 11.2756 8.58707C11.8847 8.83936 12.4053 9.2666 12.7716 9.81476C13.1378 10.3629 13.3333 11.0074 13.3333 11.6667C13.3333 12.5507 12.9821 13.3986 12.357 14.0237C11.7319 14.6488 10.8841 15 10 15Z" fill="#00295D" />
                </g>
                <defs>
                  <clipPath id="clip0_262_5442">
                    <rect width="20" height="20" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </div>
          </div>
        </div>
        <div class="input-box">
          <p class="label">
            Means of Identification
          </p>
          <div class="form-select">
            <select v-model="means_identification" required>
              <option value="null">
                Select...
              </option>
              <option value="National Identity Card">
                National Identity Card
              </option>
              <option value="International Passport">
                International Passport
              </option>
              <option value="Driver’s License">
                Driver’s License
              </option>
              <option value="Permanent Voters Card">
                Permanent Voters Card
              </option>
            </select>
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M7.24652 11.14L2.45052 5.658C1.88452 5.013 2.34452 4 3.20352 4H12.7955C12.9878 3.99984 13.176 4.05509 13.3376 4.15914C13.4993 4.26319 13.6275 4.41164 13.707 4.58669C13.7864 4.76175 13.8137 4.956 13.7856 5.14618C13.7575 5.33636 13.6752 5.51441 13.5485 5.659L8.75252 11.139C8.65866 11.2464 8.54291 11.3325 8.41303 11.3915C8.28316 11.4505 8.14216 11.481 7.99952 11.481C7.85688 11.481 7.71589 11.4505 7.58601 11.3915C7.45614 11.3325 7.34038 11.2464 7.24652 11.139V11.14Z" fill="black" />
            </svg>
          </div>
        </div>
        <div class="input-box">
          <p class="label">
            Identification Number
          </p>
          <div class="new_input">
            <input v-model="id_num" placeholder="Enter Identifcation Number" type="number">
          </div>
        </div>
        <div class="input-box">
          <p class="label">
            Upload ID
          </p>
          <label class="upload-container">
            <input
              id="image-upload"
              type="file"
              name="file"
              required
              accept="image/jpeg, image/png"
              @change="selectIDfile"
            >
            <div class="upload-name">
              <p ref="IDtitle" class="upload-title">My ID.jpg</p>
              <input
                v-if="inputIDfile !== null"
                v-model="inputIDfile.name"
                class="selected-file"
                type="text"
                readonly
                required
              >
            </div>
            <div v-if="idSaved" class="upload-btn">
              <p class="come-down">
                Saved
              </p>
              <svg
                class="come-down"
                width="20"
                height="20"
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M18.5 10.5L7.5 21.5L2 16.0002" stroke="#00295D" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M30 10.5L19 21.5L16.0784 18.5785" stroke="#00295D" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
              </svg>
            </div>
            <div v-else class="upload-btn">
              <p>Upload File</p>
              <Loader2 v-if="idLoading" class="come-down" />
              <svg
                v-else
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clip-path="url(#clip0_13_548)">
                  <path d="M15.3336 6.14916C15.1828 6.10616 15.0452 6.02615 14.9333 5.91641C14.8214 5.80667 14.7387 5.67069 14.6927 5.52083C14.4375 4.65586 14.0095 3.85167 13.4345 3.15691C12.8596 2.46214 12.1496 1.89126 11.3477 1.47879C10.5457 1.06633 9.66836 0.820865 8.76879 0.757253C7.86921 0.693641 6.96608 0.813204 6.11405 1.10871C5.26201 1.40421 4.47879 1.86951 3.81178 2.47645C3.14476 3.08339 2.60783 3.81935 2.23345 4.63979C1.85908 5.46023 1.65506 6.3481 1.63374 7.24967C1.61241 8.15124 1.77423 9.04777 2.10939 9.88499C2.18639 10.0612 2.20296 10.2579 2.15654 10.4445C2.11012 10.6311 2.0033 10.7971 1.85272 10.9167C1.18916 11.4092 0.671095 12.0719 0.35335 12.8347C0.0356047 13.5975 -0.0699962 14.4321 0.047724 15.25C0.231435 16.3557 0.805494 17.359 1.66571 18.0776C2.52592 18.7962 3.61528 19.1826 4.73606 19.1667H9.16689C9.38791 19.1667 9.59987 19.0789 9.75615 18.9226C9.91243 18.7663 10.0002 18.5543 10.0002 18.3333C10.0002 18.1123 9.91243 17.9004 9.75615 17.7441C9.59987 17.5878 9.38791 17.5 9.16689 17.5H4.73606C4.01629 17.5175 3.31408 17.2765 2.75669 16.8208C2.1993 16.365 1.82362 15.7247 1.69772 15.0158C1.61789 14.4948 1.68259 13.9618 1.88478 13.475C2.08698 12.9882 2.4189 12.5662 2.84439 12.255C3.29133 11.921 3.61463 11.4479 3.7635 10.9102C3.91238 10.3724 3.8784 9.80049 3.66689 9.28416C3.24868 8.17975 3.22718 6.96434 3.60606 5.84583C3.90872 4.96964 4.45071 4.19572 5.17063 3.61175C5.89055 3.02777 6.75962 2.65708 7.67939 2.54166C7.89274 2.51419 8.10762 2.50028 8.32272 2.49999C9.40027 2.49644 10.45 2.84202 11.3147 3.48499C12.1794 4.12795 12.8126 5.03372 13.1194 6.06666C13.2392 6.4603 13.455 6.81797 13.7474 7.10746C14.0398 7.39694 14.3996 7.60916 14.7944 7.72499C15.7606 8.01076 16.6165 8.58489 17.2475 9.37051C17.8784 10.1561 18.2543 11.1157 18.3248 12.1209C18.3953 13.126 18.1571 14.1287 17.642 14.9948C17.127 15.8608 16.3596 16.5488 15.4427 16.9667C15.307 17.0361 15.1936 17.1424 15.1153 17.2732C15.0371 17.404 14.9972 17.5542 15.0002 17.7067C14.9986 17.8446 15.0316 17.9806 15.0963 18.1024C15.161 18.2242 15.2552 18.3279 15.3703 18.4038C15.4855 18.4797 15.6178 18.5254 15.7553 18.5368C15.8927 18.5483 16.0308 18.525 16.1569 18.4692C19.6019 16.8133 21.4736 12.4575 18.5569 8.24916C17.7538 7.20159 16.6163 6.46051 15.3336 6.14916Z" fill="#00295D" />
                  <path d="M15.589 13.9225C15.7452 13.7662 15.833 13.5543 15.833 13.3333C15.833 13.1124 15.7452 12.9004 15.589 12.7442L14.2674 11.4225C13.7985 10.9538 13.1628 10.6905 12.4999 10.6905C11.8369 10.6905 11.2012 10.9538 10.7324 11.4225L9.41068 12.7442C9.25889 12.9013 9.17489 13.1118 9.17679 13.3303C9.17869 13.5488 9.26633 13.7578 9.42084 13.9124C9.57534 14.0669 9.78435 14.1545 10.0029 14.1564C10.2213 14.1583 10.4318 14.0743 10.589 13.9225L11.6665 12.845V19.1667C11.6665 19.3877 11.7543 19.5996 11.9106 19.7559C12.0669 19.9122 12.2788 20 12.4999 20C12.7209 20 12.9328 19.9122 13.0891 19.7559C13.2454 19.5996 13.3332 19.3877 13.3332 19.1667V12.845L14.4107 13.9225C14.567 14.0787 14.7789 14.1665 14.9999 14.1665C15.2208 14.1665 15.4327 14.0787 15.589 13.9225Z" fill="#00295D" />
                </g>
                <defs>
                  <clipPath id="clip0_13_548">
                    <rect width="20" height="20" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </div>
          </label>
          <p class="note">
            File Format should be in PDF or .doc format
          </p>
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
      idSaved: false,
      profileSaved: false,
      loading: false,
      profileLoading: false,
      idLoading: false,
      means_identification: null,
      id_num: '',
      inputIDfile: null,
      userImage: null,
      altImage: require('assets/images/no-image.png'),
      age: ''
    }
  },
  computed: {
    disabled () {
      return (
        this.means_identification === null ||
        this.id_num === '' ||
        this.inputIDfile === null ||
        this.userImage === null
      )
    }
  },
  created () {
    this.getDetails()
  },
  methods: {
    getDetails () {
      console.log(this.userDetails)
      const details = this.userDetails.profiles
      this.means_identification = details.identificationMeans
      this.id_num = details.identificationNumber
      this.userImage = details.profile_pics
      // this.inputLicencefile = details.practicing_license
      // this.inputSupportingfile = details.supporting_document
    },
    selectIDfile (event) {
      const IDfileId = event.target.files[0]
      this.inputIDfile = IDfileId
      this.$refs.IDtitle.style.display = 'none'
      this.uploadId()
    },
    chooseFile () {
      this.$refs.fileInput.click()
    },
    selectImgFile (event) {
      const fileId = event.target.files[0]
      this.selectedImage = fileId
      // this.selectedImage = this.$refs.fileInput.value
      const fileInput = this.$refs.fileInput
      const imgFile = fileInput.files
      this.uploadProfileImage()

      if (imgFile && imgFile[0]) {
        const reader = new FileReader()
        reader.onload = (e) => {
          this.userImage = e.target.result
        }
        reader.readAsDataURL(imgFile[0])
        this.$emit('fileInput', imgFile[0])
      }
    },
    submit () {
      // this.$emit('proceed')
      this.loading = true
      this.$axios.$post('/auth/profile', {
        identificationMeans: this.means_identification,
        identificationNumber: this.id_num
      },
      {
        headers: {
          Authorization: `Bearer ${Cookies.get('token')}`
        }
      }
      ).then((response) => {
        this.loading = false
        if (!response.error) {
          console.log(response)
          this.$emit('proceed')
        } else {
          console.log(response)
        }
      }).catch((err) => {
        const errorMsg = err
        console.log(errorMsg, 'error')
        this.loading = false
      })
    },
    uploadProfileImage () {
      // this.$emit('proceed')
      this.profileLoading = true
      const formdata = new FormData()
      formdata.append('image', this.selectedImage)
      this.$axios.$post('/auth/upload_profile_picture', formdata,
        {
          headers: {
            Authorization: `Bearer ${Cookies.get('token')}`
          }
        }
      ).then((response) => {
        this.profileLoading = false
        this.profileSaved = true
        setTimeout(() => {
          this.profileSaved = false
        }, 5000)
        console.log(response)
      }).catch((err) => {
        const errorMsg = err
        console.log(errorMsg, 'error')
        this.profileLoading = false
      })
    },
    uploadId () {
      // this.$emit('proceed')
      this.idLoading = true
      const formdata = new FormData()
      formdata.append('image', this.inputIDfile)
      this.$axios.$post('/auth/upload_profile_id', formdata,
        {
          headers: {
            Authorization: `Bearer ${Cookies.get('token')}`
          }
        }
      ).then((response) => {
        this.idLoading = false
        this.idSaved = true
        setTimeout(() => {
          this.idSaved = false
        }, 5000)
        console.log(response)
      }).catch((err) => {
        const errorMsg = err
        console.log(errorMsg, 'error')
        this.idLoading = false
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

.note {
  color: rgba(0, 0, 0, 0.284);
  font-size: 13px;
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

.image-section {
  margin-left: 100px;
  margin-top: 50px;
}

.image_box {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.user-image-container {
  margin-top: 20px;
  margin-bottom: 30px;
  position: relative;
  width: fit-content;
  height: fit-content;
}

.select-image {
  position: absolute;
  height: 10rem;
  width: 10rem;
  top: 0;
  z-index: 2;
  cursor: pointer;
  opacity: 0;
}

.user-image img {
  width: 7rem;
  height: 7rem;
  object-fit: cover;
  border: 10px solid rgba(15, 178, 243, 0.18);
  border-radius: 100%;
  cursor: pointer;
}

.edit-icon {
  width: 44px;
  height: 44px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  background-color: #fff;
  position: absolute;
  right: 0%;
  top: 60%;
  cursor: pointer;
  box-shadow: 0px 4px 20px rgba(0, 41, 93, 0.1);
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
