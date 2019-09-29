<template>
  <div v-if="this.movies" id="moviesGallery">
    <v-container class="col-sm-8 offset-sm-2">
      <v-row>      
        <h1 class="col-sm-12">{{this.titulo}}</h1>
        <v-col class="col-md-4 col-lg-3 col-xl-3 col-12" v-for="m in movies.results" :key="m.id">
          <v-card>
            <v-card-title>{{m.title}}</v-card-title>
            <span class="grey--text pl-3"><strong>Exibição:</strong> {{m.release_date | moment("dddd, DD/MM/YYYY")}}</span><br>
            <span class="grey--text pl-3"><strong>Nota:</strong> {{m.vote_average}}</span>
          
            <img class="img-movie mt-1" :src="`https://image.tmdb.org/t/p/original/${m.poster_path}`"/>
            <v-btn class="btn-desc" @click="showDescricao(m)" large v-if="m.overview != ''" text color="#4F237F" dark>Descrição</v-btn>
          </v-card>
        </v-col>

        <div class="text-center pb-2">
          <v-dialog v-model="dialog" width="500">
            <v-card>
              <v-card-text class="pt-3">{{currentMovie.overview}}</v-card-text>
              <v-divider></v-divider>
              <v-card-actions>
                <div class="flex-grow-1"></div>
                <v-btn text color="primary" @click="dialog = false">Voltar</v-btn>
              </v-card-actions>
            </v-card>
          </v-dialog>
        </div>
      </v-row>      
    </v-container>
  </div>
</template>

<script>
import { getPopulares } from "../service/moviesService.js";

export default {  
  props: {
    titulo: {
      type: String
    },
    movies: {
      type: Object
    }
  },

  data: () => ({
    show: false,
    dialog: false,
    currentMovie: {},
    page: 1
  }),

  methods: {
    fetchMovies() {
      getPopulares().then(movies => {
        this.movies = movies;
      });
    },

    showDescricao(movie) {
      this.dialog = true;
      this.currentMovie = movie;
    }    
  }
};
</script>