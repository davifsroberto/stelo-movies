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

export default {
  name: 'home',

  components: {
    MoviesGallery
  },

  props: ['urlMovie'],

  data: () => ({    
    results: [],
    totalResults: 6,
    totalPages: 2,
    categoria: '',
    paginacao: 0
  }),

  created() {    
    this.moviesService = new MoviesService();
    this.helperMovie = new HelperMovie();
  },

  mounted() {
    this.printMovies(this.$route.params.urlMovie);
    this.categoria = this.helperMovie.categoriaPage(this.$route.name);
    this.paginacao = this.helperMovie.paginacaoPage(this.totalResults, this.totalPages);
  },

  methods: {
    printMovies(url) {      
      this.moviesService
        .getMovies(this.urlMovie == undefined ? url = '5d4a06b03200005e00600f5c' : url = this.urlMovie)
        .then((response) => {
          console.log(response);
          this.results = response.data.results;
          this.totalPages = response.data.total_pages;
        })
        .catch((error) => {
          console.log(this.error);
        })
    },

    showDescricao(movie) {
      this.dialog = true;
      this.currentMovie = movie;
    }

  }
  
}
</script>