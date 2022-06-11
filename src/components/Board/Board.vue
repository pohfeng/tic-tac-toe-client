<template>
  <main>
    <div class="board" id="board">
      <div class="cell x" data-cell></div>
      <div class="cell circle" data-cell></div>
      <div class="cell" data-cell></div>
      <div class="cell" data-cell></div>
      <div class="cell" data-cell></div>
      <div class="cell" data-cell></div>
      <div class="cell" data-cell></div>
      <div class="cell" data-cell></div>
      <div class="cell" data-cell></div>
    </div>
  </main>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
@import '../../assets/variables.scss';

main {
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
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
</style>
