<script setup></script>

<template>
  <header>
    <h1>Tic-Tac-Toe</h1>
  </header>
  <main>
    <router-view></router-view>
  </main>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
body {
  margin: 0;
}

*,
*::before,
*::after {
  box-sizing: border-box;
}
</style>
