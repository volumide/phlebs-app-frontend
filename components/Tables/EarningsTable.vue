<template>
  <div>
    <TablesLoader v-if="tableLoader" />
    <div v-else>
      <div v-if="tableData.length">
        <div class="mobile_no_show table-container come-down">
          <table>
            <tr class="table-header">
              <th class="space" />
              <th class="type">
                Type
              </th>
              <th class="amount">
                Amount
              </th>
              <th class="dateTime">
                Date and Time
              </th>
              <th class="status">
                Status
              </th>
              <th class="space" />
              <!-- <th class="search_input">
                <div class="new_input">
                  <svg width="20" height="20" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M14.5 25C20.299 25 25 20.299 25 14.5C25 8.70101 20.299 4 14.5 4C8.70101 4 4 8.70101 4 14.5C4 20.299 8.70101 25 14.5 25Z" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M21.9243 21.925L27.9994 28.0001" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                  </svg>
                  <input v-model="tableQuery" placeholder="Search Table" name="email" type="email" @focus="error = false">
                </div>
              </th> -->
            </tr>
            <tr v-for="(data, index) in filteredTable" :key="index" class="table-details">
              <td class="space">
                <div class="icon_type">
                  <svg
                    v-if="data.type.toLowerCase().includes('withdraw')"
                    width="38"
                    height="39"
                    viewBox="0 0 38 39"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle cx="19" cy="19.2266" r="19" fill="#FFE9D9" />
                    <path d="M24.6392 22.0969L24.632 15.9104C24.6304 15.3723 24.4159 14.8566 24.0354 14.4761C23.6548 14.0955 23.1392 13.8811 22.601 13.8795L16.4145 13.8722C16.1454 13.873 15.8876 13.9803 15.6973 14.1706C15.507 14.3608 15.3998 14.6187 15.399 14.8877C15.3984 15.0222 15.4245 15.1554 15.4757 15.2797C15.5269 15.4041 15.6022 15.517 15.6973 15.6121C15.7924 15.7072 15.9053 15.7825 16.0297 15.8337C16.154 15.8849 16.2872 15.911 16.4217 15.9104L21.1606 15.9104L13.2384 23.8326C13.0474 24.0236 12.9401 24.2827 12.9401 24.5528C12.9401 24.823 13.0474 25.082 13.2384 25.273C13.4294 25.464 13.6885 25.5714 13.9586 25.5714C14.2287 25.5714 14.4878 25.464 14.6788 25.273L22.601 17.3508L22.601 22.0897C22.6001 22.36 22.7065 22.6196 22.8969 22.8114C23.0874 23.0032 23.3462 23.1115 23.6165 23.1124C23.8868 23.1134 24.1464 23.0069 24.3382 22.8165C24.5299 22.6261 24.6382 22.3672 24.6392 22.0969Z" fill="#F15728" />
                  </svg>
                  <svg
                    v-else
                    width="38"
                    height="39"
                    viewBox="0 0 38 39"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle cx="19" cy="19.2266" r="19" transform="rotate(-180 19 19.2266)" fill="#DAEEED" />
                    <path d="M13.3608 16.3562L13.368 22.5427C13.3696 23.0809 13.5841 23.5965 13.9646 23.977C14.3452 24.3576 14.8608 24.5721 15.399 24.5737L21.5855 24.5809C21.8546 24.5801 22.1124 24.4728 22.3027 24.2826C22.493 24.0923 22.6002 23.8345 22.601 23.5654C22.6016 23.4309 22.5755 23.2977 22.5243 23.1734C22.4731 23.0491 22.3978 22.9361 22.3027 22.841C22.2076 22.7459 22.0947 22.6706 21.9703 22.6194C21.846 22.5682 21.7128 22.5422 21.5783 22.5427L16.8394 22.5427L24.7616 14.6205C24.9526 14.4295 25.0599 14.1704 25.0599 13.9003C25.0599 13.6302 24.9526 13.3711 24.7616 13.1801C24.5706 12.9891 24.3115 12.8818 24.0414 12.8818C23.7713 12.8818 23.5122 12.9891 23.3212 13.1801L15.399 21.1023L15.399 16.3634C15.3999 16.0931 15.2935 15.8335 15.1031 15.6417C14.9126 15.4499 14.6538 15.3416 14.3835 15.3407C14.1132 15.3397 13.8536 15.4462 13.6618 15.6366C13.4701 15.8271 13.3618 16.0859 13.3608 16.3562Z" fill="#00B78F" />
                  </svg>
                </div>
              </td>
              <td class="type">
                {{ data.type }}
              </td>
              <td class="amount">
                {{ data.amount }}
              </td>
              <td class="dateTime">
                {{ data.dateTime }}
              </td>
              <td class="status">
                <div :class="`status_text ${data.status === 'Success' ? 'sucess' : 'failed'}-status`">
                  {{ data.status }}
                </div>
              </td>
              <td class="space">
                <div class="action">
                  <svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clip-path="url(#clip0_1762_8201)">
                      <path d="M10 3.5599C10.9205 3.5599 11.6667 2.8137 11.6667 1.89323C11.6667 0.972755 10.9205 0.226562 10 0.226562C9.07957 0.226562 8.33337 0.972755 8.33337 1.89323C8.33337 2.8137 9.07957 3.5599 10 3.5599Z" fill="#00295D" />
                      <path d="M10 11.8939C10.9205 11.8939 11.6667 11.1477 11.6667 10.2272C11.6667 9.30674 10.9205 8.56055 10 8.56055C9.07957 8.56055 8.33337 9.30674 8.33337 10.2272C8.33337 11.1477 9.07957 11.8939 10 11.8939Z" fill="#00295D" />
                      <path d="M10 20.2259C10.9205 20.2259 11.6667 19.4797 11.6667 18.5592C11.6667 17.6388 10.9205 16.8926 10 16.8926C9.07957 16.8926 8.33337 17.6388 8.33337 18.5592C8.33337 19.4797 9.07957 20.2259 10 20.2259Z" fill="#00295D" />
                    </g>
                    <defs>
                      <clipPath id="clip0_1762_8201">
                        <rect width="20" height="20" fill="white" transform="translate(0 0.226562)" />
                      </clipPath>
                    </defs>
                  </svg>
                </div>
              </td>
            </tr>
          </table>
          <div v-if="!filteredTable.length" class="come-down search_empty">
            <EmptyData
              :modal-head="'No Result!'"
              :modal-text="'You have no Transaction related to your search!'"
            />
          </div>
        </div>
        <div class="no_show">
          <div class="new_input">
            <svg width="20" height="20" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M14.5 25C20.299 25 25 20.299 25 14.5C25 8.70101 20.299 4 14.5 4C8.70101 4 4 8.70101 4 14.5C4 20.299 8.70101 25 14.5 25Z" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M21.9243 21.925L27.9994 28.0001" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
            <input v-model="tableQuery" placeholder="Search Table" name="email" type="email" @focus="error = false">
          </div>
          <div v-for="(data, index) in filteredTable" :key="index" class="data_box slide-in-from-left" @click="$router.push(`/${$route.name}/completed?id=${data[0].id}`)">
            <div>
              <p class="mobile_time">
                {{ data.type }}
              </p>
              <p class="mobile_date">
                {{ data.amount }}
              </p>
              <p class="mobile_date">
                {{ data.dateTime }}
              </p>
              <p class="mobile_date">
                {{ data.status }}
              </p>
            </div>
            <div class="action_mobile">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="24" height="24" rx="4" fill="#0FB2F3" />
                <path d="M14.9778 10.6844L11.4078 7.11436C11.2621 6.96949 11.0649 6.88818 10.8595 6.88818C10.654 6.88818 10.4568 6.96949 10.3111 7.11436C10.2382 7.18666 10.1804 7.27268 10.1409 7.36746C10.1014 7.46224 10.0811 7.5639 10.0811 7.66658C10.0811 7.76925 10.1014 7.87091 10.1409 7.96569C10.1804 8.06047 10.2382 8.1465 10.3111 8.2188L13.8889 11.781C13.9618 11.8533 14.0197 11.9394 14.0591 12.0341C14.0986 12.1289 14.119 12.2306 14.119 12.3332C14.119 12.4359 14.0986 12.5376 14.0591 12.6324C14.0197 12.7271 13.9618 12.8132 13.8889 12.8855L10.3111 16.4477C10.1647 16.5931 10.082 16.7908 10.0812 16.9972C10.0805 17.2036 10.1618 17.4018 10.3072 17.5482C10.4527 17.6947 10.6503 17.7774 10.8567 17.7781C11.0631 17.7789 11.2613 17.6976 11.4078 17.5521L14.9778 13.9821C15.4147 13.5446 15.6602 12.9516 15.6602 12.3332C15.6602 11.7149 15.4147 11.1219 14.9778 10.6844Z" fill="white" />
              </svg>
            </div>
          </div>
          <div v-if="!filteredTable.length" class="come-down search_empty">
            <EmptyData
              :modal-head="'No Result!'"
              :modal-text="'You have no Transaction related to your search!'"
            />
          </div>
        </div>
      </div>
      <div v-else class="come-down">
        <EmptyData
          :modal-head="'You have no Transaction!'"
          :modal-text="'You are all Caught up!'"
        />
      </div>
    </div>
  </div>
