<template>
  <div class="personal_ctn">
    <div class="inner come-down">
      <div class="lhs">
        <div>
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
              <Loader2 v-if="imageLoading" class="come-down" />
              <svg
                v-else
                width="16"
                height="16"
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
          <p class="name">
            David Emaye
          </p>
        </div>
      </div>
      <div class="rhs">
        <div v-if="success">
          <AlertsSuccess :success-text="successText" />
        </div>
        <div v-if="error">
          <AlertsError :error-text="errorText" />
        </div>
        <div v-if="error2">
          <AlertsError :error-text="errorText2" />
        </div>
        <p class="rhs_title">
          Change Password
        </p>
        <div class="rhs_inner">
          <div class="input-box">
            <p class="label">
              Current Password
            </p>
            <div class="new_input">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clip-path="url(#clip0_11_300)">
                  <path d="M15.8334 7.02V5.83333C15.8334 4.28624 15.2188 2.80251 14.1248 1.70854C13.0308 0.614582 11.5471 0 10 0C8.45292 0 6.96919 0.614582 5.87523 1.70854C4.78127 2.80251 4.16669 4.28624 4.16669 5.83333V7.02C3.42449 7.34392 2.79276 7.8771 2.34877 8.55434C1.90477 9.23158 1.66775 10.0235 1.66669 10.8333V15.8333C1.66801 16.938 2.10742 17.997 2.88854 18.7782C3.66965 19.5593 4.72869 19.9987 5.83335 20H14.1667C15.2713 19.9987 16.3304 19.5593 17.1115 18.7782C17.8926 17.997 18.332 16.938 18.3334 15.8333V10.8333C18.3323 10.0235 18.0953 9.23158 17.6513 8.55434C17.2073 7.8771 16.5756 7.34392 15.8334 7.02ZM5.83335 5.83333C5.83335 4.72826 6.27234 3.66846 7.05374 2.88705C7.83514 2.10565 8.89495 1.66667 10 1.66667C11.1051 1.66667 12.1649 2.10565 12.9463 2.88705C13.7277 3.66846 14.1667 4.72826 14.1667 5.83333V6.66667H5.83335V5.83333ZM16.6667 15.8333C16.6667 16.4964 16.4033 17.1323 15.9345 17.6011C15.4656 18.0699 14.8297 18.3333 14.1667 18.3333H5.83335C5.17031 18.3333 4.53443 18.0699 4.06559 17.6011C3.59675 17.1323 3.33335 16.4964 3.33335 15.8333V10.8333C3.33335 10.1703 3.59675 9.53441 4.06559 9.06557C4.53443 8.59672 5.17031 8.33333 5.83335 8.33333H14.1667C14.8297 8.33333 15.4656 8.59672 15.9345 9.06557C16.4033 9.53441 16.6667 10.1703 16.6667 10.8333V15.8333Z" fill="black" />
                  <path d="M10 11.6667C9.77901 11.6667 9.56705 11.7545 9.41076 11.9108C9.25448 12.0671 9.16669 12.2791 9.16669 12.5001V14.1667C9.16669 14.3878 9.25448 14.5997 9.41076 14.756C9.56705 14.9123 9.77901 15.0001 10 15.0001C10.221 15.0001 10.433 14.9123 10.5893 14.756C10.7456 14.5997 10.8334 14.3878 10.8334 14.1667V12.5001C10.8334 12.2791 10.7456 12.0671 10.5893 11.9108C10.433 11.7545 10.221 11.6667 10 11.6667Z" fill="black" />
                </g>
                <defs>
                  <clipPath id="clip0_11_300">
                    <rect width="20" height="20" fill="white" />
                  </clipPath>
                </defs>
              </svg>
              <input v-model="password" autocomplete="new-password" placeholder="Enter Current Password" :type="type" @focus="error2 = false">
              <svg
                v-if="type === 'password'"
                class="pass_svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                @click="showHide()"
              >
                <path d="M22.0828 11.3953C19.861 6.71484 16.5024 4.35938 12 4.35938C7.49533 4.35938 4.13908 6.71484 1.9172 11.3977C1.82808 11.5864 1.78186 11.7925 1.78186 12.0012C1.78186 12.2099 1.82808 12.416 1.9172 12.6047C4.13908 17.2852 7.49767 19.6406 12 19.6406C16.5047 19.6406 19.861 17.2852 22.0828 12.6023C22.2633 12.2227 22.2633 11.782 22.0828 11.3953ZM12 17.9531C8.21954 17.9531 5.45158 16.0359 3.49923 12C5.45158 7.96406 8.21954 6.04688 12 6.04688C15.7805 6.04688 18.5485 7.96406 20.5008 12C18.5508 16.0359 15.7828 17.9531 12 17.9531ZM11.9063 7.875C9.62814 7.875 7.78126 9.72188 7.78126 12C7.78126 14.2781 9.62814 16.125 11.9063 16.125C14.1844 16.125 16.0313 14.2781 16.0313 12C16.0313 9.72188 14.1844 7.875 11.9063 7.875ZM11.9063 14.625C10.4555 14.625 9.28126 13.4508 9.28126 12C9.28126 10.5492 10.4555 9.375 11.9063 9.375C13.357 9.375 14.5313 10.5492 14.5313 12C14.5313 13.4508 13.357 14.625 11.9063 14.625Z" fill="black" />
              </svg>
              <svg
                v-else
                class="pass_svg"
                width="24"
                height="24"
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                @click="showHide()"
              >
                <path d="M6 5.00012L26 27.0001" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M19.3634 19.6999C18.3822 20.5918 17.0868 21.0573 15.7623 20.9942C14.4378 20.9311 13.1926 20.3444 12.3006 19.3632C11.4086 18.3821 10.9429 17.0868 11.006 15.7622C11.069 14.4377 11.6555 13.1925 12.6366 12.3004" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M9.24931 8.57434C4.15315 11.155 2 16.0001 2 16.0001C2 16.0001 6 24.9992 16 24.9992C18.343 25.0178 20.6567 24.4782 22.7497 23.4248" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M26.0762 21.1376C28.8014 18.6967 30 16.0001 30 16.0001C30 16.0001 26 6.99917 16 6.99917C15.1339 6.99775 14.2692 7.06816 13.4147 7.20968" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M16.9409 11.0886C18.0036 11.2927 18.9715 11.8358 19.6994 12.6365C20.4274 13.4373 20.876 14.4524 20.9781 15.5297" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
              </svg>
            </div>
          </div>
          <div class="input-box">
            <p class="label">
              New Password
            </p>
            <div class="new_input">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clip-path="url(#clip0_11_300)">
                  <path d="M15.8334 7.02V5.83333C15.8334 4.28624 15.2188 2.80251 14.1248 1.70854C13.0308 0.614582 11.5471 0 10 0C8.45292 0 6.96919 0.614582 5.87523 1.70854C4.78127 2.80251 4.16669 4.28624 4.16669 5.83333V7.02C3.42449 7.34392 2.79276 7.8771 2.34877 8.55434C1.90477 9.23158 1.66775 10.0235 1.66669 10.8333V15.8333C1.66801 16.938 2.10742 17.997 2.88854 18.7782C3.66965 19.5593 4.72869 19.9987 5.83335 20H14.1667C15.2713 19.9987 16.3304 19.5593 17.1115 18.7782C17.8926 17.997 18.332 16.938 18.3334 15.8333V10.8333C18.3323 10.0235 18.0953 9.23158 17.6513 8.55434C17.2073 7.8771 16.5756 7.34392 15.8334 7.02ZM5.83335 5.83333C5.83335 4.72826 6.27234 3.66846 7.05374 2.88705C7.83514 2.10565 8.89495 1.66667 10 1.66667C11.1051 1.66667 12.1649 2.10565 12.9463 2.88705C13.7277 3.66846 14.1667 4.72826 14.1667 5.83333V6.66667H5.83335V5.83333ZM16.6667 15.8333C16.6667 16.4964 16.4033 17.1323 15.9345 17.6011C15.4656 18.0699 14.8297 18.3333 14.1667 18.3333H5.83335C5.17031 18.3333 4.53443 18.0699 4.06559 17.6011C3.59675 17.1323 3.33335 16.4964 3.33335 15.8333V10.8333C3.33335 10.1703 3.59675 9.53441 4.06559 9.06557C4.53443 8.59672 5.17031 8.33333 5.83335 8.33333H14.1667C14.8297 8.33333 15.4656 8.59672 15.9345 9.06557C16.4033 9.53441 16.6667 10.1703 16.6667 10.8333V15.8333Z" fill="black" />
                  <path d="M10 11.6667C9.77901 11.6667 9.56705 11.7545 9.41076 11.9108C9.25448 12.0671 9.16669 12.2791 9.16669 12.5001V14.1667C9.16669 14.3878 9.25448 14.5997 9.41076 14.756C9.56705 14.9123 9.77901 15.0001 10 15.0001C10.221 15.0001 10.433 14.9123 10.5893 14.756C10.7456 14.5997 10.8334 14.3878 10.8334 14.1667V12.5001C10.8334 12.2791 10.7456 12.0671 10.5893 11.9108C10.433 11.7545 10.221 11.6667 10 11.6667Z" fill="black" />
                </g>
                <defs>
                  <clipPath id="clip0_11_300">
                    <rect width="20" height="20" fill="white" />
                  </clipPath>
                </defs>
              </svg>
              <input v-model="new_password" autocomplete="off" placeholder="Enter New Password" :type="new_type" @focus="error2 = false">
              <svg
                v-if="new_type === 'password'"
                class="pass_svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                @click="new_showHide()"
              >
                <path d="M22.0828 11.3953C19.861 6.71484 16.5024 4.35938 12 4.35938C7.49533 4.35938 4.13908 6.71484 1.9172 11.3977C1.82808 11.5864 1.78186 11.7925 1.78186 12.0012C1.78186 12.2099 1.82808 12.416 1.9172 12.6047C4.13908 17.2852 7.49767 19.6406 12 19.6406C16.5047 19.6406 19.861 17.2852 22.0828 12.6023C22.2633 12.2227 22.2633 11.782 22.0828 11.3953ZM12 17.9531C8.21954 17.9531 5.45158 16.0359 3.49923 12C5.45158 7.96406 8.21954 6.04688 12 6.04688C15.7805 6.04688 18.5485 7.96406 20.5008 12C18.5508 16.0359 15.7828 17.9531 12 17.9531ZM11.9063 7.875C9.62814 7.875 7.78126 9.72188 7.78126 12C7.78126 14.2781 9.62814 16.125 11.9063 16.125C14.1844 16.125 16.0313 14.2781 16.0313 12C16.0313 9.72188 14.1844 7.875 11.9063 7.875ZM11.9063 14.625C10.4555 14.625 9.28126 13.4508 9.28126 12C9.28126 10.5492 10.4555 9.375 11.9063 9.375C13.357 9.375 14.5313 10.5492 14.5313 12C14.5313 13.4508 13.357 14.625 11.9063 14.625Z" fill="black" />
              </svg>
              <svg
                v-else
                class="pass_svg"
                width="24"
                height="24"
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                @click="new_showHide()"
              >
                <path d="M6 5.00012L26 27.0001" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M19.3634 19.6999C18.3822 20.5918 17.0868 21.0573 15.7623 20.9942C14.4378 20.9311 13.1926 20.3444 12.3006 19.3632C11.4086 18.3821 10.9429 17.0868 11.006 15.7622C11.069 14.4377 11.6555 13.1925 12.6366 12.3004" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M9.24931 8.57434C4.15315 11.155 2 16.0001 2 16.0001C2 16.0001 6 24.9992 16 24.9992C18.343 25.0178 20.6567 24.4782 22.7497 23.4248" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M26.0762 21.1376C28.8014 18.6967 30 16.0001 30 16.0001C30 16.0001 26 6.99917 16 6.99917C15.1339 6.99775 14.2692 7.06816 13.4147 7.20968" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M16.9409 11.0886C18.0036 11.2927 18.9715 11.8358 19.6994 12.6365C20.4274 13.4373 20.876 14.4524 20.9781 15.5297" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
              </svg>
            </div>
          </div>
          <div class="input-box">
            <p class="label">
              Confrirm New Password
            </p>
            <div class="new_input">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clip-path="url(#clip0_11_300)">
                  <path d="M15.8334 7.02V5.83333C15.8334 4.28624 15.2188 2.80251 14.1248 1.70854C13.0308 0.614582 11.5471 0 10 0C8.45292 0 6.96919 0.614582 5.87523 1.70854C4.78127 2.80251 4.16669 4.28624 4.16669 5.83333V7.02C3.42449 7.34392 2.79276 7.8771 2.34877 8.55434C1.90477 9.23158 1.66775 10.0235 1.66669 10.8333V15.8333C1.66801 16.938 2.10742 17.997 2.88854 18.7782C3.66965 19.5593 4.72869 19.9987 5.83335 20H14.1667C15.2713 19.9987 16.3304 19.5593 17.1115 18.7782C17.8926 17.997 18.332 16.938 18.3334 15.8333V10.8333C18.3323 10.0235 18.0953 9.23158 17.6513 8.55434C17.2073 7.8771 16.5756 7.34392 15.8334 7.02ZM5.83335 5.83333C5.83335 4.72826 6.27234 3.66846 7.05374 2.88705C7.83514 2.10565 8.89495 1.66667 10 1.66667C11.1051 1.66667 12.1649 2.10565 12.9463 2.88705C13.7277 3.66846 14.1667 4.72826 14.1667 5.83333V6.66667H5.83335V5.83333ZM16.6667 15.8333C16.6667 16.4964 16.4033 17.1323 15.9345 17.6011C15.4656 18.0699 14.8297 18.3333 14.1667 18.3333H5.83335C5.17031 18.3333 4.53443 18.0699 4.06559 17.6011C3.59675 17.1323 3.33335 16.4964 3.33335 15.8333V10.8333C3.33335 10.1703 3.59675 9.53441 4.06559 9.06557C4.53443 8.59672 5.17031 8.33333 5.83335 8.33333H14.1667C14.8297 8.33333 15.4656 8.59672 15.9345 9.06557C16.4033 9.53441 16.6667 10.1703 16.6667 10.8333V15.8333Z" fill="black" />
                  <path d="M10 11.6667C9.77901 11.6667 9.56705 11.7545 9.41076 11.9108C9.25448 12.0671 9.16669 12.2791 9.16669 12.5001V14.1667C9.16669 14.3878 9.25448 14.5997 9.41076 14.756C9.56705 14.9123 9.77901 15.0001 10 15.0001C10.221 15.0001 10.433 14.9123 10.5893 14.756C10.7456 14.5997 10.8334 14.3878 10.8334 14.1667V12.5001C10.8334 12.2791 10.7456 12.0671 10.5893 11.9108C10.433 11.7545 10.221 11.6667 10 11.6667Z" fill="black" />
                </g>
                <defs>
                  <clipPath id="clip0_11_300">
                    <rect width="20" height="20" fill="white" />
                  </clipPath>
                </defs>
              </svg>
              <input v-model="con_new_password" autocomplete="off" placeholder="Confrirm New Password" :type="con_new_type" @focus="error2 = false">
              <svg
                v-if="con_new_type === 'password'"
                class="pass_svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                @click="con_new_showHide()"
              >
                <path d="M22.0828 11.3953C19.861 6.71484 16.5024 4.35938 12 4.35938C7.49533 4.35938 4.13908 6.71484 1.9172 11.3977C1.82808 11.5864 1.78186 11.7925 1.78186 12.0012C1.78186 12.2099 1.82808 12.416 1.9172 12.6047C4.13908 17.2852 7.49767 19.6406 12 19.6406C16.5047 19.6406 19.861 17.2852 22.0828 12.6023C22.2633 12.2227 22.2633 11.782 22.0828 11.3953ZM12 17.9531C8.21954 17.9531 5.45158 16.0359 3.49923 12C5.45158 7.96406 8.21954 6.04688 12 6.04688C15.7805 6.04688 18.5485 7.96406 20.5008 12C18.5508 16.0359 15.7828 17.9531 12 17.9531ZM11.9063 7.875C9.62814 7.875 7.78126 9.72188 7.78126 12C7.78126 14.2781 9.62814 16.125 11.9063 16.125C14.1844 16.125 16.0313 14.2781 16.0313 12C16.0313 9.72188 14.1844 7.875 11.9063 7.875ZM11.9063 14.625C10.4555 14.625 9.28126 13.4508 9.28126 12C9.28126 10.5492 10.4555 9.375 11.9063 9.375C13.357 9.375 14.5313 10.5492 14.5313 12C14.5313 13.4508 13.357 14.625 11.9063 14.625Z" fill="black" />
              </svg>
              <svg
                v-else
                class="pass_svg"
                width="24"
                height="24"
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                @click="con_new_showHide()"
              >
                <path d="M6 5.00012L26 27.0001" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M19.3634 19.6999C18.3822 20.5918 17.0868 21.0573 15.7623 20.9942C14.4378 20.9311 13.1926 20.3444 12.3006 19.3632C11.4086 18.3821 10.9429 17.0868 11.006 15.7622C11.069 14.4377 11.6555 13.1925 12.6366 12.3004" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M9.24931 8.57434C4.15315 11.155 2 16.0001 2 16.0001C2 16.0001 6 24.9992 16 24.9992C18.343 25.0178 20.6567 24.4782 22.7497 23.4248" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M26.0762 21.1376C28.8014 18.6967 30 16.0001 30 16.0001C30 16.0001 26 6.99917 16 6.99917C15.1339 6.99775 14.2692 7.06816 13.4147 7.20968" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M16.9409 11.0886C18.0036 11.2927 18.9715 11.8358 19.6994 12.6365C20.4274 13.4373 20.876 14.4524 20.9781 15.5297" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="bottom_btn slide-in-from-left">
      <button v-if="otpLoading" class="bg_btn">
        <Loader class="come-down" />
      </button>
      <button v-else :disabled="disabled" class="bg_btn" @click="getOtp()">
        Update Changes
      </button>
    </div>
    <ModalsPasswordEnterOTP
      v-if="passwordOTP"
      :current-password="password"
      :new-password="new_password"
      @close-modal="passwordOTP = false"
      @trans-action="passwordOTP = false"
      @bg-action="passwordOTP = false; successModal = true"
    />
    <ModalsSuccessModal
      v-if="successModal"
      :modal-image="require('assets/gifs/96673-success.gif')"
      :modal-head="'Password Changed'"
      :modal-text="'Your Password has been saved successfully'"
      :bg-btn="'Close'"
      @close-modal="successModal = false"
      @bg-action="successModal = false"
    />
  </div>
