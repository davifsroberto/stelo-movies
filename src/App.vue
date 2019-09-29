<template>
  <div id="app">
    <v-app>

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
                    <v-list-item><router-link to="/">Populares</router-link></v-list-item>                  
                    <v-list-item><router-link to="/cartaz">Em Cartaz</router-link></v-list-item>                  
                    <v-list-item><router-link to="/avaliados">Mais bem avaliados</router-link></v-list-item>                  
                    <v-list-item><router-link to="/estreias">Próximas Estreias</router-link></v-list-item>                               
                  </v-list>
                </v-menu>
              </v-card-title>
            </v-card>
          </v-col>
        </v-row>
      </header>

      <section>
        <router-view></router-view>
      </section>

      <footer class="text-center">
        <div class="container">
          <p class="my-2">© 2019 Davi Roberto + Stelo Soluções de Pagamentos<br>Desenvolvido por
            <a href="https://www.linkedin.com/in/davifsroberto/" target="_blank">Davi Roberto</a>
          </p>
        </div>        
      </footer>

    </v-app>
  </div>
</template>

<script>

export default {
  name: "App"
};
</script>