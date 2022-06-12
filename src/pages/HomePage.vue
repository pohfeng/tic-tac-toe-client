<template>
  <div class="buttons-container">
    <button @click="createRoom">Create room</button>
    <button @click="joinRoom">Join room</button>
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
    ...mapActions(['room/createRoom']),
    createRoom() {
      this['room/createRoom']({
        url: 'http://localhost:3001'
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
.buttons-container {
  display: flex;
  flex-direction: column;

  @include button-mixin;
}
</style>