</template>

<script>
import Cookies from 'js-cookie'
export default {
  props: {
    userData: {
      type: Object,
      default: () => {}
    },
    successText: {
      type: String,
      default: () => ''
    },
    success: {
      type: Boolean,
      default: () => false
    },
    errorText: {
      type: String,
      default: () => ''
    },
    error: {
      type: Boolean,
      default: () => false
    },
    imageLoading: {
      type: Boolean,
      default: () => false
    }
  },
  data () {
    return {
      email: 'nkojuadeposi@gmail.com',
      phone: '08012345678',
      errorText2: '',
      successModal: false,
      passwordOTP: false,
      otpLoading: false,
      updateLoading: false,
      error2: false,
      userImage: null,
      altImage: require('assets/images/no-image.png'),
      password: '',
      type: 'password',
      con_new_password: '',
      con_new_type: 'password',
      new_password: '',
      new_type: 'password',
      age: ''
    }
  },
  computed: {
    disabled () {
      return (
        this.password === '' ||
        this.new_password === '' ||
        this.con_new_password === ''
      )
    }
  },
  watch: {
    userData: {
      immediate: true,
      handler (val) {
        // console.log(val)
        this.pushData()
      }
    }
  },
  methods: {
    pushData () {
      this.userImage = this.userData.profiles.profile_pics
    },
    showHide () {
      if (this.type === 'password') {
        this.type = 'text'
      } else if (this.type === 'text') {
        this.type = 'password'
      }
    },
    con_new_showHide () {
      if (this.con_new_type === 'password') {
        this.con_new_type = 'text'
      } else if (this.con_new_type === 'text') {
        this.con_new_type = 'password'
      }
    },
    new_showHide () {
      if (this.new_type === 'password') {
        this.new_type = 'text'
      } else if (this.new_type === 'text') {
        this.new_type = 'password'
      }
    },
    sendOtp () {
      this.openOtp = false
      this.successModal = true
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
      this.saveImage()

      if (imgFile && imgFile[0]) {
        const reader = new FileReader()
        reader.onload = (e) => {
          this.userImage = e.target.result
        }
        reader.readAsDataURL(imgFile[0])
        this.$emit('fileInput', imgFile[0])
      }
    },
    saveImage () {
      // console.log(this.selectedImage)
      // eslint-disable-next-line vue/no-mutating-props
      this.imageLoading = true
      this.$emit('saveImage', this.selectedImage)
    },
    getOtp () {
      if (this.new_password === this.con_new_password) {
        this.otpLoading = true
        this.$axios.$get('/auth/generate/otp',
          {
            headers: {
              Authorization: `Bearer ${Cookies.get('token')}`
            }
          }
        ).then((response) => {
          // console.log(response)
          this.otpLoading = false
          if (!response.error) {
            this.passwordOTP = true
          } else {
            this.error2 = true
            this.errorText2 = response.errorMsg
          }
        // this.editAccess = response.editAccess
        }).catch((onrejected) => {
          // console.log(onrejected)
          this.otpLoading = false
        })
      } else {
        this.error2 = true
        this.errorText2 = 'Comfirm New Password is wrong'
        setTimeout(() => {
          this.error2 = false
        }, 3000)
      }
    },
    updateChanges () {
      // console.log(this.updateLoading)
      // this.updateLoading = true
      if (this.new_password === this.con_new_password) {
        this.updateLoading = true
        this.$axios.$post('/auth/change/password',
          {
            current_password: this.password,
            new_password: this.new_password
          },
          {
            headers: {
              Authorization: `Bearer ${Cookies.get('token')}`
            }
          }
        ).then((response) => {
          // console.log(response)
          this.updateLoading = false
          if (!response.error) {
            // console.log(response)
            this.successModal = true
          } else {
            this.error2 = true
            this.errorText2 = response.errorMsg
          }
        // this.editAccess = response.editAccess
        }).catch((onrejected) => {
          // console.log(onrejected)
          this.updateLoading = false
        })
      } else {
        this.error2 = true
        this.errorText2 = 'Comfirm New Password is wrong'
        setTimeout(() => {
          this.error2 = false
        }, 3000)
      }
      // this.updateLoading = false
    }
  }
}
</script>

