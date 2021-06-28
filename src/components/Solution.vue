<template>
  <div class="solutionContainer">
    <div v-if="!solutionData">
      <img class="adamSilver" src="https://www.reviewjournal.com/wp-content/uploads/2019/07/12395410_web1_NBA-Sports-Betting-Basketball_6425665.jpg?crop=1">
      <button class="calculateButton" v-if="!solutionData" @click="$emit('test')" >나의 마음속 깊이 자리잡은 농구선수는?</button>
      <p><i>위 버튼을 눌러주세요 ↑↑↑</i></p>
    </div>
    <div v-if="solutionData">
        <h4>유형: {{ temperament }}</h4>
        <img class="playerPhoto" :src="solutionData.image" key="photo" />
        <h2>당신은 {{ solutionData.name}} 입니다!</h2>
        <p class="playerDescription">{{ solutionData.description }} </p>
    </div>

  </div>
</template>

<script lang="ts">
import { defineComponent, computed, toRefs } from "vue";

export default defineComponent({
  name: "Solution",
  props: {
    temperament: String,
    solutionData: Object
  },
  emits: ['test'],
    setup(props) {
      
    return {

    }
    }

});
</script>

<style>
  .solutionContainer {
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
  }

  .playerPhoto {
    object-fit: contain;
    width: 500px;
  }

  .calculateButton {
    color: #fff;
    background: #9a0036;
    padding:2vw;
    border: none;
    border-radius: 10px;
    font-size: 24px;

  }

  .calculateButton:active {
    background: #dc004e;
  }

  .playerDescription {
    text-align: left
  }

  .adamSilver {
    display: block;
    object-fit: contain;
    height: 30vw;
    margin: 1vw auto;
  }

</style>