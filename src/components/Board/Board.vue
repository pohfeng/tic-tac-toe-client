<template>
  <div v-show="turn !== mark" class="opponent">
    <span>Opponent's turn</span>
    <span class="spinner"></span>
  </div>
  <div v-show="turn === mark" class="player">
    <span>Your turn</span>
    <span class="spinner"></span>
  </div>
  <div class="board" id="board">
    <button
      v-for="index in 9"
      :key="index"
      class="cell"
      :class="classGenerator(index)"
      :disabled="gameData[index] || turn !== mark"
      @click="markColumn(index)"
    ></button>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'

export default {
  computed: {
    ...mapState('room', ['gameData', 'mark', 'turn'])
  },
  methods: {
    ...mapActions('room', ['updateGameData']),
    classGenerator(key) {
      return {
        x: this.gameData[key] === 'x',
        circle: this.gameData[key] === 'o'
      }
    },
    markColumn(key) {
      const latestData = { ...this.gameData, [key]: this.mark }
      this.updateGameData({ latestData })
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../../styles/variables';
@import '../../styles/spinner';
@include spinner-mixin;

main {
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}

.opponent,
.player {
  span {
    margin-left: 1rem;
  }
  font-size: xx-large;
  margin-bottom: 2rem;
}

.board {
  display: grid;
  justify-content: center;
  align-content: center;
  justify-items: center;
  align-items: center;
  grid-template-columns: repeat(3, auto);
}

.cell {
  width: $cell-size;
  height: $cell-size;
  border: 1px solid black;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  cursor: pointer;
}

.cell:first-child,
.cell:nth-child(2),
.cell:nth-child(3) {
  border-top: none;
}

.cell:nth-child(3n + 1) {
  border-left: none;
}

.cell:nth-child(3n + 3) {
  border-right: none;
}

.cell:last-child,
.cell:nth-child(7),
.cell:nth-child(8) {
  border-bottom: none;
}

.cell.x,
.cell.circle {
  cursor: not-allowed;
}

.cell.x::before,
.cell.x::after {
  content: '';
  position: absolute;
  width: calc($mark-size * 0.15);
  height: $mark-size;
  background-color: black;
}

.cell.x::before {
  transform: rotate(45deg);
}

.cell.x::after {
  transform: rotate(-45deg);
}

.cell.circle::before,
.cell.circle::after {
  content: '';
  position: absolute;
  border-radius: 50%;
}

.cell.circle::before {
  width: $mark-size;
  height: $mark-size;
  background-color: black;
}

.cell.circle::after {
  width: calc($mark-size * 0.7);
  height: calc($mark-size * 0.7);
  background-color: white;
}
button:disabled.cell.circle::after {
  background-color: #5ccbf2;
}
</style>
