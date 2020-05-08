<template>
  <header
    style="background-color: rgb(27, 70, 110); display: flex; padding: 10px 300px; justify-content: space-around; align-items: center; font-weight: bold; color: white"
  >
    <button
      @click="newGame"
      style="width: 100px; height: 30px; background-color: white; border: 2px solid black; font-weight: bold"
    >New Game</button>
    <div>right: {{ score.won }}</div>
    <div>wrong: {{ score.lost }}</div>
  </header>
</template>

<script>
export default {
  props: {
    score: Object
  },
  setup() {
    function newGame() {
      this.$emit("new-game-click");
    }
    return { newGame };
  }
};
</script>

<style scoped>
</style>