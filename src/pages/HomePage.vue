<template>
  <div>
    <button @click="createRoom">Create A room</button>
    <button @click="joinRoom">Join A room</button>
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
    async createRoom() {
      await this['room/createRoom']({
        url: 'http://localhost:3001'
      })
      this.$router.push({ name: 'create-room-page' })
    },
    joinRoom() {
      this.$router.push({ name: 'join-room-page' })
    }
  }
}
</script>

<style lang="scss" scoped></style>
