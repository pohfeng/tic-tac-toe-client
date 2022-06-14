<template>
  <div class="buttons-container">
    <Transition name="slide" appear>
      <button @click="createRoom">Create room</button>
    </Transition>
    <Transition name="slide" appear>
      <button @click="joinRoom">Join room</button>
    </Transition>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import Board from '../components/Board/Board.vue'

export default {
  components: {
    Board
  },
  methods: {
    ...mapActions(['room/createRoom', 'ui/setIsLoading']),
    createRoom() {
      this['ui/setIsLoading'](true)
      this['room/createRoom']({
        url: import.meta.env.VITE_SERVER_URL || 'http://localhost:3000'
      })
    },
    joinRoom() {
      this.$router.push({ name: 'join-room-page' })
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../styles/button';
@import '../styles/slideEffect';

@include button-mixin;
@include slide-effect;
.buttons-container {
  display: flex;
  flex-direction: column;
}
</style>
