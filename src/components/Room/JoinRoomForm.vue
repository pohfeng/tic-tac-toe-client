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

button {
  font-size: xxx-large;
  cursor: pointer;
  background-image: linear-gradient(
    to right,
    #83a4d4 0%,
    #b6fbff 51%,
    #83a4d4 100%
  );
  margin: 2rem;
  padding: 15px 45px;
  text-align: center;
  text-transform: uppercase;
  transition: 0.5s;
  background-size: 200% auto;
  color: black;
  border-radius: 10px;
  display: block;

  &:hover {
    background-position: right center; /* change the direction of the change here */
    color: black;
    text-decoration: none;
  }
}
</style>
