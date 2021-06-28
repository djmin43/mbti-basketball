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

        margin: 1vw auto;
        padding: 3vw;
        box-shadow: rgba(0, 0, 0, 0.15) 0px 2px 8px;
        text-align: center;
    }
</style>