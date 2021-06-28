<template>
  <div class="container">
      <Question />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Question from "./Question.vue"

export default defineComponent({
  name: "QuizContainer",
  components: {
      Question,
  },

});
</script>

<style>
    .container {
        width: 500px;
        height: 500px;
        margin: 5vw auto;
        padding: 5vw;
        box-shadow: rgba(0, 0, 0, 0.15) 0px 2px 8px;
    }
</style>