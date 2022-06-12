<template>
  <div>
    <div>Your room Id is</div>
    <div class="room-id">
      <span>{{ roomId }}</span>
      <img
        class="copy-icon"
        src="/src/assets/copy.svg"
        alt="copy icon"
        @click="copyRoomId"
      />
    </div>
    <p>Send this room id to your friend for him/her to join the game.</p>
    <div>
      <span>Game will start after Player 2 join </span>
      <span class="spinner"></span>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  computed: {
    ...mapState('room', ['roomId'])
  },
  methods: {
    copyRoomId() {
      navigator.clipboard.writeText(this.roomId)
    }
  }
}
</script>

<style lang="scss" scoped>
.room-id {
  padding: 0.5rem 2rem;
  margin: 1rem 0;
  display: flex;
  justify-content: space-between;
  font-size: 1.5rem;
  text-align: left;
  background-color: rgba(#ddd, 0.5);
  border-radius: 0.5rem;
}
.copy-icon {
  width: 1.5rem;
  height: 1.5rem;
  cursor: pointer;
}

.spinner {
  /* Spinner size and color */
  width: 1.5rem;
  height: 1.5rem;
  border-top-color: #444;
  border-left-color: #444;

  /* Additional spinner styles */
  animation: spinner 400ms linear infinite;
  border-bottom-color: transparent;
  border-right-color: transparent;
  border-style: solid;
  border-width: 2px;
  border-radius: 50%;
  box-sizing: border-box;
  display: inline-block;
  vertical-align: middle;
  animation: spinner 1s linear infinite;
}

@keyframes spinner {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
