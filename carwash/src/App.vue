<template>
  <main id="app">

<navigation-bar></navigation-bar>
<Footer></Footer>
<router-view></router-view>

</main>
</template>

<script>
import NavigationBar from './components/NavigationBar.vue';
import Footer from './components/Footer.vue';


export default {
  name: 'App',
  components: {
    NavigationBar, Footer
  }
}
</script>

<style scoped>
#app {
  background: linear-gradient(to right, rgb(13, 27, 87), rgb(22, 120, 185));
}

</style>