</template>

<script>
import { detailedDate } from '@/utils/date-formats.js'
import functions from '@/utils/functions'
// import Cookies from 'js-cookie'
export default {
  props: {
    // tableData: {
    //   type: Array,
    //   default: () => []
    // },
    tableLoader: {
      type: Boolean,
      default: () => false
    }
  },
  data () {
    return {
      currency: functions.formatCurrency,
      detailedDate,
      tableQuery: '',
      deposit: true,
      transLoading: false,
      tableData: [
        {
          type: 'WITHDRAW FROM WALLET',
          amount: '- 20,000',
          dateTime: 'Thursday, October 13, 2022 at 2:08:09 PM',
          status: 'Success'
        },
        {
          type: 'PAYMENT RECEIVED',
          amount: '+ 2000',
          dateTime: 'Thursday, October 13, 2022 at 12:25:19 PM',
          status: 'Success'
        },
        {
          type: 'PAYMENT RECEIVED',
          amount: '+ 2000',
          dateTime: 'Thursday, October 13, 2022 at 12:25:19 PM',
          status: 'Success'
        },
        {
          type: 'PAYMENT RECEIVED',
          amount: '+ 2000',
          dateTime: 'Thursday, October 13, 2022 at 12:25:19 PM',
          status: 'Success'
        },
        {
          type: 'WITHDRAW FROM WALLET',
          amount: '- 20,000',
          dateTime: 'Thursday, October 13, 2022 at 2:08:09 PM',
          status: 'Failed'
        }
      ]
    }
  },
  computed: {
    filteredTable () {
      return this.tableData.filter(data => this.detailedDate(data.type).toLowerCase().includes(this.tableQuery.toLowerCase()) || data.amount.toLowerCase().includes(this.tableQuery.toLowerCase()) || data.dateTime.toLowerCase().includes(this.tableQuery.toLowerCase()) || data.status.toLowerCase().includes(this.tableQuery.toLowerCase()))
    }
  },
  methods: {
  }
}
</script>

