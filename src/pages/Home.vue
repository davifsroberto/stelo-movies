<template>
  <article id="home">

    <movies-gallery
      :results="this.result"
      :totalResults="totalResults"
      :paginacao="paginacao"
      :categoria="categoria"
    ></movies-gallery>
    
  </article>
</template>

<script>
import MoviesGallery from "@/components/MoviesGallery";
import MoviesService from "@/service/MoviesService";
import HelperMovie from "@/helpers/HelperMovie";
import categoria from "@/helpers/categoria"
import store from "@/store/Store";
import { mapActions } from "vuex";

export default {
  name: "home",

  components: {
    MoviesGallery
  },

  props: ["urlMovie"],

  data: () => ({    
    results: [],
    totalResults: 8,    
    categoria: "",
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
        .getMovies(this.urlMovie == undefined ? url = categoria.populares.url : url = this.urlMovie)
        .then((response) => {          
          this.setMovies(response.data.results);
        })
        .catch((error) => {
          console.log(this.error);
        })
    },

    showDescricao(movie) {
      this.dialog = true;
      this.currentMovie = movie;
    },

    ...mapActions("Movies", ["setMovies"])

  },

  computed: {
    result: () => store.getters["Movies/result"]
  }
  
}
</script>