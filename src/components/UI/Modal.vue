<template>
  <Teleport to="body">
    <Transition name="fade" appear>
      <div v-if="open" class="overlay">
        <slot></slot>
      </div>
    </Transition>
  </Teleport>
</template>

<script>
export default {
  props: {
    open: {
      type: Boolean,
      default: false
    }
  }
}
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
  background-color: rgba(0, 0, 0, 0.75);
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 1.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
