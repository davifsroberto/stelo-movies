<template>
  <article id="app">
    <div id="loading"></div>
    <v-app>

      <Header />

      <section>
        <router-view :key="$route.fullPath"></router-view>
      </section>

      <Footer />

    </v-app>
  </article>
</template>

<script>
import categoria from "@/helpers/categoria"
import Header from "@/components/Header"
import Footer from "@/components/Footer"

export default {
  name: "App",

  components: {
    Header,
    Footer
  },

  data: () => ({
    categoriaMovie: {}
  }),

  created() {
    this.categoriaMovie = categoria;
  }
  
};
</script>