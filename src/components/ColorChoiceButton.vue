<template>
  <button :style="{backgroundColor: color}"></button>
</template>

<script>
export default {
  props: {
    color: String
  }
};
</script>

<style scoped>
button {
  height: 100px;
  width: 200px;
  margin: 0 50px;
}
</style>