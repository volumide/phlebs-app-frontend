<template>
  <div class="list_ctn slide-in-from-right">
    <div class="list_inner">
      <div class="list_top">
        <p class="list_title">
          {{ boxName }}
        </p>
        <div class="list_number">
          <p>8</p>
        </div>
      </div>
      <div v-for="(order, index) in allOrders" :key="index" class="list_details">
        <div class="time_date">
          <p class="time">
            {{ order.time }}
          </p>
          <p class="date">
            {{ order.date }}
          </p>
        </div>
        <div class="address_icon">
          <div class="address">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="10" cy="10" r="10" fill="#0FB2F3" />
              <g clip-path="url(#clip0_653_9949)">
                <path d="M9.98072 4C8.88027 4.00138 7.82524 4.50249 7.04711 5.39338C6.26897 6.28426 5.83129 7.49216 5.83008 8.75207C5.83008 11.2621 9.31662 14.7078 9.71259 15.0927L9.98072 15.3522L10.2489 15.0927C10.6448 14.7078 14.1314 11.2621 14.1314 8.75207C14.1302 7.49216 13.6925 6.28426 12.9143 5.39338C12.1362 4.50249 11.0812 4.00138 9.98072 4V4ZM9.98072 11.1281C9.57026 11.1281 9.16902 10.9887 8.82773 10.7277C8.48645 10.4666 8.22045 10.0955 8.06337 9.66133C7.9063 9.22717 7.8652 8.74943 7.94528 8.28853C8.02535 7.82762 8.22301 7.40425 8.51325 7.07196C8.80349 6.73966 9.17327 6.51337 9.57584 6.42169C9.97842 6.33001 10.3957 6.37706 10.7749 6.5569C11.1541 6.73673 11.4782 7.04128 11.7063 7.43201C11.9343 7.82275 12.056 8.28213 12.056 8.75207C12.0554 9.382 11.8365 9.98591 11.4475 10.4313C11.0584 10.8768 10.5309 11.1273 9.98072 11.1281Z" fill="white" />
                <path d="M9.98054 10.1779C10.6682 10.1779 11.2257 9.53963 11.2257 8.75228C11.2257 7.96493 10.6682 7.32666 9.98054 7.32666C9.29284 7.32666 8.73535 7.96493 8.73535 8.75228C8.73535 9.53963 9.29284 10.1779 9.98054 10.1779Z" fill="white" />
              </g>
              <defs>
                <clipPath id="clip0_653_9949">
                  <rect width="9.96154" height="11.405" fill="white" transform="translate(5 4)" />
                </clipPath>
              </defs>
            </svg>
            <p>
              {{ order.address }}
            </p>
          </div>
          <div class="action_icon">
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect width="24" height="24" rx="4" fill="#0FB2F3" />
              <path d="M14.9778 10.6844L11.4078 7.11436C11.2621 6.96949 11.0649 6.88818 10.8595 6.88818C10.654 6.88818 10.4568 6.96949 10.3111 7.11436C10.2382 7.18666 10.1804 7.27268 10.1409 7.36746C10.1014 7.46224 10.0811 7.5639 10.0811 7.66658C10.0811 7.76925 10.1014 7.87091 10.1409 7.96569C10.1804 8.06047 10.2382 8.1465 10.3111 8.2188L13.8889 11.781C13.9618 11.8533 14.0197 11.9394 14.0591 12.0341C14.0986 12.1289 14.119 12.2306 14.119 12.3332C14.119 12.4359 14.0986 12.5376 14.0591 12.6324C14.0197 12.7271 13.9618 12.8132 13.8889 12.8855L10.3111 16.4477C10.1647 16.5931 10.082 16.7908 10.0812 16.9972C10.0805 17.2036 10.1618 17.4018 10.3072 17.5482C10.4527 17.6947 10.6503 17.7774 10.8567 17.7781C11.0631 17.7789 11.2613 17.6976 11.4078 17.5521L14.9778 13.9821C15.4147 13.5446 15.6602 12.9516 15.6602 12.3332C15.6602 11.7149 15.4147 11.1219 14.9778 10.6844Z" fill="white" />
            </svg>
          </div>
        </div>
        <hr class="line">
      </div>
      <div class="bottm">
        <div class="see_all">
          <p>See All</p>
          <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M11.55 7.41011L8.10747 3.96761C7.96695 3.82792 7.77686 3.74951 7.57872 3.74951C7.38058 3.74951 7.1905 3.82792 7.04997 3.96761C6.97968 4.03733 6.92388 4.12028 6.88581 4.21167C6.84773 4.30307 6.82812 4.4011 6.82812 4.50011C6.82812 4.59912 6.84773 4.69714 6.88581 4.78854C6.92388 4.87993 6.97968 4.96288 7.04997 5.03261L10.5 8.46761C10.5703 8.53733 10.6261 8.62028 10.6641 8.71167C10.7022 8.80307 10.7218 8.9011 10.7218 9.00011C10.7218 9.09912 10.7022 9.19714 10.6641 9.28854C10.6261 9.37993 10.5703 9.46288 10.5 9.53261L7.04997 12.9676C6.90875 13.1078 6.82901 13.2984 6.82831 13.4975C6.8276 13.6965 6.90599 13.8876 7.04622 14.0289C7.18646 14.1701 7.37705 14.2498 7.57607 14.2505C7.7751 14.2512 7.96625 14.1728 8.10747 14.0326L11.55 10.5901C11.9713 10.1682 12.208 9.59636 12.208 9.00011C12.208 8.40385 11.9713 7.83198 11.55 7.41011Z" fill="#00295D" />
            <path d="M11.55 7.41011L8.10747 3.96761C7.96695 3.82792 7.77686 3.74951 7.57872 3.74951C7.38058 3.74951 7.1905 3.82792 7.04997 3.96761C6.97968 4.03733 6.92388 4.12028 6.88581 4.21167C6.84773 4.30307 6.82812 4.4011 6.82812 4.50011C6.82812 4.59912 6.84773 4.69714 6.88581 4.78854C6.92388 4.87993 6.97968 4.96288 7.04997 5.03261L10.5 8.46761C10.5703 8.53733 10.6261 8.62028 10.6641 8.71167C10.7022 8.80307 10.7218 8.9011 10.7218 9.00011C10.7218 9.09912 10.7022 9.19714 10.6641 9.28854C10.6261 9.37993 10.5703 9.46288 10.5 9.53261L7.04997 12.9676C6.90875 13.1078 6.82901 13.2984 6.82831 13.4975C6.8276 13.6965 6.90599 13.8876 7.04622 14.0289C7.18646 14.1701 7.37705 14.2498 7.57607 14.2505C7.7751 14.2512 7.96625 14.1728 8.10747 14.0326L11.55 10.5901C11.9713 10.1682 12.208 9.59636 12.208 9.00011C12.208 8.40385 11.9713 7.83198 11.55 7.41011Z" fill="#00295D" />
          </svg>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    boxName: {
      type: String,
      default: () => ''
    }
  },
  data () {
    return {
      allOrders: [
        {
          time: '8:00am',
          date: 'Monday 15th Sept 2022',
          address: '9, Admiralty way, Lekki, Lagos'
        },
        {
          time: '8:00am',
          date: 'Monday 15th Sept 2022',
          address: '9, Admiralty way, Lekki, Lagos'
        },
        {
          time: '8:00am',
          date: 'Monday 15th Sept 2022',
          address: '9, Admiralty way, Lekki, Lagos'
        },
        {
          time: '8:00am',
          date: 'Monday 15th Sept 2022',
          address: '9, Admiralty way, Lekki, Lagos'
        },
        {
          time: '8:00am',
          date: 'Monday 15th Sept 2022',
          address: '9, Admiralty way, Lekki, Lagos'
        }
      ]
    }
  }
}
</script>

<style scoped>
.list_ctn {
  width: 100%;
  background-color: #F0F7FE;
  border: 1px solid rgba(0, 41, 93, 0.1);
  border-radius: 20px;
  padding: 3vh 1.5vw;
}

.list_top {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 5vh;
}

.list_title {
  font-weight: 700;
  font-size: 22px;
  color: var(--primary-color);
}

.list_number {
  width: 32px;
  height: 32px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--primary-color);
  border-radius: 50%;
}

.list_number p {
  color: #fff;
}

.time_date {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1.5vh;
}

.time,
.date {
  font-weight: 700;
}

.address_icon {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.address {
  display: flex;
  align-items: center;
  gap: 0.5vw;
}

.address p {
  color: rgba(0, 0, 0, 0.5);
  font-weight: 500;
}

.line {
  border: none;
  border-top: 1px solid rgba(0, 40, 93, 0.079);
  margin: 2vh 0;
}

.see_all {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 0.5vw;
  margin-top: 4vh;
}
</style>
