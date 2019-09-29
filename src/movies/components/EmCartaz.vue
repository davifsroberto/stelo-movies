<template>
  <div id="emCartaz">    
    <MoviesGallery titulo="Em Cartaz" :movies=movies />    
  </div>    
</template>

<script>
import MoviesGallery from "./MoviesGallery";
import { getEmCartaz } from "../service/moviesService.js";

export default {
  data: () => ({
    movies: {},
  }),
  components: {
    MoviesGallery
  },
  methods: {
    fetchMovies() {
      getEmCartaz().then(movies => {
        this.movies = movies;
      });
    }
  },
  mounted(){
    this.fetchMovies();
  }
}
</script>