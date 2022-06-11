<template>
  <div>Please enter a room id to start the game!</div>
  <form @submit.prevent="onSubmit">
    <input type="text" v-model="roomId" />
    <button type="submit">Start!</button>
  </form>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  data() {
    return {
      roomId: ''
    }
  },
  methods: {
    ...mapActions('room', ['joinRoom']),
    onSubmit() {
      this.joinRoom({
        url: 'http://localhost:3001',
        roomId: this.roomId
      })
    }
  }
}
</script>

<style lang="scss" scoped></style>
