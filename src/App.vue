<template>
  <div id="app">
    <GameControlHeader :score="score" v-on:new-game-click="resetGame" />
    <h2>Pick the following Color:</h2>
    <h1>{{colors.right}}</h1>
    <div class="color-row" v-if="colors.picked === ''">
      <ColorChoiceButton
        v-for="color in colors.choices"
        :key="color"
        :color="color"
        @click="pickColor(color)"
      />
    </div>
    <div v-if="colors.picked !== ''" class="color-row">
      <div class="color-result" :style="{borderColor: colors.right}">Target color {{colors.right}}</div>
      <div
        style="display: flex; flex-direction: column; justify-content: space-between; align-items: center;"
      >
        <div style="height: 20px"></div>
        <button
          @click="setFreshColors"
          style="width: 100px; height: 50px; border: 2px solid black; background: white; font-weight: bold"
        >Next Round</button>
        <div style="height: 20px; padding-top: 6px;">
          <div v-if="colors.picked !== ''">You picked the right color.</div>
          <div v-else>You picked the wrong color</div>
        </div>
      </div>
      <div class="color-result" :style="{borderColor: colors.picked}">You picked {{colors.picked}}</div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import ColorChoiceButton from "@/components/ColorChoiceButton";
import GameControlHeader from "@/components/GameControlHeader";
import { reactive } from "vue";
import { getRandomColor } from "@/utils/getRandomColor";

export default {
  components: {
    GameControlHeader,
    ColorChoiceButton
  },
  setup() {
    const score = reactive({
      lost: 0,
      won: 0
    });

    const colors = reactive({
      picked: "",
      right: "",
      choices: ["", "", ""]
    });

    function pickColor(color = "") {
      colors.picked = color;
      if (colors.picked === colors.right) {
        //round won
        score.won++;
      } else {
        //round lost
        score.lost++;
      }
    }
    function setFreshColors() {
      colors.choices[0] = getRandomColor();
      colors.choices[1] = getRandomColor();
      colors.choices[2] = getRandomColor();

      // we should detect the rare case that we get the same color twice and generate colors again

      const randomChoice = Math.round(Math.random() * 2);
      colors.right = colors.choices[randomChoice];
      colors.picked = "";
    }
    function resetGame() {
      score.won = 0;
      score.lost = 0;
      setFreshColors();
    } //new colors, score = 0

    resetGame();

    return { pickColor, resetGame, setFreshColors, score, colors };
  }
};
</script>

<style>
* {
  box-sizing: border-box;
}

body {
  margin: 0;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}

.color-row {
  display: flex;
  justify-content: center;
  align-items: center;
}

.color-result {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 200px;
  border: 20px solid;
  height: 100px;
  margin: 0 50px;
  font-size: 12px;
  font-weight: bold;
}
</style>
