<template>
  <div v-if="this.movies" id="moviesGallery">
    <v-container>
      <h1>{{this.titulo}}</h1>
      <v-row class="col-8 offset-2">
        <v-col class="col-sx-12 col-sm-12 col-md-4 col-lg-3 col-xl-3" v-for="m in movies.results" :key="m.id">
          <v-card>
            <v-card-title>{{m.title}}</v-card-title>
              <v-row>
                <v-col class="col-12">
                  <span class="grey--text subtitle-4 pl-3"><strong>Estreia:</strong> {{m.release_date | moment("dddd, DD/MM/YYYY")}}</span><br>
                  <span class="grey--text subtitle-4 pl-3"><strong>Nota:</strong> {{m.vote_average}}</span>
                </v-col>
              </v-row>
              <v-row>
                <v-col class="pb-0">
                  <img class="img-movie" :src="`https://image.tmdb.org/t/p/original/${m.poster_path}`"/>
                </v-col>
              </v-row>
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
import { getPopulares } from "./moviesService.js";

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

<style>
.img-movie {
  width: 100%;
}
.btn-desc {
  width: 100%;
}
</style>
