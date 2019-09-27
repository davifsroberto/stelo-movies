<template>
  <div id="populares">    
    <MoviesGallery titulo="Populares" :movies=movies />    
  </div>    
</template>

<script>
import MoviesGallery from "./MoviesGallery";
import { getPopulares } from "./moviesService.js";

export default {
  data: () => ({
    movies: {},
  }),
  components: {
    MoviesGallery
  },
  methods: {
    fetchMovies() {
      getPopulares().then(movies => {
        this.movies = movies;
      });
    }
  },
  mounted(){
    this.fetchMovies();
  }
}
</script>