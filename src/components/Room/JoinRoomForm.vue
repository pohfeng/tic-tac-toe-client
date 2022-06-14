<template>
  <Transition name="slide" appear>
    <section>
      <div>
        <h2>Please enter a room id to start the game!</h2>
        <form @submit.prevent="onSubmit">
          <input type="text" v-model="roomId" />
          <button type="submit">Start!</button>
        </form>
      </div>
    </section>
  </Transition>
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
        url: import.meta.env.VITE_SERVER_URL || 'http://localhost:3000',
        roomId: this.roomId
      })
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../../styles/button';
@import '../../styles/slideEffect';
@include button-mixin;
@include slide-effect;

section,
form {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

section {
  padding: 0 1rem;
}

input {
  width: 100%;
  padding: 1rem 2rem;
  outline: none;
  font-size: xx-large;
  border-radius: 1rem;
}
</style>
