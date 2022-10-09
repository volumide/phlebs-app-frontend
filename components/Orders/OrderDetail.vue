<template>
  <div class="detail_ctn">
    <div class="top_page come-down">
      <div class="back" @click="$router.go(-1)">
        <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M10.0629 6.40633L5.69343 10.786C5.31403 11.1676 5.10107 11.6839 5.10107 12.2221C5.10107 12.7602 5.31403 13.2765 5.69343 13.6582L10.0629 18.0378C10.2537 18.2275 10.5119 18.334 10.7809 18.334C11.05 18.334 11.3082 18.2275 11.499 18.0378C11.5944 17.9431 11.6702 17.8305 11.7219 17.7064C11.7736 17.5822 11.8003 17.4491 11.8003 17.3147C11.8003 17.1802 11.7736 17.0471 11.7219 16.923C11.6702 16.7988 11.5944 16.6862 11.499 16.5915L8.14806 13.2406H19.3518C19.6219 13.2406 19.881 13.1333 20.072 12.9423C20.263 12.7513 20.3703 12.4922 20.3703 12.2221C20.3703 11.9519 20.263 11.6929 20.072 11.5019C19.881 11.3109 19.6219 11.2035 19.3518 11.2035H8.14806L11.499 7.85262C11.6908 7.66218 11.7991 7.40335 11.8 7.13308C11.801 6.8628 11.6945 6.60321 11.5041 6.41142C11.3136 6.21963 11.0548 6.11134 10.7845 6.11039C10.5143 6.10943 10.2547 6.21589 10.0629 6.40633Z" fill="#325BD9" fill-opacity="0.5" />
        </svg>
        <p>Back</p>
      </div>
      <div v-if="successful" class="mobile_no_show">
        <AlertsSuccess :success-text="'Accepted order has been added to your To-do'" />
      </div>
      <div class="no_show">
        <div class="pagination">
          <svg width="24" height="24" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g opacity="0.5">
              <rect
                x="-0.5"
                y="0.5"
                width="29"
                height="29"
                rx="14.5"
                transform="matrix(-1 0 0 1 29 0)"
                fill="white"
                stroke="#00295D"
              />
              <path d="M12.445 12.9386L16.9075 8.47607C17.0897 8.295 17.3361 8.19336 17.5929 8.19336C17.8498 8.19336 18.0962 8.295 18.2783 8.47607C18.3695 8.56646 18.4418 8.67398 18.4911 8.79246C18.5405 8.91093 18.5659 9.03801 18.5659 9.16635C18.5659 9.2947 18.5405 9.42177 18.4911 9.54025C18.4418 9.65872 18.3695 9.76625 18.2783 9.85663L13.8061 14.3094C13.715 14.3998 13.6427 14.5073 13.5933 14.6258C13.5439 14.7443 13.5185 14.8713 13.5185 14.9997C13.5185 15.128 13.5439 15.2551 13.5933 15.3736C13.6427 15.4921 13.715 15.5996 13.8061 15.69L18.2783 20.1427C18.4614 20.3245 18.5648 20.5716 18.5657 20.8296C18.5666 21.0876 18.465 21.3354 18.2832 21.5184C18.1014 21.7015 17.8543 21.8049 17.5964 21.8058C17.3384 21.8067 17.0906 21.7051 16.9075 21.5233L12.445 17.0608C11.8988 16.5139 11.592 15.7726 11.592 14.9997C11.592 14.2268 11.8988 13.4855 12.445 12.9386Z" fill="#00295D" />
              <path d="M12.445 12.9386L16.9075 8.47607C17.0897 8.295 17.3361 8.19336 17.5929 8.19336C17.8498 8.19336 18.0962 8.295 18.2783 8.47607C18.3695 8.56646 18.4418 8.67398 18.4911 8.79246C18.5405 8.91093 18.5659 9.03801 18.5659 9.16635C18.5659 9.2947 18.5405 9.42177 18.4911 9.54025C18.4418 9.65872 18.3695 9.76625 18.2783 9.85663L13.8061 14.3094C13.715 14.3998 13.6427 14.5073 13.5933 14.6258C13.5439 14.7443 13.5185 14.8713 13.5185 14.9997C13.5185 15.128 13.5439 15.2551 13.5933 15.3736C13.6427 15.4921 13.715 15.5996 13.8061 15.69L18.2783 20.1427C18.4614 20.3245 18.5648 20.5716 18.5657 20.8296C18.5666 21.0876 18.465 21.3354 18.2832 21.5184C18.1014 21.7015 17.8543 21.8049 17.5964 21.8058C17.3384 21.8067 17.0906 21.7051 16.9075 21.5233L12.445 17.0608C11.8988 16.5139 11.592 15.7726 11.592 14.9997C11.592 14.2268 11.8988 13.4855 12.445 12.9386Z" fill="#00295D" />
            </g>
          </svg>
          <svg width="24" height="24" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="30" height="30" rx="15" fill="#00295D" />
            <path d="M18.305 12.9386L13.8425 8.47607C13.6603 8.295 13.4139 8.19336 13.1571 8.19336C12.9002 8.19336 12.6538 8.295 12.4717 8.47607C12.3805 8.56646 12.3082 8.67398 12.2589 8.79246C12.2095 8.91093 12.1841 9.03801 12.1841 9.16635C12.1841 9.2947 12.2095 9.42177 12.2589 9.54025C12.3082 9.65872 12.3805 9.76625 12.4717 9.85663L16.9439 14.3094C17.035 14.3998 17.1073 14.5073 17.1567 14.6258C17.2061 14.7443 17.2315 14.8713 17.2315 14.9997C17.2315 15.128 17.2061 15.2551 17.1567 15.3736C17.1073 15.4921 17.035 15.5996 16.9439 15.69L12.4717 20.1427C12.2886 20.3245 12.1852 20.5716 12.1843 20.8296C12.1834 21.0876 12.285 21.3354 12.4668 21.5184C12.6486 21.7015 12.8957 21.8049 13.1536 21.8058C13.4116 21.8067 13.6594 21.7051 13.8425 21.5233L18.305 17.0608C18.8512 16.5139 19.158 15.7726 19.158 14.9997C19.158 14.2268 18.8512 13.4855 18.305 12.9386Z" fill="white" />
            <path d="M18.305 12.9386L13.8425 8.47607C13.6603 8.295 13.4139 8.19336 13.1571 8.19336C12.9002 8.19336 12.6538 8.295 12.4717 8.47607C12.3805 8.56646 12.3082 8.67398 12.2589 8.79246C12.2095 8.91093 12.1841 9.03801 12.1841 9.16635C12.1841 9.2947 12.2095 9.42177 12.2589 9.54025C12.3082 9.65872 12.3805 9.76625 12.4717 9.85663L16.9439 14.3094C17.035 14.3998 17.1073 14.5073 17.1567 14.6258C17.2061 14.7443 17.2315 14.8713 17.2315 14.9997C17.2315 15.128 17.2061 15.2551 17.1567 15.3736C17.1073 15.4921 17.035 15.5996 16.9439 15.69L12.4717 20.1427C12.2886 20.3245 12.1852 20.5716 12.1843 20.8296C12.1834 21.0876 12.285 21.3354 12.4668 21.5184C12.6486 21.7015 12.8957 21.8049 13.1536 21.8058C13.4116 21.8067 13.6594 21.7051 13.8425 21.5233L18.305 17.0608C18.8512 16.5139 19.158 15.7726 19.158 14.9997C19.158 14.2268 18.8512 13.4855 18.305 12.9386Z" fill="white" />
          </svg>
        </div>
      </div>
    </div>
    <div class="box">
      <div v-if="successful" class="no_show">
        <AlertsSuccess :success-text="'Accepted order has been added to your To-do'" />
      </div>
      <div class="mobile_no_show">
        <div class="top">
          <p class="box_name">
            {{ boxName }}
          </p>
          <div class="pagination">
            <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g opacity="0.5">
                <rect
                  x="-0.5"
                  y="0.5"
                  width="29"
                  height="29"
                  rx="14.5"
                  transform="matrix(-1 0 0 1 29 0)"
                  fill="white"
                  stroke="#00295D"
                />
                <path d="M12.445 12.9386L16.9075 8.47607C17.0897 8.295 17.3361 8.19336 17.5929 8.19336C17.8498 8.19336 18.0962 8.295 18.2783 8.47607C18.3695 8.56646 18.4418 8.67398 18.4911 8.79246C18.5405 8.91093 18.5659 9.03801 18.5659 9.16635C18.5659 9.2947 18.5405 9.42177 18.4911 9.54025C18.4418 9.65872 18.3695 9.76625 18.2783 9.85663L13.8061 14.3094C13.715 14.3998 13.6427 14.5073 13.5933 14.6258C13.5439 14.7443 13.5185 14.8713 13.5185 14.9997C13.5185 15.128 13.5439 15.2551 13.5933 15.3736C13.6427 15.4921 13.715 15.5996 13.8061 15.69L18.2783 20.1427C18.4614 20.3245 18.5648 20.5716 18.5657 20.8296C18.5666 21.0876 18.465 21.3354 18.2832 21.5184C18.1014 21.7015 17.8543 21.8049 17.5964 21.8058C17.3384 21.8067 17.0906 21.7051 16.9075 21.5233L12.445 17.0608C11.8988 16.5139 11.592 15.7726 11.592 14.9997C11.592 14.2268 11.8988 13.4855 12.445 12.9386Z" fill="#00295D" />
                <path d="M12.445 12.9386L16.9075 8.47607C17.0897 8.295 17.3361 8.19336 17.5929 8.19336C17.8498 8.19336 18.0962 8.295 18.2783 8.47607C18.3695 8.56646 18.4418 8.67398 18.4911 8.79246C18.5405 8.91093 18.5659 9.03801 18.5659 9.16635C18.5659 9.2947 18.5405 9.42177 18.4911 9.54025C18.4418 9.65872 18.3695 9.76625 18.2783 9.85663L13.8061 14.3094C13.715 14.3998 13.6427 14.5073 13.5933 14.6258C13.5439 14.7443 13.5185 14.8713 13.5185 14.9997C13.5185 15.128 13.5439 15.2551 13.5933 15.3736C13.6427 15.4921 13.715 15.5996 13.8061 15.69L18.2783 20.1427C18.4614 20.3245 18.5648 20.5716 18.5657 20.8296C18.5666 21.0876 18.465 21.3354 18.2832 21.5184C18.1014 21.7015 17.8543 21.8049 17.5964 21.8058C17.3384 21.8067 17.0906 21.7051 16.9075 21.5233L12.445 17.0608C11.8988 16.5139 11.592 15.7726 11.592 14.9997C11.592 14.2268 11.8988 13.4855 12.445 12.9386Z" fill="#00295D" />
              </g>
            </svg>
            <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect width="30" height="30" rx="15" fill="#00295D" />
              <path d="M18.305 12.9386L13.8425 8.47607C13.6603 8.295 13.4139 8.19336 13.1571 8.19336C12.9002 8.19336 12.6538 8.295 12.4717 8.47607C12.3805 8.56646 12.3082 8.67398 12.2589 8.79246C12.2095 8.91093 12.1841 9.03801 12.1841 9.16635C12.1841 9.2947 12.2095 9.42177 12.2589 9.54025C12.3082 9.65872 12.3805 9.76625 12.4717 9.85663L16.9439 14.3094C17.035 14.3998 17.1073 14.5073 17.1567 14.6258C17.2061 14.7443 17.2315 14.8713 17.2315 14.9997C17.2315 15.128 17.2061 15.2551 17.1567 15.3736C17.1073 15.4921 17.035 15.5996 16.9439 15.69L12.4717 20.1427C12.2886 20.3245 12.1852 20.5716 12.1843 20.8296C12.1834 21.0876 12.285 21.3354 12.4668 21.5184C12.6486 21.7015 12.8957 21.8049 13.1536 21.8058C13.4116 21.8067 13.6594 21.7051 13.8425 21.5233L18.305 17.0608C18.8512 16.5139 19.158 15.7726 19.158 14.9997C19.158 14.2268 18.8512 13.4855 18.305 12.9386Z" fill="white" />
              <path d="M18.305 12.9386L13.8425 8.47607C13.6603 8.295 13.4139 8.19336 13.1571 8.19336C12.9002 8.19336 12.6538 8.295 12.4717 8.47607C12.3805 8.56646 12.3082 8.67398 12.2589 8.79246C12.2095 8.91093 12.1841 9.03801 12.1841 9.16635C12.1841 9.2947 12.2095 9.42177 12.2589 9.54025C12.3082 9.65872 12.3805 9.76625 12.4717 9.85663L16.9439 14.3094C17.035 14.3998 17.1073 14.5073 17.1567 14.6258C17.2061 14.7443 17.2315 14.8713 17.2315 14.9997C17.2315 15.128 17.2061 15.2551 17.1567 15.3736C17.1073 15.4921 17.035 15.5996 16.9439 15.69L12.4717 20.1427C12.2886 20.3245 12.1852 20.5716 12.1843 20.8296C12.1834 21.0876 12.285 21.3354 12.4668 21.5184C12.6486 21.7015 12.8957 21.8049 13.1536 21.8058C13.4116 21.8067 13.6594 21.7051 13.8425 21.5233L18.305 17.0608C18.8512 16.5139 19.158 15.7726 19.158 14.9997C19.158 14.2268 18.8512 13.4855 18.305 12.9386Z" fill="white" />
            </svg>
          </div>
        </div>
      </div>
      <div class="box_details_ctn come-down">
        <div class="box_details">
          <div class="box_details_icon">
            <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect width="50" height="50" rx="8" fill="#2A4EBC" />
              <g clip-path="url(#clip0_652_8340)">
                <path d="M25 12.5C22.5277 12.5 20.111 13.2331 18.0554 14.6066C15.9998 15.9801 14.3976 17.9324 13.4515 20.2165C12.5054 22.5005 12.2579 25.0139 12.7402 27.4386C13.2225 29.8634 14.413 32.0907 16.1612 33.8388C17.9093 35.587 20.1366 36.7775 22.5614 37.2598C24.9861 37.7421 27.4995 37.4946 29.7836 36.5485C32.0676 35.6024 34.0199 34.0002 35.3934 31.9446C36.7669 29.889 37.5 27.4723 37.5 25C37.4964 21.6859 36.1783 18.5086 33.8349 16.1651C31.4915 13.8217 28.3141 12.5036 25 12.5V12.5ZM25 27.0833C24.5418 27.0849 24.0959 26.9349 23.7318 26.6566C23.3677 26.3784 23.1059 25.9876 22.987 25.5451C22.8681 25.1025 22.8989 24.6331 23.0746 24.2099C23.2503 23.7867 23.561 23.4335 23.9583 23.2052V19.7917C23.9583 19.5154 24.0681 19.2504 24.2634 19.0551C24.4588 18.8597 24.7237 18.75 25 18.75C25.2763 18.75 25.5412 18.8597 25.7366 19.0551C25.9319 19.2504 26.0417 19.5154 26.0417 19.7917V23.2052C26.439 23.4335 26.7497 23.7867 26.9254 24.2099C27.1011 24.6331 27.1319 25.1025 27.013 25.5451C26.8941 25.9876 26.6323 26.3784 26.2682 26.6566C25.9041 26.9349 25.4582 27.0849 25 27.0833V27.0833Z" fill="#FFFFFC" />
              </g>
              <defs>
                <clipPath id="clip0_652_8340">
                  <rect width="25" height="25" fill="white" transform="translate(12.5 12.5)" />
                </clipPath>
              </defs>
            </svg>
          </div>
          <div>
            <p class="box_details_text">
              Collection Time
            </p>
            <p class="box_details_subtext">
              {{ detailsData.collectionTime }}
            </p>
          </div>
        </div>
        <div class="box_details">
          <div class="box_details_icon">
            <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect width="50" height="50" rx="8" fill="#108AD7" />
              <path d="M34.4745 28.5116C33.8731 27.9393 33.0743 27.6207 32.2441 27.6219C31.4139 27.623 30.616 27.9439 30.0162 28.5178L28.0308 30.1908C26.4097 29.5197 24.9372 28.5348 23.698 27.2927C22.4588 26.0507 21.4773 24.5759 20.8099 22.9533L22.4766 20.9741C23.0506 20.3742 23.3714 19.5764 23.3726 18.7462C23.3738 17.916 23.0551 17.1172 22.4829 16.5158C22.4829 16.5158 20.5537 14.0105 20.5224 13.9772C19.9276 13.3792 19.1215 13.0389 18.2781 13.03C17.4347 13.021 16.6215 13.344 16.0141 13.9293L14.8172 14.971C6.77557 23.522 27.5256 44.2814 36.0672 36.1168L37.0172 35.0241C37.6209 34.4188 37.9599 33.5988 37.9599 32.7439C37.9599 31.889 37.6209 31.069 37.0172 30.4637C36.9829 30.4366 34.4745 28.5074 34.4745 28.5074V28.5116Z" fill="white" />
            </svg>
          </div>
          <div>
            <p class="box_details_text">
              Phone Number
            </p>
            <p class="box_details_subtext">
              {{ detailsData.phone }}
            </p>
          </div>
        </div>
        <div class="box_details diff_width">
          <div class="box_details_icon">
            <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect width="50" height="50" rx="8" fill="#0FB2F3" />
              <g clip-path="url(#clip0_652_8349)">
                <path d="M12 21.3333V20.2917C12 17.4198 14.3365 15.0833 17.2083 15.0833H18.25V14.0417C18.25 13.4667 18.7156 13 19.2917 13C19.8677 13 20.3333 13.4667 20.3333 14.0417V15.0833H28.6667V14.0417C28.6667 13.4667 29.1323 13 29.7083 13C30.2844 13 30.75 13.4667 30.75 14.0417V15.0833H31.7917C34.6635 15.0833 37 17.4198 37 20.2917V21.3333H12ZM37 23.4167V32.7917C37 35.6635 34.6635 38 31.7917 38H17.2083C14.3365 38 12 35.6635 12 32.7917V23.4167H37ZM30.575 26.7C30.175 26.2865 29.5167 26.274 29.1021 26.6729L24.15 31.4458C23.7583 31.8375 23.101 31.8667 22.651 31.4187L20.2781 29.2135C19.8583 28.8229 19.2 28.8448 18.8062 29.2677C18.4146 29.6885 18.4385 30.3479 18.8604 30.7396L21.2063 32.9187C21.7958 33.5094 22.5812 33.8344 23.4156 33.8344C24.25 33.8344 25.0365 33.5094 25.6115 32.9323L30.549 28.174C30.9625 27.775 30.975 27.1146 30.575 26.701V26.7Z" fill="white" />
              </g>
              <defs>
                <clipPath id="clip0_652_8349">
                  <rect width="25" height="25" fill="white" transform="translate(12 13)" />
                </clipPath>
              </defs>
            </svg>
          </div>
          <div>
            <p class="box_details_text">
              Collection Date
            </p>
            <p class="box_details_subtext">
              {{ detailsData.collectionDate }}
            </p>
          </div>
        </div>
      </div>
      <div class="patient_box slide-in-from-left">
        <p class="patient_title">
          Patient Information
        </p>
        <div class="patient_inner">
          <div class="patient_image">
            <img :src="detailsData.avatar" alt="">
          </div>
          <div class="patient_details">
            <p class="patient_name">
              {{ detailsData.fullname }}
            </p>
            <div class="gender_age">
              <p class="age">
                {{ detailsData.age }}
              </p>
              <svg width="6" height="6" viewBox="0 0 6 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="3" cy="3" r="3" fill="black" />
              </svg>
              <p class="gender">
                {{ detailsData.gender }}
              </p>
            </div>
          </div>
        </div>
      </div>
      <div class="patient_box slide-in-from-left">
        <p class="patient_title">
          Collection Address
        </p>
        <p class="address_text">
          {{ detailsData.cAddress }}
        </p>
      </div>
      <div class="patient_box slide-in-from-left">
        <p class="test_title">
          Tests Information
        </p>
        <div class="test_inner">
          <div>
            <p class="test_text">
              Order No
            </p>
            <p class="test_subtext">
              {{ detailsData.orderNo }}
            </p>
          </div>
          <div>
            <p class="test_text">
              Test to be Taken
            </p>
            <p class="test_subtext">
              {{ detailsData.testAddress }}
            </p>
          </div>
          <div>
            <p class="test_text">
              Sample Required
            </p>
            <p class="test_subtext">
              {{ detailsData.sample }}
            </p>
          </div>
        </div>
      </div>
      <div v-show="boxName === 'To-do' || boxName === 'New-orders'" class="btns come-down">
        <div class="bottom_btn">
          <button class="trans_btn" @click="dismissOpen = true">
            Dismiss Order
          </button>
          <button v-if="boxName === 'To-do'" class="bg_btn" @click="confirmOpen = true">
            Complete Order
          </button>
          <button v-if="boxName === 'New-orders'" class="bg_btn" @click="acceptOrder = true">
            Accept Order
          </button>
        </div>
      </div>
    </div>
    <ModalsConfirmationModal
      v-if="confirmOpen"
      :modal-head="'Complete Order'"
      :modal-text="'Completing this order implies you’ve collected the samples from the patient and you’ve been able to submit samples to the drop-off location.'"
      :trans-btn="'No, Go Back'"
      :bg-btn="'Yes, Complete Order'"
      @close-modal="confirmOpen = false"
      @bg-action="openConfirmOrder()"
      @trans-action="confirmOpen = false"
    />
    <ModalsConfirmationModal
      v-if="acceptOrder"
      :modal-head="'Accept Order'"
      :modal-text="'Accepting this order implies you’ve collected the samples from the patient and you’ve been able to submit samples to the drop-off location.'"
      :trans-btn="'No, Go Back'"
      :bg-btn="'Yes, Accept Order'"
      :bg-loading="acceptLoading"
      @close-modal="acceptOrder = false"
      @bg-action="acceptOrderd()"
      @trans-action="acceptOrder = false"
    />
    <ModalsConfirmOrder
      v-if="confirmOrder"
      :box-name="boxName"
      @close-modal="confirmOrder = false"
      @bg-action="closeConfirmOrder()"
    />
    <ModalsConfirmationModal
      v-if="dismissOpen"
      :modal-head="'Are you sure you want to dismiss this order'"
      :modal-text="'Dismissing this order implies that you wont be able to Carry out this order.'"
      :trans-btn="'No, Go Back'"
      :bg-btn="'Yes, Dismiss'"
      @close-modal="dismissOpen = false"
      @bg-action="openDismissOrder()"
      @trans-action="dismissOpen = false"
    />
    <ModalsDismissOrder
      v-if="dismissOrder"
      @close-modal="dismissOrder = false"
      @bg-action="closeDismissOrder()"
    />
    <ModalsSuccessModal
      v-if="dismissedSuccessModal"
      :modal-image="require('assets/images/96673-success.gif')"
      :modal-text="'The order has been dismissed successfully'"
      :bg-btn="'Close'"
      @close-modal="$router.push('/today-order')"
      @bg-action="$router.push('/today-order')"
    />
    <ModalsSuccessModal
      v-if="confirmSuccessModal"
      :modal-image="require('assets/images/96673-success.gif')"
      :modal-text="confirmSuccessText"
      :modal-head="'Thank You!'"
      :bg-btn="'Close'"
      @close-modal="$router.push('/today-order')"
      @bg-action="$router.push('/today-order')"
    />
  </div>
