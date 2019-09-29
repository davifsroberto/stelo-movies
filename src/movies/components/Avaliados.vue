<template>
  <div id="avaliados">    
    <MoviesGallery titulo="Mais Bem Avaliados" :movies=movies />    
  </div>    
</template>

<script>
import MoviesGallery from "./MoviesGallery";
import { getAvaliados } from "../service/moviesService.js";

export default {
  data: () => ({
    movies: {},
  }),

  components: {
    MoviesGallery
  },

  methods: {
    fetchMovies() {
      getAvaliados().then(movies => {
        this.movies = movies;
      });
    }
  },
  
  mounted(){
    this.fetchMovies();
  }
}
</script>