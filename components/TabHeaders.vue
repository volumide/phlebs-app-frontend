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
  color: rgba(255, 255, 255, 0.500);
  padding: 13px 20px;
  border-radius: 3px;
  margin: 0 8px;
  cursor: pointer;
  font-weight: 600;
  transition: all 0.3s ease-out;
}

.tab div {
  /* background: #F4F6FA; */
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

 @media only screen and (max-width: 500px) {
  .tabs-ctn {
    height: 50px;
    padding: 0 4px;
  }

  .tab {
    padding: 10px 15px;
    margin: 0 4px;
  }
 }
</style>