</template>

<script>
import Cookies from 'js-cookie'
export default {
  props: {
    boxName: {
      type: String,
      default: () => ''
    },
    detailsData: {
      type: Object,
      default: () => {}
    }
  },
  data () {
    return {
      acceptLoading: false,
      successful: false,
      confirmSuccessText: '',
      dismissedSuccessModal: false,
      confirmSuccessModal: false,
      dismissOpen: false,
      confirmOpen: false,
      dismissOrder: false,
      acceptOrder: false,
      confirmOrder: false
    }
  },
  methods: {
    openDismissOrder () {
      this.dismissOpen = false
      this.dismissOrder = true
    },
    closeDismissOrder () {
      this.dismissOrder = false
      this.dismissedSuccessModal = true
    },
    openConfirmOrder () {
      this.confirmOpen = false
      this.confirmOrder = true
    },
    closeConfirmOrder () {
      this.confirmOrder = false
      this.confirmSuccessModal = true
      this.confirmSuccessText = 'The order has been submitted and completed successfully'
    },
    acceptOrderd () {
      this.acceptLoading = true
      const id = this.$route.query.id
      this.$axios.$get(`orders/accept/order/${id}`,
        {
          headers: {
            Authorization: `Bearer ${Cookies.get('token')}`
          }
        }
      ).then((response) => {
        this.acceptLoading = false
        console.log(response)
        if (!response.error) {
          this.acceptOrder = false
          this.confirmSuccessModal = true
          this.confirmSuccessText = 'The order has been accepted and added to to-do successfully'
        } else {
          this.error = true
          this.errorText = response.errorMsg
        }
      })
    }
  }
}
</script>

