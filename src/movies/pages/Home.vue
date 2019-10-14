<template>
  <div id='home'>

    <movies-gallery
      :results='results'
      :totalResults='totalResults'
      :paginacao='paginacao'
      :categoria='categoria'
    ></movies-gallery>
    
  </div>
</template>

<script>
import MoviesGallery from '../components/MoviesGallery';
import MoviesService from '../service/MoviesService';
import HelperMovie from '../helpers/HelperMovie';
import { mapState, mapActions } from 'vuex';

export default {
  name: 'home',

  components: {
    MoviesGallery
  },

  props: ['urlMovie'],

  data: () => ({    
    results: [],
    totalResults: 10,    
    categoria: '',
    paginacao: 0,
    
  }),

  created() {    
    this.moviesService = new MoviesService();
    this.helperMovie = new HelperMovie();
  },

  mounted() {
    this.printMovies(this.$route.params.urlMovie);
    this.categoria = this.helperMovie.categoriaPage(this.$route.name);    
  },

  methods: {
    printMovies(url) {      
      this.moviesService
        .getMovies(this.urlMovie == undefined ? url = '5d4a06b03200005e00600f5c' : url = this.urlMovie)
        .then((response) => {
          const listMovies = response.data.results;
          this.results = listMovies;          
          this.setMovies(this.results)
        })
        .catch((error) => {
          console.log(this.error);
        })
    },

    showDescricao(movie) {
      this.dialog = true;
      this.currentMovie = movie;
    },

    ...mapActions('Movies', ['setMovies'])

  },

  computed: {
    
  }
  
}
</script>