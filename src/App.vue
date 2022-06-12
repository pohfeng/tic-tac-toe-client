<template>
  <header>
    <nav>
      <img
        class="home-icon"
        src="/src/assets/house-chimney-solid.svg"
        alt="home icon"
        @click="redirectToHomePage"
      />
    </nav>
    <h1>Tic-Tac-Toe</h1>
  </header>
  <main>
    <router-view></router-view>
  </main>
</template>

<script>
export default {
  methods: {
    redirectToHomePage() {
      this.$router.replace({ name: 'home' })
    }
  }
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
nav {
  height: 2em;
  padding-right: 1rem;

  & .home-icon {
    height: 100%;
    width: 3rem;
    cursor: pointer;
  }
}

header {
  h1 {
    margin: 0;
  }
  height: 3rem;
  margin: 2rem 0;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
}
body {
  margin: 0;
  background-image: linear-gradient(135deg, #3c8ce7 10%, #00eaff 100%);
  font-size: 1.5rem;
}

main {
  margin: auto;
  display: flex;
  height: calc(100vh - 7rem);
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: white;
}

*,
*::before,
*::after {
  box-sizing: border-box;
}
</style>