<style scoped>

.table-top {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 30px 30px;
}

.table-title {
  font-size: 22px;
  font-weight: 700;
  color: #3F3F3F;
}

.search-box {
  border: 1px solid #064a7b2c;
  height: 50px;
  background-color: #fafafa;
  display: flex;
  width: 25rem;
  padding: 0 15px;
  border-radius: 100px;
}

.view-all {
  font-size: 15px;
  cursor: pointer;
}
.table-loader {
  margin-top: 100px;
}
.table-container {
  background-color: #ffffff;
  border-radius: 10px;
  width: 100%;
  /* border: 1px solid #1A240; */
}

/* .table, tr {
  width: 100%;
} */

table, th, td,
td span {
  width: 100%;
  /* border: 1px solid #fff; */
  border-collapse: collapse;
  /* font-size: 15px; */
  font-weight: 600;
}
.table-header {
  height: 75px;
  background-color: #F2F4F7;
  padding: 0 20px;
  border-radius: 4px;
}

.table-header th,
th span {
  font-weight: 800;
  color: #000;
}
.table-details {
  height: 78px;
  padding: 0 20px;
  box-shadow: 0px 4px 4px rgba(0, 41, 93, 0.04);
  margin-bottom: 10px;
  border-radius: 4px;
}
.table-details:nth-child(odd) {
  /* height: 60px; */
  background-color: #F2F4F7;
  border-radius: 4px;
  padding: 0 20px;
}
th {
  text-align: left;
}

.space {
  width: 10%;
}

.icon_type {
  display: flex;
  align-items: center;
  justify-content: center;
}

.type {
  width: 30%;
}

.amount {
  width: 10%;
}

.dateTime {
  width: 30%;
}

.status {
  width: 10%;
}

.status_text {
  display: flex;
  font-weight: 700;
  align-items: center;
  justify-content: center;
  width: 5rem;
  height: 40px;
  border-radius: 6px;
}

.sucess-status {
  background-color: #00b78f36;
  color: #00B78F;
}

.failed-status {
  background-color: #FFE9D9;
  color: #F44336;
}

.search_input {
  padding-right: 10px;
  width: 25%;
}

.action {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
}

.action_mobile {
  /* width: 5rem; */
  cursor: pointer;
}

.action svg {
  margin: 0 3px;
  cursor: pointer;
}

.type-details {
  width: 10rem;
  color: #EE3E3E;
}

.success {
  color: #4ABF21;
}

.search_empty {
  width: 100%;
  display: flex;
  justify-content: center;
}

@media only screen and (max-width: 500px) {
  .data_box {
    border: 1px solid rgba(0, 41, 93, 0.06);
    box-shadow: 0px 4px 4px rgba(0, 41, 93, 0.04);
    border-radius: 10px;
    padding: 3vh 5vw;
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    margin-bottom: 3vh;
    cursor: pointer;
  }
  .mobile_time {
    font-weight: 700;
    font-size: 16px;
    margin-bottom: 10px;
  }
  .mobile_date {
    font-weight: 600;
    font-size: 13px;
    margin-bottom: 10px;
  }
  .mobile_address {
    display: flex;
    align-items: center;
    gap: 8px;
  }

  .mobile_address span {
    font-size: 13px;
    color: rgba(0, 0, 0, 0.50);
  }

  .new_input {
    margin-bottom: 30px;
  }
}
</style>
