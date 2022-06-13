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
@include button-mixin;
.buttons-container {
  display: flex;
  flex-direction: column;
}
</style>
