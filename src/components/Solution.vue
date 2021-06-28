<template>
  <div>
      당신은:
      {{ temperament }}
      <button @click="$emit('test')" >click me</button>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed, toRefs } from "vue";

export default defineComponent({
  name: "Solution",
  props: {
    temperament: String,
  },
  emits: ['test'],
    setup(props) {
      


    return {

}
    }

});
</script>

<style>

</style>