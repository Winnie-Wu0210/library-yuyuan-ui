<script setup>
import Header from './components/Header.vue'
import SideBar from './components/SideBar.vue'
</script>

<template>
  <div id="app">
    <Header/>
    <div class="app-pages">
      <SideBar/>
      <div class="router-view">
        <router-view/>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
#app {
  width: 100%;
  min-width: 1500px;
  height: 100vh;
  .app-pages {
    height: calc(100% - 55px);
    display: flex;
    .router-view {
      width: calc(100% - 220px);
      height: 100%;
    }
  }
}
</style>
