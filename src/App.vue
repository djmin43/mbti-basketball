<template>
  <div class="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/quiz">Quiz</router-link>
  </div>
  <div>
    <router-view />
  </div>
</template>

<style>
#app {
  display: flex;
  flex-direction: column;
  font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  font-size: 18px;
  }

.nav {
  margin: auto;
}
</style>
