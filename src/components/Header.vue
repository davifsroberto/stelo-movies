<template>
  <article id="header">
    <div id="loading"></div>
    
    <header>
      <v-row>
        <v-col class="col-sm-8 offset-sm-2">
          <v-card>
            <v-card-title>              
              <v-text-field hide-details class="mx-2 pt-0" label="Pesquisar Filmes" prepend-inner-icon="search"></v-text-field>                
    
              <div class="flex-grow-1"></div>
    
              <v-menu bottom left>
                <template v-slot:activator="{ on }">
                  <v-btn icon v-on="on">
                    <v-icon>mdi-dots-vertical</v-icon>
                  </v-btn>
                </template>    
                <v-list>                                     
                  <v-list-item>
                    <router-link 
                      :to="{ 
                        name: this.categoriaMovie.populares.nome 
                      }">
                    {{this.categoriaMovie.populares.descricao}}</router-link>
                  </v-list-item>        

                  <v-list-item>
                    <router-link 
                      :to="{ 
                        name: this.categoriaMovie.avaliados.nome, 
                        params: { 
                          urlMovie: this.categoriaMovie.avaliados.url 
                        } 
                      }"
                    >{{this.categoriaMovie.avaliados.descricao}}</router-link>
                  </v-list-item>                  

                  <v-list-item>
                    <router-link 
                      :to="{ 
                        name: this.categoriaMovie.estreias.nome, 
                        params: { 
                          urlMovie: this.categoriaMovie.estreias.url 
                        } 
                      }">
                    {{this.categoriaMovie.estreias.descricao}}</router-link>
                  </v-list-item>                               

                    <v-list-item>
                    <router-link 
                      :to="{ 
                        name: this.categoriaMovie.cartaz.nome, 
                        params: { 
                          urlMovie: this.categoriaMovie.cartaz.url 
                        } 
                      }">
                    {{ this.categoriaMovie.cartaz.descricao }}</router-link>
                  </v-list-item>                                    
                </v-list>
              </v-menu>
            </v-card-title>
          </v-card>
        </v-col>
      </v-row>
    </header>

  </article>
</template>

<script>
import categoria from "@/helpers/categoria";

export default {
  name: "Header",

  data: () => ({
    categoriaMovie: {}
  }),

  created() {
    this.categoriaMovie = categoria;
  }
}
</script>

<style lang="scss">
#header { 
  background-color: $color-default; 
};
</style>