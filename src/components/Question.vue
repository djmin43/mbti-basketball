<template>
  <div class="question">
      <p>what would you choose if you are..</p>
  </div>
  <div class="choices">
      <span>1</span>
      <span>2</span>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent ({
    name:"Question",
    setup() {
        console.log('setup')
        return {}
    }
})
</script>

<style>

.choices{
    display: grid;
    grid-template-columns: 1fr 1fr;
    text-align: center;
}

.choices span {
    margin: 0.5vw;
    padding: 5vw 0;
    border: solid 1px ;
    border-radius: 3px;
}
</style>