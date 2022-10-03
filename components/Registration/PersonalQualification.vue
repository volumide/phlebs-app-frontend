<template>
  <div class="form_container come-up">
    <div class="form_inner">
      <p class="title">
        Professional Qualification
      </p>
      <p class="sub_title">
        How qualified are you?
      </p>
      <div class="form">
        <div class="input-box">
          <p class="label">
            Proficiency
          </p>
          <div class="form-select">
            <select v-model="proficiency" required>
              <option value="null">
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
            Years of Expertise
          </p>
          <div class="new_input">
            <input v-model="years_expertise" placeholder="Your Years of Expertise" type="number">
          </div>
        </div>
        <div class="input-box">
          <p class="label">
            Upload CV
          </p>
          <label class="upload-container">
            <input
              id="image-upload"
              type="file"
              name="file"
              required
              accept="application/pdf, application/doc"
              @change="selectCVfile"
            >
            <div class="upload-name">
              <p ref="CVtitle" class="upload-title">My CV.jpg</p>
              <input
                v-if="inputCVfile !== null"
                v-model="inputCVfile.name"
                class="selected-file"
                type="text"
                readonly
                required
              >
            </div>
            <div v-if="cvSaved" class="upload-btn">
              <p class="come-down">Saved</p>
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
              <Loader2 v-if="cvLoading" class="come-down" />
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
        <div class="input-box">
          <p class="label">
            Practising License
          </p>
          <label class="upload-container">
            <input
              id="image-upload"
              type="file"
              name="file"
              required
              accept="image/jpeg, image/png"
              @change="selectLicencefile"
            >
            <div class="upload-name">
              <p ref="Licencetitle" class="upload-title">My Licence.jpg</p>
              <input
                v-if="inputLicencefile !== null"
                v-model="inputLicencefile.name"
                class="selected-file"
                type="text"
                readonly
                required
              >
            </div>
            <div v-if="licenseSaved" class="upload-btn">
              <p class="come-down">Saved</p>
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
              <Loader2 v-if="licenseLoading" class="come-down" />
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
            File Format should be in JPG or PNG format
          </p>
        </div>
        <div class="input-box">
          <p class="label">
            Any other supporting document or certificate (optional)
          </p>
          <label class="upload-container">
            <input
              id="image-upload"
              type="file"
              name="file"
              required
              accept="image/jpeg, image/png, application/pdf, application/doc"
              @change="selectSupportingfile"
            >
            <div class="upload-name">
              <p ref="Supportingtitle" class="upload-title">Other Document.jpg</p>
              <input
                v-if="inputSupportingfile !== null"
                v-model="inputSupportingfile.name"
                class="selected-file"
                type="text"
                readonly
                required
              >
            </div>
            <div v-if="supportSaved" class="upload-btn">
              <p class="come-down">Saved</p>
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
              <Loader2 v-if="supportLoading" class="come-down" />
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
            File Format can be in JPG, PNG, PDF and .doc format
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
      loading: false,
      cvLoading: false,
      licenseLoading: false,
      supportLoading: false,
      cvSaved: false,
      licenseSaved: false,
      supportSaved: false,
      proficiency: null,
      years_expertise: '',
      inputCVfile: null,
      inputLicencefile: null,
      inputSupportingfile: null
    }
  },
  computed: {
    disabled () {
      return (
        this.proficiency === '' ||
        this.years_expertise === '' ||
        this.inputCVfile === null ||
        this.inputLicencefile === null ||
        this.inputSupportingfile === null
      )
    }
  },
  created () {
    this.getDetails()
  },
  methods: {
    getDetails () {
      console.log(this.userDetails)
      const details = this.userDetails.ProfessionalQualification
      this.proficiency = details.proficiency
      this.years_expertise = details.yearsofexpertise
      // this.inputCVfile = details.cv
      // this.inputLicencefile = details.practicing_license
      // this.inputSupportingfile = details.supporting_document
    },
    selectCVfile (event) {
      const CVfileId = event.target.files[0]
      this.inputCVfile = CVfileId
      this.$refs.CVtitle.style.display = 'none'
      this.uploadCv()
    },
    selectLicencefile (event) {
      const LicencefileId = event.target.files[0]
      this.inputLicencefile = LicencefileId
      this.$refs.Licencetitle.style.display = 'none'
      this.uploadLicense()
    },
    selectSupportingfile (event) {
      const SupportingfileId = event.target.files[0]
      this.inputSupportingfile = SupportingfileId
      this.$refs.Supportingtitle.style.display = 'none'
      this.uploadSupportDoc()
    },
    submit () {
      // this.$emit('proceed')
      this.loading = true
      this.$axios.$post('/auth/upload_qualification', {
        proficiency: this.proficiency,
        yearsofexpertise: this.years_expertise
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
      })
    },
    uploadCv () {
      // this.$emit('proceed')
      this.cvLoading = true
      const formdata = new FormData()
      formdata.append('image', this.inputCVfile)
      this.$axios.$post('/auth/upload_cv', formdata,
        {
          headers: {
            Authorization: `Bearer ${Cookies.get('token')}`
          }
        }
      ).then((response) => {
        this.cvLoading = false
        this.cvSaved = true
        setTimeout(() => {
          this.cvSaved = false
        }, 3000)
        console.log(response)
      }).catch((err) => {
        const errorMsg = err
        console.log(errorMsg, 'error')
        this.cvLoading = false
      })
    },
    uploadLicense () {
      // this.$emit('proceed')
      this.licenseLoading = true
      const formdata = new FormData()
      formdata.append('image', this.inputLicencefile)
      this.$axios.$post('/auth/upload_license', formdata,
        {
          headers: {
            Authorization: `Bearer ${Cookies.get('token')}`
          }
        }
      ).then((response) => {
        this.licenseLoading = false
        this.licenseSaved = true
        setTimeout(() => {
          this.licenseSaved = false
        }, 3000)
        console.log(response)
      }).catch((err) => {
        const errorMsg = err
        console.log(errorMsg, 'error')
        this.licenseLoading = false
      })
    },
    uploadSupportDoc () {
      // this.$emit('proceed')
      this.supportLoading = true
      const formdata = new FormData()
      formdata.append('image', this.inputSupportingfile)
      this.$axios.$post('/auth/upload_supporting_document', formdata,
        {
          headers: {
            Authorization: `Bearer ${Cookies.get('token')}`
          }
        }
      ).then((response) => {
        this.supportLoading = false
        this.supportSaved = true
        setTimeout(() => {
          this.supportSaved = false
        }, 3000)
        console.log(response)
      }).catch((err) => {
        const errorMsg = err
        console.log(errorMsg, 'error')
        this.supportLoading = false
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
