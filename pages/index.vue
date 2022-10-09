<template>
  <div class="container">
    <div v-if="loading" class="inner">
      <LoadersOverview />
    </div>
    <div v-else class="inner">
      <div v-if="warning" class="">
        <AlertsWarning :warning-text="warningText" />
      </div>
      <div class="mobile_show">
        <div class="new_input ">
          <input type="text" name="" placeholder="Search for Name, Order Reference No">
          <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="15" cy="15" r="15" fill="#D0F0FB" />
            <g clip-path="url(#clip0_717_13142)">
              <path d="M21.8535 20.1465L18.869 17.162C19.6823 16.1673 20.0822 14.898 19.9859 13.6168C19.8897 12.3355 19.3046 11.1402 18.3518 10.2782C17.399 9.41624 16.1513 8.95343 14.8668 8.98554C13.5823 9.01766 12.3593 9.54224 11.4508 10.4508C10.5423 11.3593 10.0177 12.5823 9.98556 13.8668C9.95344 15.1513 10.4163 16.399 11.2783 17.3518C12.1403 18.3046 13.3355 18.8896 14.6168 18.9859C15.898 19.0822 17.1673 18.6823 18.162 17.869L21.1465 20.8535C21.2408 20.9446 21.3671 20.995 21.4982 20.9938C21.6293 20.9927 21.7547 20.9401 21.8474 20.8474C21.9401 20.7547 21.9927 20.6293 21.9938 20.4982C21.995 20.3671 21.9446 20.2408 21.8535 20.1465ZM15 18C14.2089 18 13.4355 17.7654 12.7777 17.3259C12.1199 16.8863 11.6072 16.2616 11.3045 15.5307C11.0017 14.7998 10.9225 13.9955 11.0769 13.2196C11.2312 12.4437 11.6122 11.731 12.1716 11.1716C12.731 10.6121 13.4437 10.2312 14.2196 10.0768C14.9956 9.9225 15.7998 10.0017 16.5307 10.3045C17.2616 10.6072 17.8864 11.1199 18.3259 11.7777C18.7654 12.4355 19 13.2089 19 14C18.9988 15.0605 18.577 16.0772 17.8271 16.8271C17.0772 17.577 16.0605 17.9988 15 18Z" fill="black" />
            </g>
            <defs>
              <clipPath id="clip0_717_13142">
                <rect width="12" height="12" fill="white" transform="translate(10 8.99997)" />
              </clipPath>
            </defs>
          </svg>
        </div>
      </div>
      <div class="top_side">
        <div class="lhs">
          <div class="new_order_box">
            <div class="top">
              <div class="text_side">
                <p class="text">
                  You have
                </p>
                <p class="orders">
                  {{ newOrders ? newOrders : 0 }} New Orders
                </p>
              </div>
              <div class="icon">
                <svg width="50" height="50" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect width="60" height="60" rx="30" fill="white" />
                  <g clip-path="url(#clip0_625_7742)">
                    <path d="M40.6453 30.8082L38.8641 24.3995C38.342 22.522 37.2073 20.8728 35.6403 19.7143C34.0734 18.5557 32.1641 17.9541 30.2161 18.0052C28.268 18.0563 26.3929 18.7571 24.8888 19.9962C23.3847 21.2352 22.338 22.9415 21.915 24.8438L20.536 31.0454C20.3836 31.7306 20.3871 32.4414 20.5463 33.1251C20.7054 33.8088 21.016 34.448 21.4552 34.9956C21.8945 35.5432 22.4511 35.9851 23.084 36.2888C23.7169 36.5925 24.4099 36.7501 25.1119 36.7501H26.1563C26.3714 37.8097 26.9463 38.7624 27.7835 39.4467C28.6207 40.131 29.6687 40.5048 30.75 40.5048C31.8313 40.5048 32.8793 40.131 33.7165 39.4467C34.5537 38.7624 35.1286 37.8097 35.3438 36.7501H36.1294C36.852 36.7501 37.5649 36.5831 38.2123 36.262C38.8597 35.941 39.4241 35.4746 39.8614 34.8993C40.2987 34.324 40.5971 33.6554 40.7333 32.9457C40.8694 32.236 40.8396 31.5045 40.6463 30.8082H40.6453ZM30.75 38.6251C30.1704 38.6227 29.6057 38.4412 29.1331 38.1056C28.6605 37.77 28.3032 37.2966 28.11 36.7501H33.39C33.1968 37.2966 32.8395 37.77 32.3669 38.1056C31.8944 38.4412 31.3296 38.6227 30.75 38.6251ZM38.3681 33.7641C38.1069 34.1107 37.7684 34.3916 37.3796 34.5844C36.9909 34.7773 36.5624 34.8768 36.1284 34.8751H25.1119C24.6907 34.875 24.275 34.7804 23.8953 34.5981C23.5157 34.4159 23.1818 34.1507 22.9183 33.8222C22.6548 33.4936 22.4685 33.1101 22.373 32.6999C22.2776 32.2897 22.2755 31.8634 22.3669 31.4523L23.745 25.2498C24.0772 23.7556 24.8994 22.4153 26.0808 21.4421C27.2621 20.4688 28.735 19.9184 30.2651 19.8783C31.7953 19.8382 33.2949 20.3107 34.5256 21.2208C35.7563 22.1309 36.6475 23.4263 37.0575 24.901L38.8388 31.3098C38.9565 31.7273 38.9752 32.1665 38.8935 32.5926C38.8118 33.0186 38.6319 33.4198 38.3681 33.7641Z" fill="black" />
                  </g>
                  <defs>
                    <clipPath id="clip0_625_7742">
                      <rect width="22.5" height="22.5" fill="white" transform="translate(19.5 18)" />
                    </clipPath>
                  </defs>
                </svg>
              </div>
            </div>
            <button class="bg_btn" @click="$router.push('/to-do-orders?type=New Orders')">
              <span>Accept Orders</span>
              <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="32" height="32" rx="10" fill="white" fill-opacity="0.2" />
                <path d="M17.5704 20.3561L20.7482 17.1709C21.0241 16.8933 21.179 16.5178 21.179 16.1264C21.179 15.735 21.0241 15.3596 20.7482 15.082L17.5704 11.8968C17.4316 11.7588 17.2438 11.6814 17.0482 11.6814C16.8525 11.6814 16.6647 11.7588 16.5259 11.8968C16.4565 11.9657 16.4014 12.0476 16.3638 12.1379C16.3262 12.2281 16.3068 12.3249 16.3068 12.4227C16.3068 12.5205 16.3262 12.6173 16.3638 12.7076C16.4014 12.7979 16.4565 12.8798 16.5259 12.9487L18.963 15.3857H10.8148C10.6184 15.3857 10.4299 15.4637 10.291 15.6026C10.1521 15.7416 10.0741 15.93 10.0741 16.1264C10.0741 16.3229 10.1521 16.5113 10.291 16.6502C10.4299 16.7891 10.6184 16.8672 10.8148 16.8672H18.963L16.5259 19.3042C16.3864 19.4427 16.3077 19.6309 16.307 19.8275C16.3063 20.0241 16.3837 20.2129 16.5222 20.3524C16.6607 20.4918 16.849 20.5706 17.0455 20.5713C17.2421 20.572 17.4309 20.4946 17.5704 20.3561Z" fill="white" />
              </svg>
            </button>
          </div>
          <div class="today_order">
            <p class="text">
              Today’s Orders
            </p>
            <p class="number_orders">
              {{ todayOrders ? todayOrders : 0 }}
            </p>
            <button class="trans_btn" @click="$router.push('/today-order')">
              <span>My Todo</span>
              <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="32" height="32" rx="10" fill="#325BD9" />
                <path d="M17.5704 20.3561L20.7482 17.1709C21.0241 16.8933 21.179 16.5178 21.179 16.1264C21.179 15.735 21.0241 15.3596 20.7482 15.082L17.5704 11.8968C17.4316 11.7588 17.2438 11.6814 17.0482 11.6814C16.8525 11.6814 16.6647 11.7588 16.5259 11.8968C16.4565 11.9657 16.4014 12.0476 16.3638 12.1379C16.3262 12.2281 16.3068 12.3249 16.3068 12.4227C16.3068 12.5205 16.3262 12.6173 16.3638 12.7076C16.4014 12.7979 16.4565 12.8798 16.5259 12.9487L18.963 15.3857H10.8148C10.6184 15.3857 10.4299 15.4637 10.291 15.6026C10.1521 15.7416 10.0741 15.93 10.0741 16.1264C10.0741 16.3229 10.1521 16.5113 10.291 16.6502C10.4299 16.7891 10.6184 16.8672 10.8148 16.8672H18.963L16.5259 19.3042C16.3864 19.4427 16.3077 19.6309 16.307 19.8275C16.3063 20.0241 16.3837 20.2129 16.5222 20.3524C16.6607 20.4918 16.849 20.5706 17.0455 20.5713C17.2421 20.572 17.4309 20.4946 17.5704 20.3561Z" fill="white" />
              </svg>
            </button>
          </div>
        </div>
        <div class="rhs">
          <div class="next_order_top">
            <p class="next_order_head">
              Your Next Order
            </p>
            <div class="see_all" @click="$router.push('/today-order')">
              <p>See all</p>
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M10.2667 6.58663L7.20666 3.52663C7.08175 3.40246 6.91278 3.33276 6.73666 3.33276C6.56053 3.33276 6.39157 3.40246 6.26666 3.52663C6.20417 3.5886 6.15458 3.66233 6.12073 3.74357C6.08688 3.82481 6.06946 3.91195 6.06946 3.99996C6.06946 4.08797 6.08688 4.1751 6.12073 4.25634C6.15458 4.33758 6.20417 4.41132 6.26666 4.47329L9.33332 7.52663C9.39581 7.5886 9.44541 7.66233 9.47925 7.74357C9.5131 7.82481 9.53052 7.91195 9.53052 7.99996C9.53052 8.08797 9.5131 8.1751 9.47925 8.25634C9.44541 8.33758 9.39581 8.41132 9.33332 8.47329L6.26666 11.5266C6.14112 11.6513 6.07024 11.8207 6.06962 11.9976C6.06899 12.1745 6.13867 12.3444 6.26332 12.47C6.38798 12.5955 6.55739 12.6664 6.7343 12.667C6.91121 12.6676 7.08112 12.5979 7.20666 12.4733L10.2667 9.41329C10.6412 9.03829 10.8516 8.52996 10.8516 7.99996C10.8516 7.46996 10.6412 6.96163 10.2667 6.58663Z" fill="#2A7FF3" />
              </svg>
            </div>
          </div>
          <div class="next_order_box">
            <div class="top">
              <div>
                <p class="next_order_time">
                  {{ nextOrders ? nextOrders.collection_time : '00:00' }}
                </p>
                <p class="next_order_date">
                  {{ nextOrders ? nextOrders.collection_date : 'Account not approved' }}
                </p>
              </div>
              <svg
                style="cursor: pointer"
                width="36"
                height="36"
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                @click="$router.push(`/today-order/to-do?id=${nextOrders.orderId}`)"
              >
                <rect width="32" height="32" rx="10" fill="white" fill-opacity="0.2" />
                <path d="M17.5704 20.3561L20.7482 17.1709C21.0241 16.8933 21.179 16.5178 21.179 16.1264C21.179 15.735 21.0241 15.3596 20.7482 15.082L17.5704 11.8968C17.4316 11.7588 17.2438 11.6814 17.0482 11.6814C16.8525 11.6814 16.6647 11.7588 16.5259 11.8968C16.4565 11.9657 16.4014 12.0476 16.3638 12.1379C16.3262 12.2281 16.3068 12.3249 16.3068 12.4227C16.3068 12.5205 16.3262 12.6173 16.3638 12.7076C16.4014 12.7979 16.4565 12.8798 16.5259 12.9487L18.963 15.3857H10.8148C10.6184 15.3857 10.4299 15.4637 10.291 15.6026C10.1521 15.7416 10.0741 15.93 10.0741 16.1264C10.0741 16.3229 10.1521 16.5113 10.291 16.6502C10.4299 16.7891 10.6184 16.8672 10.8148 16.8672H18.963L16.5259 19.3042C16.3864 19.4427 16.3077 19.6309 16.307 19.8275C16.3063 20.0241 16.3837 20.2129 16.5222 20.3524C16.6607 20.4918 16.849 20.5706 17.0455 20.5713C17.2421 20.572 17.4309 20.4946 17.5704 20.3561Z" fill="white" />
              </svg>
            </div>
            <div class="address">
              <svg width="14" height="16" viewBox="0 0 14 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clip-path="url(#clip0_625_7746)">
                  <path d="M6.81817 0.421387C5.31177 0.423206 3.86754 1.08227 2.80235 2.25398C1.73716 3.42569 1.13801 5.01434 1.13635 6.67139C1.13635 9.97264 5.90908 14.5045 6.45113 15.0108L6.81817 15.352L7.18522 15.0108C7.72726 14.5045 12.5 9.97264 12.5 6.67139C12.4983 5.01434 11.8992 3.42569 10.834 2.25398C9.76881 1.08227 8.32458 0.423206 6.81817 0.421387V0.421387ZM6.81817 9.79639C6.25629 9.79639 5.70703 9.61311 5.23985 9.26973C4.77266 8.92635 4.40854 8.43829 4.19351 7.86727C3.97849 7.29625 3.92223 6.66792 4.03185 6.06173C4.14147 5.45554 4.41204 4.89872 4.80935 4.46168C5.20665 4.02464 5.71285 3.72701 6.26394 3.60643C6.81502 3.48585 7.38623 3.54774 7.90534 3.78426C8.42445 4.02079 8.86814 4.42133 9.1803 4.93523C9.49246 5.44913 9.65908 6.05332 9.65908 6.67139C9.65818 7.49988 9.35858 8.29416 8.826 8.88C8.29342 9.46584 7.57135 9.79539 6.81817 9.79639Z" fill="white" />
                  <path d="M6.81819 8.54639C7.75959 8.54639 8.52274 7.70692 8.52274 6.67139C8.52274 5.63585 7.75959 4.79639 6.81819 4.79639C5.8768 4.79639 5.11365 5.63585 5.11365 6.67139C5.11365 7.70692 5.8768 8.54639 6.81819 8.54639Z" fill="white" />
                </g>
                <defs>
                  <clipPath id="clip0_625_7746">
                    <rect width="13.6364" height="15" fill="white" transform="translate(0 0.421387)" />
                  </clipPath>
                </defs>
              </svg>
              <p>{{ nextOrders ? nextOrders.collection_address : 'Account not approved' }}</p>
            </div>
            <div class="user_details">
              <div class="name_image">
                <div class="image">
                  <img :src="nextOrders ? nextOrders.user_avatar : require('assets/images/patient-image.png')" alt="">
                </div>
                <div>
                  <p class="name">
                    {{ nextOrders ? nextOrders.user_name : 'Unapproved' }}
                  </p>
                  <div class="no_show">
                    <div class="gender_age">
                      <p class="age">
                        {{ nextOrders ? nextOrders.user_age : '00' }}
                      </p>
                      <svg width="4" height="4" viewBox="0 0 4 4" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle opacity="0.4" cx="2" cy="2" r="2" fill="white" />
                      </svg>
                      <p class="gender">
                        {{ nextOrders ? nextOrders.gender : 'Not specified' }}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div class="mobile_no_show">
                <div class="gender_age">
                  <p class="age">
                    {{ nextOrders ? nextOrders.user_age : '00' }}
                  </p>
                  <svg width="4" height="4" viewBox="0 0 4 4" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle opacity="0.4" cx="2" cy="2" r="2" fill="white" />
                  </svg>
                  <p class="gender">
                    {{ nextOrders ? nextOrders.gender : 'Not specified' }}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="notif_section">
        <div class="first_side">
          <div class="bell">
            <img src="~assets/images/notif.png" alt="">
          </div>
          <div class="notif_center">
            <p class="notif_head">
              You have {{ incompleteOrders ? incompleteOrders : 0 }} orders you have not completed yet
            </p>
            <p class="notif_text">
              Proceed to Ongoing orders to complete or dismiss orders assigned to you.
            </p>
            <div class="no_show">
              <div class="see_all" @click="$router.push('/to-do-orders')">
                <p>See To-do</p>
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M10.2667 6.58663L7.20666 3.52663C7.08175 3.40246 6.91278 3.33276 6.73666 3.33276C6.56053 3.33276 6.39157 3.40246 6.26666 3.52663C6.20417 3.5886 6.15458 3.66233 6.12073 3.74357C6.08688 3.82481 6.06946 3.91195 6.06946 3.99996C6.06946 4.08797 6.08688 4.1751 6.12073 4.25634C6.15458 4.33758 6.20417 4.41132 6.26666 4.47329L9.33332 7.52663C9.39581 7.5886 9.44541 7.66233 9.47925 7.74357C9.5131 7.82481 9.53052 7.91195 9.53052 7.99996C9.53052 8.08797 9.5131 8.1751 9.47925 8.25634C9.44541 8.33758 9.39581 8.41132 9.33332 8.47329L6.26666 11.5266C6.14112 11.6513 6.07024 11.8207 6.06962 11.9976C6.06899 12.1745 6.13867 12.3444 6.26332 12.47C6.38798 12.5955 6.55739 12.6664 6.7343 12.667C6.91121 12.6676 7.08112 12.5979 7.20666 12.4733L10.2667 9.41329C10.6412 9.03829 10.8516 8.52996 10.8516 7.99996C10.8516 7.46996 10.6412 6.96163 10.2667 6.58663Z" fill="#2A7FF3" />
                </svg>
              </div>
            </div>
          </div>
        </div>
        <div class="mobile_no_show">
          <div class="last_side" @click="$router.push('/to-do-orders')">
            <p>Open To-do</p>
            <svg width="40" height="40" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect width="32" height="32" rx="10" fill="#325BD9" fill-opacity="0.2" />
              <path d="M17.5704 20.3561L20.7482 17.1709C21.0241 16.8933 21.179 16.5178 21.179 16.1264C21.179 15.735 21.0241 15.3596 20.7482 15.082L17.5704 11.8968C17.4316 11.7588 17.2438 11.6814 17.0482 11.6814C16.8525 11.6814 16.6647 11.7588 16.5259 11.8968C16.4565 11.9657 16.4014 12.0476 16.3638 12.1379C16.3262 12.2281 16.3068 12.3249 16.3068 12.4227C16.3068 12.5205 16.3262 12.6173 16.3638 12.7076C16.4014 12.7979 16.4565 12.8798 16.5259 12.9487L18.963 15.3857H10.8148C10.6184 15.3857 10.4299 15.4637 10.291 15.6026C10.1521 15.7416 10.0741 15.93 10.0741 16.1264C10.0741 16.3229 10.1521 16.5113 10.291 16.6502C10.4299 16.7891 10.6184 16.8672 10.8148 16.8672H18.963L16.5259 19.3042C16.3864 19.4427 16.3077 19.6309 16.307 19.8275C16.3063 20.0241 16.3837 20.2129 16.5222 20.3524C16.6607 20.4918 16.849 20.5706 17.0455 20.5713C17.2421 20.572 17.4309 20.4946 17.5704 20.3561Z" fill="#325BD9" />
            </svg>
          </div>
        </div>
      </div>
      <div class="bottom_box">
        <div class="notif_section analytics">
          <div class="first_side">
            <div class="notif_center">
              <p class="notif_head">
                Completed Orders for Today
              </p>
              <div class="notif_number">
                <p>
                  {{ completeOrders ? completeOrders : 0 }}
                </p>
                <svg
                  class="no_show"
                  width="32"
                  height="32"
                  viewBox="0 0 32 32"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  @click="$router.push(`/today-order?type=completed`)"
                >
                  <rect width="32" height="32" rx="10" fill="#325BD9" fill-opacity="0.2" />
                  <path d="M17.5704 20.3561L20.7482 17.1709C21.0241 16.8933 21.179 16.5178 21.179 16.1264C21.179 15.735 21.0241 15.3596 20.7482 15.082L17.5704 11.8968C17.4316 11.7588 17.2438 11.6814 17.0482 11.6814C16.8525 11.6814 16.6647 11.7588 16.5259 11.8968C16.4565 11.9657 16.4014 12.0476 16.3638 12.1379C16.3262 12.2281 16.3068 12.3249 16.3068 12.4227C16.3068 12.5205 16.3262 12.6173 16.3638 12.7076C16.4014 12.7979 16.4565 12.8798 16.5259 12.9487L18.963 15.3857H10.8148C10.6184 15.3857 10.4299 15.4637 10.291 15.6026C10.1521 15.7416 10.0741 15.93 10.0741 16.1264C10.0741 16.3229 10.1521 16.5113 10.291 16.6502C10.4299 16.7891 10.6184 16.8672 10.8148 16.8672H18.963L16.5259 19.3042C16.3864 19.4427 16.3077 19.6309 16.307 19.8275C16.3063 20.0241 16.3837 20.2129 16.5222 20.3524C16.6607 20.4918 16.849 20.5706 17.0455 20.5713C17.2421 20.572 17.4309 20.4946 17.5704 20.3561Z" fill="#325BD9" />
                </svg>
              </div>
            </div>
          </div>
          <div class="mobile_no_show">
            <div class="last_side" @click="$router.push(`/today-order?type=completed`)">
              <p>Open All</p>
              <svg width="40" height="40" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="32" height="32" rx="10" fill="#325BD9" fill-opacity="0.2" />
                <path d="M17.5704 20.3561L20.7482 17.1709C21.0241 16.8933 21.179 16.5178 21.179 16.1264C21.179 15.735 21.0241 15.3596 20.7482 15.082L17.5704 11.8968C17.4316 11.7588 17.2438 11.6814 17.0482 11.6814C16.8525 11.6814 16.6647 11.7588 16.5259 11.8968C16.4565 11.9657 16.4014 12.0476 16.3638 12.1379C16.3262 12.2281 16.3068 12.3249 16.3068 12.4227C16.3068 12.5205 16.3262 12.6173 16.3638 12.7076C16.4014 12.7979 16.4565 12.8798 16.5259 12.9487L18.963 15.3857H10.8148C10.6184 15.3857 10.4299 15.4637 10.291 15.6026C10.1521 15.7416 10.0741 15.93 10.0741 16.1264C10.0741 16.3229 10.1521 16.5113 10.291 16.6502C10.4299 16.7891 10.6184 16.8672 10.8148 16.8672H18.963L16.5259 19.3042C16.3864 19.4427 16.3077 19.6309 16.307 19.8275C16.3063 20.0241 16.3837 20.2129 16.5222 20.3524C16.6607 20.4918 16.849 20.5706 17.0455 20.5713C17.2421 20.572 17.4309 20.4946 17.5704 20.3561Z" fill="#325BD9" />
              </svg>
            </div>
          </div>
        </div>
        <div class="notif_section analytics">
          <div class="first_side">
            <div class="notif_center">
              <p class="notif_head">
                Dismissed Orders for Today
              </p>
              <div class="notif_number">
                <p>
                  {{ dismissedOrders ? dismissedOrders : 0 }}
                </p>
                <svg
                  class="no_show"
                  width="32"
                  height="32"
                  viewBox="0 0 32 32"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  @click="$router.push(`/today-order?type=dismissed`)"
                >
                  <rect width="32" height="32" rx="10" fill="#325BD9" fill-opacity="0.2" />
                  <path d="M17.5704 20.3561L20.7482 17.1709C21.0241 16.8933 21.179 16.5178 21.179 16.1264C21.179 15.735 21.0241 15.3596 20.7482 15.082L17.5704 11.8968C17.4316 11.7588 17.2438 11.6814 17.0482 11.6814C16.8525 11.6814 16.6647 11.7588 16.5259 11.8968C16.4565 11.9657 16.4014 12.0476 16.3638 12.1379C16.3262 12.2281 16.3068 12.3249 16.3068 12.4227C16.3068 12.5205 16.3262 12.6173 16.3638 12.7076C16.4014 12.7979 16.4565 12.8798 16.5259 12.9487L18.963 15.3857H10.8148C10.6184 15.3857 10.4299 15.4637 10.291 15.6026C10.1521 15.7416 10.0741 15.93 10.0741 16.1264C10.0741 16.3229 10.1521 16.5113 10.291 16.6502C10.4299 16.7891 10.6184 16.8672 10.8148 16.8672H18.963L16.5259 19.3042C16.3864 19.4427 16.3077 19.6309 16.307 19.8275C16.3063 20.0241 16.3837 20.2129 16.5222 20.3524C16.6607 20.4918 16.849 20.5706 17.0455 20.5713C17.2421 20.572 17.4309 20.4946 17.5704 20.3561Z" fill="#325BD9" />
                </svg>
              </div>
            </div>
          </div>
          <div class="mobile_no_show">
            <div class="last_side" @click="$router.push(`/today-order?type=dismissed`)">
              <p>Open All</p>
              <svg width="40" height="40" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="32" height="32" rx="10" fill="#325BD9" fill-opacity="0.2" />
                <path d="M17.5704 20.3561L20.7482 17.1709C21.0241 16.8933 21.179 16.5178 21.179 16.1264C21.179 15.735 21.0241 15.3596 20.7482 15.082L17.5704 11.8968C17.4316 11.7588 17.2438 11.6814 17.0482 11.6814C16.8525 11.6814 16.6647 11.7588 16.5259 11.8968C16.4565 11.9657 16.4014 12.0476 16.3638 12.1379C16.3262 12.2281 16.3068 12.3249 16.3068 12.4227C16.3068 12.5205 16.3262 12.6173 16.3638 12.7076C16.4014 12.7979 16.4565 12.8798 16.5259 12.9487L18.963 15.3857H10.8148C10.6184 15.3857 10.4299 15.4637 10.291 15.6026C10.1521 15.7416 10.0741 15.93 10.0741 16.1264C10.0741 16.3229 10.1521 16.5113 10.291 16.6502C10.4299 16.7891 10.6184 16.8672 10.8148 16.8672H18.963L16.5259 19.3042C16.3864 19.4427 16.3077 19.6309 16.307 19.8275C16.3063 20.0241 16.3837 20.2129 16.5222 20.3524C16.6607 20.4918 16.849 20.5706 17.0455 20.5713C17.2421 20.572 17.4309 20.4946 17.5704 20.3561Z" fill="#325BD9" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Cookies from 'js-cookie'
export default {
  layout: 'MainLayout',
  data () {
    return {
      loading: false,
      acctApproved: true,
      warning: false,
      warningText: 'Your account is pending for verification by the admin',
      newOrders: null,
      nextOrders: {},
      todayOrders: null,
      incompleteOrders: null,
      dismissedOrders: null,
      completeOrders: null
    }
  },
  created () {
    // this.getAllRequests()
    this.getUserDetails()
    this.getNewOrderTotal()
    this.getTodayOrdersTotal()
    this.getNextOrderDetails()
    this.getIncompleteOrders()
    this.getCompletedOrders()
    this.getDismissedOrders()
  },
  methods: {
    getAllRequests () {
      const newOrderTotal = this.$axios.$get('/orders/new/total')
      const todayOrdersTotal = this.$axios.$get('/orders/total/today/orders')
      const nextOrderDetails = this.$axios.$get('/orders/get/next/order')
      const incompleteOrders = this.$axios.$get('/orders/get/total/todo')
      const completedOrders = this.$axios.$get('/orders/total/completed/order')
      const dismissedOrders = this.$axios.$get('/orders/total/Dismissed/order')
      Promise.all([newOrderTotal, todayOrdersTotal, nextOrderDetails, incompleteOrders, completedOrders, dismissedOrders], {
        headers: {
          Authorization: `Bearer ${Cookies.get('token')}`
        }
      }).then((response) => {
        // console.log(response)
        // this.newOrders = response.orders.total
      })
    },
    getUserDetails () {
      this.$axios.$get('/auth/all/registration/information', {
        headers: {
          Authorization: `Bearer ${Cookies.get('token')}`
        }
      }).then((response) => {
        console.log(response)
        this.acctApproved = response.data.reg_details.approved
        if (!this.acctApproved) {
          setTimeout(() => {
            this.warning = true
          }, 1000)
        }
      })
    },
    getNewOrderTotal () {
      this.loading = true
      this.$axios.$get('/orders/new/total', {
        headers: {
          Authorization: `Bearer ${Cookies.get('token')}`
        }
      }).then((response) => {
        // console.log(response)
        this.newOrders = response.orders.total
      })
    },
    getTodayOrdersTotal () {
      this.$axios.$get('/orders/total/today/orders', {
        headers: {
          Authorization: `Bearer ${Cookies.get('token')}`
        }
      }).then((response) => {
        // console.log(response)
        this.todayOrders = response.orders.total
      })
    },
    getNextOrderDetails () {
      this.$axios.$get('/orders/get/next/order', {
        headers: {
          Authorization: `Bearer ${Cookies.get('token')}`
        }
      }).then((response) => {
        // console.log(response)
        this.nextOrders = response.next_order
      })
    },
    getIncompleteOrders () {
      this.$axios.$get('/orders/get/total/todo', {
        headers: {
          Authorization: `Bearer ${Cookies.get('token')}`
        }
      }).then((response) => {
        // console.log(response)
        this.incompleteOrders = response.orders.total
      })
    },
    getCompletedOrders () {
      this.$axios.$get('/orders/total/completed/order', {
        headers: {
          Authorization: `Bearer ${Cookies.get('token')}`
        }
      }).then((response) => {
        // console.log(response)
        this.completeOrders = response.orders.total
      })
    },
    getDismissedOrders () {
      this.$axios.$get('/orders/total/Dismissed/order', {
        headers: {
          Authorization: `Bearer ${Cookies.get('token')}`
        }
      }).then((response) => {
        // console.log(response)
        this.dismissedOrders = response.orders.dismissed
        this.loading = false
      }).catch(() => {
        this.loading = false
      })
      // this.loading = false
    }
  }
}
</script>

<style scoped>
.container {
  padding: 2vh 3vw;
}

.inner {
  width: 95%;
}

.mobile_show {
  display: none;
}

.top_side {
  display: flex;
  justify-content: space-between;
}

.lhs {
  display: flex;
  flex-basis: 55%;
  justify-content: space-between;
}

.rhs {
  flex-basis: 40%;
}

.new_order_box {
  width: 65%;
  background-color: #193073;
  padding: 5vh 3vw;
  border-radius: 10px;
}

.top {
  display: flex;
  justify-content: space-between;
}

.text {
  font-weight: 500;
  color: rgba(255, 255, 255, 0.500);
}

.orders {
  font-size: 20px;
  font-weight: 700;
  color: #fff;
  margin-top: 10px;
}

.bg_btn {
  margin-top: 4vh;
  background-color: #2A7FF3;
  display: flex;
  align-items: center;
  justify-content: center;
  /* gap: 10px; */
  width: 10rem;
}

.bg_btn span {
  color: #fff;
  font-weight: 700;
  margin-right: 10px;
}

.trans_btn {
  border: none;
  margin-top: 1.5vh;
  display: flex;
  align-items: center;
  justify-content: center;
  /* gap: 10px; */
}

.trans_btn span {
  color: #fff;
  font-weight: 700;
  margin-right: 10px;
}

.today_order {
  background-color: #2F374F;
  padding: 5vh 1.5vw;
  border-radius: 10px;
  width: 30%;
}

.number_orders {
  font-weight: 700;
  font-size: 35px;
  color: #fff;
  margin-top: 10px;
}

.next_order_top {
  display: flex;
  justify-content: space-between;
  margin-bottom: 2vh;
}

.next_order_head {
  font-weight: 700;
}

.see_all {
  cursor: pointer;
  display: flex;
  /* gap: 2px; */
  align-items: center;
}

.see_all p {
  color: #2A7FF3;
  font-weight: 700;
  margin-right: 2px;
}

.next_order_box {
  background-color: #2A7FF3;
  padding: 1.5vh 1.5vw;
  border-radius: 10px;
}

.next_order_time,
.next_order_date {
  color: #fff;
  font-weight: 700;
  margin-bottom: 10px;
  font-size: 16px;
}

.address {
  display: flex;
  align-items: center;
  /* gap: 10px; */
  margin: 15px 0;
}

.address p {
  color: rgba(255, 255, 255, 0.601);
  margin-left: 10px;
}

.user_details {
  display: flex;
  align-items: center;
  gap: 15px;
}

.name_image {
  display: flex;
  /* gap: 10px; */
  align-items: center;
}

.name {
  font-weight: 700;
  color: #fff;
}

.image {
  margin-right: 10px;
}

.image img {
  width: 50px;
  height: 50px;
  border-radius: 100%;
}

.gender_age {
  display: flex;
  /* gap: 5px; */
  align-items: center;
}

.gender_age svg {
  margin: 0 5px;
}

.gender,
.age {
  color: rgba(255, 255, 255, 0.576);
}

.notif_section {
  padding: 4vh 3vw;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: fit-content;
  border: 1px solid rgba(0, 41, 93, 0.05);
  box-shadow: 0px 4px 20px rgba(0, 41, 93, 0.05);
  border-radius: 8px;
  margin-top: 5vh;
}

.first_side {
  display: flex;
  /* gap: 3vw; */
  align-items: center;
}

.bell {
  margin-right: 12px;
}

.last_side {
  display: flex;
  align-items: center;
  gap: 1vw;
  cursor: pointer;
}

.last_side p {
  font-weight: 700;
}

.notif_head {
  font-size: 16px;
  font-weight: 700;
  margin-bottom: 10px;
}

.notif_text {
  color: rgba(0, 0, 0, 0.621);
}

.bottom_box {
  display: flex;
  justify-content: space-between;
}

.analytics {
  width: 48%;
}

.notif_number {
  display: flex;
  justify-content: space-between;
}

.notif_number p{
  font-size: 26px;
  font-weight: 700;
}

 @media only screen and (max-width: 500px) {
  .container {
    padding-bottom: 5vh;
  }
  .inner {
    width: 100%;
  }
  .top_side {
    flex-direction: column;
  }

  .mobile_show {
    display: block;
    margin-bottom: 3vh;
  }
  ::placeholder {
    font-size: 12px;
  }

  .new_order_box {
    width: 60%;
    padding-bottom: 2vh;
  }

  .today_order {
    width: 38%;
    padding-left: 3vw;
    padding-bottom: 2vh;
  }

  .orders {
    font-size: 16px;
  }

  .top .icon svg {
    width: 36px;
    height: 36px;
  }

  .trans_btn {
    height: 45px;
  }

  .bg_btn {
    height: 45px;
  }

  .bg_btn svg {
    width: 24px;
    height: 24px;
  }

  .trans_btn svg {
    width: 24px;
    height: 24px;
  }

  .rhs {
    margin-top: 4vh;
  }

  .next_order_box {
    padding: 4vh 5vw;
  }

  /* .notif_section {
    height: ;
  } */

  .first_side {
    align-items: flex-start;
  }

  .bell img {
    width: 30px;
    height: 30px;
  }

  .notif_head {
    font-size: 14px;
  }

  .notif_text {
    font-size: 12px;
    margin-bottom: 10px;
  }
 }
</style>