<style scoped>
.detail_ctn {
  width: 100%;
}

.top_page {
  display: flex;
  align-items: center;
  justify-content: space-between;
  transition: all 0.3s ease-out;
}
.back {
  display: flex;
  align-items: center;
  gap: 5px;
  cursor: pointer;
}

.back p {
  color: rgba(0, 0, 0, 0.500);
  font-size: 16px;
}

.box {
  width: 100%;
  background-color: #FFFFFF;
  border: 1px solid rgba(0, 41, 93, 0.1);
  border-radius: 10px;
  padding: 2vh 1.5vw;
  margin-top: 1vh;
}

.top {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 3.5vh;
}

.box_name {
  color: var(--primary-color);
  font-weight: 700;
  font-size: 24px;
}

.pagination {
  display: flex;
  /* gap: 1vw; */
}

.pagination svg {
  cursor: pointer;
  margin-left: 7px;
}

.box_details_ctn {
  display: flex;
  justify-content: space-between;
}

.box_details {
  display: flex;
  align-items: center;
  width: 32%;
  /* gap: 10px; */
  padding: 1vh 1vw;
  background: #F0F7FE;
  border-radius: 10px;
}

.box_details_icon {
  margin-right: 10px;
}

.box_details_text {
  color: rgba(0, 0, 0, 0.5);
  margin-bottom: 5px;
}

