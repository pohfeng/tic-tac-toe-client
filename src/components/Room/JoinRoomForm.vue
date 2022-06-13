<template>
  <section>
    <h2>Please enter a room id to start the game!</h2>
    <form @submit.prevent="onSubmit">
      <input type="text" v-model="roomId" />
      <button type="submit">Start!</button>
    </form>
  </section>
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
      if (!this.roomId) return
      this.joinRoom({
        url: 'http://localhost:3001',
        roomId: this.roomId
      })
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../../styles/button';
@include button-mixin;

section,
form {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
input {
  padding: 1rem 2rem;
  outline: none;
  font-size: xx-large;
}
</style>
