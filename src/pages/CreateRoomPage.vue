<template>
  <div>
    <div>Your room Id is</div>
    <div>{{ roomId }}</div>
    <div>Send this room id to your friend for him/her to join the game.</div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  computed: {
    ...mapState('room', ['roomId'])
  }
}
</script>

<style lang="scss" scoped></style>