<style scoped>
.inner {
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

.name {
  font-weight: 700;
  font-size: 16px;
  text-align: center;
}

.rhs {
  width: 72%;
  box-shadow: 0px 4px 4px rgba(0, 41, 93, 0.09);
  border-radius: 4px;
  padding: 2vh 2vw;
}

.rhs_title {
  margin-bottom: 20px;
  font-weight: 700;
  font-size: 16px;
}

.rhs_inner {
  display: flex;
  justify-content: space-between;
}

.rhs_inner > div {
  flex-basis: 31%;
}

.user-image-container {
  margin-top: 20px;
  margin-bottom: 10px;
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
  width: 6rem;
  height: 6rem;
  object-fit: cover;
  /* border: 10px solid rgba(15, 178, 243, 0.18); */
  border-radius: 100%;
  cursor: pointer;
}

.edit-icon {
  width: 34px;
  height: 34px;
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

.input_cont {
  margin-bottom: 3vh;
}

.input-box {
  margin-bottom: 3vh;
}

.pass_svg {
  cursor: pointer;
}

.new_input svg {
  cursor: pointer;
}

.new_input input:disabled,
.new_input input[disabled] {
  /* background-color: #F8F8F8; */
  cursor: not-allowed;
}

.bottom_btn {
  display: flex;
  justify-content: flex-end;
  margin-top: 6vh;
}

.bg_btn {
  width: 11rem;
}

button:disabled,
button[disabled] {
  background-color: #cacaca;
  color: #929292;
  cursor: not-allowed;
  opacity: 0.7;
}

@media only screen and (max-width: 500px) {
  .inner {
    flex-direction: column;
  }

  .lhs {
    width: 100%;
    box-shadow: none;
    display: none;
  }

  .rhs {
    width: 100%;
    box-shadow: none;
  }

  .rhs_inner {
    flex-direction: column;
  }

  .label {
    font-size: 13px;
  }

  .personal_input {
    font-size: 14px;
  }

  .bottom_btn {
    justify-content: center;
  }

  .bg_btn {
    width: 90%;
  }
}
</style>
