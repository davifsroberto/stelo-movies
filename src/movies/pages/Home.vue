<template>
  <div id="home">
    
    <movies-gallery
      :results="results"
      :totalResults="totalResults"
      :totalPages="totalPages"
    ></movies-gallery>
    
  </div>
</template>

<script>
import MoviesGallery from "../components/MoviesGallery";
import MoviesService from "../service/MoviesService";

export default {
  name: "Home",

  components: {
    MoviesGallery
  },

  props: ['urlMovie'],

  data () {
    return {
      results: [],
      totalResults: 5,
      totalPages: ''
    }
  },

  created() {    
    this.moviesService =  new MoviesService();
  },

  mounted() {
    this.printMovies(this.$route.params.urlMovie);    
  },

  methods: {
    printMovies(url) {      
      this.moviesService
        .getMovies(this.urlMovie == undefined ? url = '5d4a06b03200005e00600f5c' : url = this.urlMovie)
        .then((response) => {
          this.results = response.data.results;
          this.totalPages = response.data.total_pages;
        })
        .catch((error) => {
          console.log(this.error);
        })
    }

  }
  
}
</script>

<style>

</style>