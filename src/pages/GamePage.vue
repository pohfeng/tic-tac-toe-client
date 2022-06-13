<template>
  <Board />
  <Modal :open="!!winner || !!isDraw">
    <div class="result-container">
      <div class="result" v-show="winner !== mark">Opponent Wins!</div>
      <div class="result" v-show="winner === mark">Yeah, You Win!</div>
      <div class="result" v-show="isDraw">Draw game!</div>
      <button @click="readyToRestart" v-show="!playerReady">Restart</button>
      <div class="restart-ready" v-show="playerReady">You Ready ✔️</div>
      <div class="restart-ready" v-show="opponentReady">Opponent Ready ✔️</div>
    </div>
  </Modal>
</template>

<script>
import { mapActions, mapMutations, mapState } from 'vuex'
import Modal from '../components/UI/Modal.vue'
import Board from '../components/Board/Board.vue'
export default {
  beforeRouteLeave() {
    if (this.isOpponentLeft) {
      this.SET_OPPONENT_STATUS(false)
      return true
    }
    const answer = window.confirm('Are you sure you want to leave?')
    if (answer) {
      this.resetState()
      return true
    }
    return false
  },
  components: {
    Board,
    Modal
  },
  computed: {
    ...mapState('room', [
      'mark',
      'winner',
      'isDraw',
      'isOpponentLeft',
      'opponentReady',
      'playerReady'
    ])
  },
  methods: {
    ...mapMutations('room', ['SET_OPPONENT_STATUS']),
    ...mapActions('room', ['resetState', 'restartGame']),
    readyToRestart() {
      this.restartGame()
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../styles/button';
@include button-mixin;
.result-container {
  display: flex;
  flex-direction: column;

  & .result,
  .restart-ready {
    font-size: xxx-large;
    color: white;
    margin: 2rem;
  }

  .restart-ready {
    font-size: xx-large;
  }
}
</style>
