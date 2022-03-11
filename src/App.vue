<template>
  <div id='app'>
    <Header />
    <router-view></router-view>
  </div>
</template>

<script>
import Header from '@/components/Header.vue'
export default {
  name: 'App',
  components: {
    Header
  }
}
</script>

<style >
#app {
  width: 100%;
  height: 100vh;
  min-width: 1300px;
}
</style>
