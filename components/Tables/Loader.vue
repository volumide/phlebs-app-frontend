<template>
  <div>
    <div class="loading-container table-container mobile_no_show">
      <table>
        <tr class="table-header">
          <td class="date">
            <div class="skeleton card" style="width: 100%; height: 40px" />
          </td>
          <td class="time">
            <div class="skeleton card" style="width: 100%; height: 40px" />
          </td>
          <td class="time">
            <div class="skeleton card" style="width: 100%; height: 40px" />
          </td>
          <td class="address">
            <div class="skeleton card" style="width: 100%; height: 40px" />
          </td>
        </tr>
        <tbody>
          <tr
            v-for="i in 3"
            :key="i"
            class="table-row"
          >
            <td class="date">
              <div class="skeleton card" style="width: 100%; height: 40px" />
            </td>
            <td class="time">
              <div class="skeleton card" style="width: 100%; height: 40px" />
            </td>
            <td class="time">
              <div class="skeleton card" style="width: 100%; height: 40px" />
            </td>
            <td class="address">
              <div class="skeleton card" style="width: 100%; height: 40px" />
            </td>
          </tr>
        </tbody>
      </table>
      <div class="table-footer">
        <div class="page-select lhs">
          <div class="skeleton card" style="width: 35px; height: 25px" />
          <div class="skeleton card" style="width: 25px; height: 25px" />
          <div class="skeleton card" style="width: 35px; height: 25px" />
        </div>
        <div class="mhs">
          <div class="skeleton card" style="width: 45px; height: 25px" />
          <div class="skeleton card" style="width: 45px; height: 25px" />
          <div class="skeleton card" style="width: 45px; height: 25px" />
        </div>
        <div class="rhs">
          <div class="skeleton card" style="width: 50px; height: 25px" />
          <div class="skeleton card" style="width: 25px; height: 25px" />
          <div class="skeleton card" style="width: 25px; height: 25px" />
          <div class="skeleton card" style="width: 50px; height: 25px" />
        </div>
      </div>
    </div>
    <div class="no_show">
      <div
        v-for="i in 3"
        :key="i"
        class="mobile_loader"
      >
        <div class="text_card skeleton card" />
        <div class="text_card skeleton card" />
        <div class="text_card skeleton card" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    tabHeadersLoader: {
      type: Boolean,
      default: () => false
    },
    checkboxLoader: {
      type: Boolean,
      default: () => false
    },
    tabHeadersLoaderLength: {
      type: Number,
      default: () => 3
    }
  }
}
</script>

<style scoped>
table {
  width: 90%;
  border-collapse: collapse;
}

.table-header {
  border: 1px solid rgba(0, 0, 0, 0.111);
  height: 60px;
}

tr.table-row {
  height: 60px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.111);
}

.date {
  width: 30%;
  padding: 0 15px;
}

.time {
  width: 20%;
  padding: 0 15px;
}

.address {
  width: 40%;
  padding: 0 15px;
}

.table-footer {
  display: flex;
  width: 90%;
  justify-content: space-between;
  align-items: center;
  height: 80px;
  padding: 0 10px;
}

.table-footer .rhs,
.table-footer .lhs {
  display: flex;
  align-items: center;
  gap: 10px;
}

.table-footer .mhs {
  display: flex;
  align-items: center;
  gap: 5px;
}

.table-footer .mhs b {
  font-weight: 500;
}

.table-footer .rhs button {
  border-radius: 6px;
  padding: 7px 10px;
  font-weight: 500;
}

.mobile_loader {
  /* border: 1px solid rgba(0, 0, 0, 0.111); */
  border-radius: 5px;
  padding: 3px 7px;
  margin-bottom: 20px;
}

.text_card {
  height: 25px;
  margin: 4px 0;
}
</style>
