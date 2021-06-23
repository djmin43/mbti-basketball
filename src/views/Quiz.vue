<template>
  <div class="about">
    <QuizContainer />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import QuizContainer from "../components/QuizContainer.vue";
export default defineComponent({
  name: "Quiz",
  components: {
    QuizContainer,
  },
});
</script>