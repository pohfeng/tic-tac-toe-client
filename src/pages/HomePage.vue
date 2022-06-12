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
.buttons-container {
  display: flex;
  flex-direction: column;

  & button {
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
}
</style>
