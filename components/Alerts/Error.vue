<template>
  <div class="error">
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 4C9.87903 4.00238 7.84558 4.846 6.3458 6.34578C4.84603 7.84555 4.00241 9.879 4.00003 12C4.37603 22.588 19.626 22.585 20 12C19.9976 9.879 19.154 7.84555 17.6542 6.34578C16.1545 4.846 14.121 4.00238 12 4ZM13 17H11V15H13V17ZM13 13H11V7H13V13ZM21.257 19.637L19.714 18.363C21.1822 16.5674 21.9843 14.3194 21.9843 12C21.9843 9.6806 21.1822 7.43256 19.714 5.637L21.257 4.363C23.0186 6.51833 23.9809 9.21637 23.9809 12C23.9809 14.7836 23.0186 17.4817 21.257 19.637ZM2.74403 19.637C0.98193 17.4819 0.0192871 14.7838 0.0192871 12C0.0192871 9.21622 0.98193 6.51809 2.74403 4.363L4.28603 5.637C2.81782 7.43256 2.01573 9.6806 2.01573 12C2.01573 14.3194 2.81782 16.5674 4.28603 18.363L2.74403 19.637Z" fill="#FF0000" />
    </svg>
    <p>{{ errorText }}</p>
  </div>
</template>

<script>
export default {
  props: {
    errorText: {
      type: String,
      default: () => ''
    }
  }
}
</script>

<style scoped>

.error {
  display: flex;
  align-items: center;
  /* gap: 10px; */
  background-color: #FDE3E3;
  height: 50px;
  padding: 0 20px;
  border-radius: 6px;
  margin-bottom: 3vh;
}

.error svg {
  margin-right: 10px;
}

.error p {
  font-weight: 700;
}

@media only screen and (max-width: 500px) {
  .error {
    padding: 0 10px;
  }
  .error p {
    font-size: 12px;
  }
}
</style>
