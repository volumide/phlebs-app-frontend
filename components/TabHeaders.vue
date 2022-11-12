<template>
  <div
    class="tabs-ctn"
    :style="`gap: ${tabSpacing || '30'}; padding-left: ${paddingLeft || '0'}`"
  >
    <div
      v-for="(tab, Id) in tabs"
      :key="Id"
      :class="`tab default-input ${activeTab.toLowerCase() === tab.toLowerCase() ? 'active' : ''}`"
      @click="$emit('set-active-tab', tab)"
    >
      {{ tab }}
      <!-- <div :style="`background: ${background}`">
        {{ tab }}
      </div> -->
      <p v-if="dataNum && tab === 'New Orders'" class="numbr">
        {{ dataNum }}
      </p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    tabs: {
      type: Array,
      default: () => []
    },
    activeTab: {
      type: String,
      default: () => ''
    },
    dataNum: {
      type: Number,
      default: () => null
    },
    tabSpacing: {
      type: String,
      default: () => ''
    },
    paddingLeft: {
      type: String,
      default: () => ''
    },
    paddingRight: {
      type: String,
      default: () => ''
    },
    background: {
      type: String,
      default: () => ''
    }
  }
}
</script>

<style scoped>
.tabs-ctn {
  display: flex;
  width: fit-content;
  align-items: center;
  gap: 3px;
  height: 60px;
  border-radius: 6px;
  background-color: #325BD9;
  /* border-bottom: 1px solid var(--border-one); */
}

.tab {
  position: relative;
  color: rgba(255, 255, 255, 0.500);
  padding: 13px 20px;
  border-radius: 3px;
  margin: 0 8px;
  cursor: pointer;
  font-weight: 600;
  transition: all 0.3s ease-out;
}

.tab.active,
.tab:hover {
  background-color: rgba(255, 255, 255, 0.300);
  color: #fff;
  transition: all 0.3s ease-out;
  font-weight: 700;
}

.tab.active div,
.tab:hover div {
  color: var(--primary-purple);
}

.numbr {
  background-color: #DCF1FD;
  color: rgb(34, 34, 34);
  border-radius: 50%;
  font-size: 12px;
  font-weight: 800;
  width: 20px;
  height: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  right: 0;
}

 @media only screen and (max-width: 500px) {
  .tabs-ctn {
    height: 50px;
    padding: 0 4px;
  }

  .tab {
    padding: 10px 15px;
    margin: 0 4px;
  }

  .numbr {
    font-size: 10px;
  }
 }
</style>
