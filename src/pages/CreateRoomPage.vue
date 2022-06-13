<template>
  <div>
    <div>Your room Id is</div>
    <div class="room-id">
      <span>{{ roomId }}</span>
      <img
        title="Copy room id"
        class="copy-icon"
        src="/src/assets/copy.svg"
        alt="copy icon"
        @click="copyRoomId"
      />
    </div>
    <p>Send this room id to your friend for him/her to join the game.</p>
    <div>
      <span>Game will start right after your opponent join </span>
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
      window.alert('The Room Id is Copied.')
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../styles/spinner';
@include spinner-mixin;
.room-id {
  display: flex;
  justify-content: space-between;
  font-size: 1.5rem;
  text-align: left;
  background-color: rgba(#ddd, 0.5);
  border-radius: 0.5rem;
  padding: 1rem 2rem;
  margin: 1rem 0;
}
.copy-icon {
  width: 1.5rem;
  height: 1.5rem;
  cursor: pointer;
}
</style>
