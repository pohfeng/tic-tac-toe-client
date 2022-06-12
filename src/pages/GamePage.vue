<template>
  <Board />
  <Modal :open="winner || isDraw">
    <div v-show="winner">{{ winner }}'s Win!</div>
    <div v-show="isDraw">Draw game!</div>
    <button>Restart</button>
  </Modal>
</template>

<script>
import { mapState } from 'vuex'
import Modal from '../components/UI/Modal.vue'
import Board from '../components/Board/Board.vue'
export default {
  beforeRouteLeave() {
    const answer = window.confirm('Are you sure you want to leave?')
    if (answer) return true
  },
  components: {
    Board,
    Modal
  },
  computed: {
    ...mapState('room', ['winner', 'isDraw'])
  }
}
</script>

<style lang="scss" scoped></style>
