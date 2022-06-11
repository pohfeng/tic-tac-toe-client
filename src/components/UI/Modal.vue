<template>
  <Teleport to="modal">
    <div class="overlay">
      <slot></slot>
    </div>
  </Teleport>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.overlay {
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  z-index: 20;
  background-color: rgba(0, 0, 0, 0.65);
}
</style>
