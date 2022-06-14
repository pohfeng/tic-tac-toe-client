<template>
  <Transition name="slide" appear>
    <section>
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
    </section>
  </Transition>
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
@import '../styles/slideEffect';

@include spinner-mixin;
@include slide-effect;

section {
  padding: 0 1rem;
}
.room-id {
  display: flex;
  justify-content: space-between;
  align-items: center;
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

@media (max-width: 480px) {
  .room-id {
    font-size: 1rem;
  }
}
</style>
