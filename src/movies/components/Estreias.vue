<template>
  <div id="estreias">    
    <MoviesGallery titulo="Próximas Estreias" :movies=movies />    
  </div>    
</template>

<script>
import MoviesGallery from "./MoviesGallery";
import { getEstreias } from "../service/moviesService.js";

export default {
  data: () => ({
    movies: {}
  }),
  components: {
    MoviesGallery
  },
  methods: {
    fetchMovies() {
      getEstreias().then(movies => {
        this.movies = movies;
      });
    }
  },
  mounted() {
    this.fetchMovies();
  }
}
</script>