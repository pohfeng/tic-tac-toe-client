<template>
  <Modal>
    <div v-show="winner">{{ winner }}'s Win!</div>
    <div v-show="isDraw">Draw game!</div>
    <button>Restart</button>
  </Modal>
</template>

<script>
import { mapState } from 'vuex'
import Modal from '../components/UI/Modal.vue'
export default {
  components: {
    Modal
  },
  computed: {
    ...mapState('room', ['winner', 'isDraw'])
  }
}
</script>

<style lang="scss" scoped></style>
