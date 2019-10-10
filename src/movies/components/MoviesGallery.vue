<template>
  <div id="moviesGallery">
    <v-container class="col-sm-8 offset-sm-2">
      <v-row>                      
        <!-- <h1 class="col-sm-12">{{this.titulo}}</h1> -->
        <v-col class="col-md-4 col-lg-3 col-xl-3 col-12" 
          v-for="(result, index) in results" :key="index">
          <v-card>
            <v-card-title>{{result.title}}</v-card-title>
            <span class="grey--text pl-3"><strong>Exibição:</strong> {{result.release_date | moment("dddd, DD/MM/YYYY")}}</span><br>
            <span class="grey--text pl-3"><strong>Nota:</strong> {{result.vote_average}}</span>
          
            <img class="img-movie mt-1" :src="`https://image.tmdb.org/t/p/original/${result.poster_path}`"/>
            <v-btn class="btn-desc" @click="showDescricao(result)" large v-if="result.overview != ''" text color="#4F237F" dark>Descrição</v-btn>
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

export default {  
  name: "movies-gallery",

  props: [
    'results',
    'totalPages',
    'totalResults',
    'categoria'
  ],

  data: () => ({
    show: false,
    dialog: false,
    currentMovie: {},
    page: 1
  }),
  
  methods: {
    showDescricao(movie) {
      this.dialog = true;
      this.currentMovie = movie;
    }    
  }
  
};
</script>