.box_details_subtext {
  font-weight: 700;
}

.patient_box {
  background-color: #F0F7FE;
  border: 1px solid rgba(0, 41, 93, 0.04);
  border-radius: 5px;
  margin-top: 3vh;
  padding: 2vh 2vw;
}

.patient_title {
  color: rgba(0, 0, 0, 0.5);
  font-weight: 700;
  margin-bottom: 1vw;
}

.patient_inner {
  display: flex;
  align-items: center;
  gap: 1.5vw;
}

.patient_image img {
  width: 70px;
  height: 70px;
  border-radius: 50%;
}

.patient_details {
  display: flex;
  align-items: center;
  gap: 1.5vw;
}

.patient_name {
  color: black;
  font-weight: 700;
  font-size: 17px;
}

.gender_age {
  display: flex;
  align-items: center;
  /* gap: 1vw; */
}

.gender_age svg {
  margin: 0 5px;
}

.address_text {
  font-weight: 500;
}

.test_title {
  font-weight: 700;
  font-size: 18px;
  margin-bottom: 1.5vh;
}

.test_text {
  color: rgba(0, 0, 0, 0.5);
  font-weight: 700;
  margin-bottom: 0.5vw;
}

.test_inner {
  display: flex;
  justify-content: space-between;
}

.btns {
  display: flex;
  justify-content: flex-end;
}

