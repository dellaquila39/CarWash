<template>
  <main id="app">
    <v-app-bar app>
      <navigation-bar></navigation-bar>
    </v-app-bar>

    <v-maim>
      <Start></Start>
    </v-maim>
    
    <v-footer>
      <Footer></Footer>
    </v-footer>

<router-view></router-view>
</main>
</template>

<script>
import NavigationBar from './components/NavigationBar.vue';
import Footer from './components/Footer.vue';
import Start from './views/Start.vue';


export default {
  name: 'App',
  components: {
    NavigationBar, Footer, Start
  }
}
</script>

<style>
#app {
  background: linear-gradient(to right, rgb(13, 27, 87), rgb(22, 120, 185));
}

</style>