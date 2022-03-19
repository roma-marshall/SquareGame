<template>
  <div class="app">
    <img class="logo" alt="Vue logo" src="./assets/logo.png">
    <h1>The Game in Vuejs3</h1>
    <p>Remember and open all the green fields</p>
    <GameBoard />
  </div>
</template>

<script>
import GameBoard from "@/components/GameBoard";

export default {
  name: 'App',
  components: {
    GameBoard
  }
}
</script>

<style scoped>
.app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  text-align: center;
  margin-top: 40px;
}
.logo {
  width: 100px;
}
</style>