.bottom_btn {
  display: flex;
  justify-content: space-between;
  margin-top: 6vh;
  width: 50%;
}

.trans_btn {
  width: 48%;
}

.bg_btn {
  width: 48%;
}

@media only screen and (max-width: 500px) {
  .top_page {
    margin-top: 2vh;
  }
  .back p {
    font-size: 13px;
  }

  .back svg {
    width: 20px;
    height: 20px;
  }

  .box {
    border: none;
  }

  .box_details_ctn {
    flex-wrap: wrap;
  }

  .box_details {
    flex-basis: 49%;
    padding: 2vh 2vw;
    margin-bottom: 2vh;
  }

  .diff_width {
    flex-basis: 70%;
  }

  .box_details_icon svg {
    width: 24px;
    height: 24px;
  }

  .patient_inner {
    gap: 0;
  }

  .patient_image img {
    width: 54px;
    height: 54px;
  }

  .patient_details {
    margin-left: 12px;
    flex-direction: column;
    align-items: flex-start;
  }

  .patient_title,
  .test_title {
    margin-bottom: 2vh;
  }

  .test_inner {
    flex-direction: column;
  }

  .test_inner div {
    margin-bottom: 2.5vh;
  }

  .test_text {
    margin-top: 1.5vh;
  }

  .bottom_btn {
    width: 100%;
  }
}
</style>
