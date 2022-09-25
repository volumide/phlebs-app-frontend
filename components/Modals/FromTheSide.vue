<template>
  <div class="modal-backdrop" @click="$emit('close-modal')">
    <div class="modal">
      hjkdl
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      anim: ''
    }
  },
  mounted () {
    const windowWidth = window.innerWidth
    if (windowWidth < 500) {
      // console.log('come-up')
      this.anim = 'come-up'
    } else {
      this.anim = 'reveals'
    }
  },
  methods: {
  }
}
</script>

<style scoped>
.modal-backdrop {
  z-index: 7;
  position: fixed;
  overflow: auto;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(1, 10, 20, 0.6);
  backdrop-filter: blur(4px);
}

.modal {
  /* margin-top: 5%; */
  background-color: white;
  width: 32%;
  height: fit-content;
  align-items: center;
  border-radius: 10px;
  overflow-y: auto;
  padding: 3vh 2vw;
  padding-bottom: 5vh;
}

@media only screen and (max-width: 500px) {
  .modal-backdrop {
    align-items: flex-end;
  }
  .modal {
    width: 100%;
    padding: 30px;
    border-radius: 40px 40px 0px 0px;
    margin-top: 1rem;
    padding-bottom: 10vh;
  }
}

</style>
