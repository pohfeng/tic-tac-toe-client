<template>
  <Modal :open="isLoading">
    <div class="loading-page">
      <div class="circle-wrapper">
        <span class="circle"></span>
        <span class="circle circle-2"></span>
        <span class="circle circle-3"></span>
        <span class="circle circle-4"></span>
        <span class="circle circle-5"></span>
      </div>
      <div>Loading</div>
    </div>
  </Modal>
</template>

<script>
import { mapState } from 'vuex'
import Modal from './Modal.vue'
export default {
  components: {
    Modal
  },
  computed: {
    ...mapState('ui', ['isLoading'])
  }
}
</script>

<style lang="scss" scoped>
.loading-page {
  display: flex;
  flex-direction: column;
  color: white;
  font-size: xxx-large;
}
.circle {
  display: inline-block;
  position: relative;
  margin: 10px 5px;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: white;
  animation: loading 1.2s linear infinite;
}

.circle-2 {
  animation-delay: 0.2s;
}

.circle-3 {
  animation-delay: 0.3s;
}

.circle-4 {
  animation-delay: 0.4s;
}

.circle-5 {
  animation-delay: 0.5s;
}

@keyframes loading {
  0%,
  100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(20px);
  }
}
</style>
