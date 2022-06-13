<template>
  <header>
    <div class="title">
      <nav>
        <img
          class="home-icon"
          src="/src/assets/house-chimney-solid.svg"
          alt="home icon"
          @click="redirectToHomePage"
        />
      </nav>
      <h1>Tic-Tac-Toe</h1>
    </div>
    <h3>By <a href="https://www.pf-pang.com/" class="creator">Poh Feng</a></h3>
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
  font-family: Montserrat 300, Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.creator {
  font-family: Satisfy, 'Courier New', Courier, monospace;
  text-decoration: none;
  color: black;
  cursor: pointer;
}

input,
button {
  font-family: inherit;
}

header {
  h1,
  h3 {
    margin: 0;
  }
  height: 3rem;
  margin: 2rem 0;
  color: white;

  .title {
    display: flex;
    justify-content: center;
    align-items: center;

    & nav {
      height: 2em;
      padding-right: 1rem;

      & .home-icon {
        height: 100%;
        width: 3rem;
        cursor: pointer;
      }
    }
  }
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
