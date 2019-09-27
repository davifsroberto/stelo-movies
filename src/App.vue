<template>
  <div id="app">
    <v-app>
      <v-toolbar dark prominent color="#4F237F">
        <v-toolbar-items>
          <v-btn text><router-link class="nav-link" to="/">Populares</router-link></v-btn>
          <v-btn text><router-link class="nav-link" to="/cartaz">Em Cartaz</router-link></v-btn>
          <v-btn text><router-link class="nav-link" to="/avaliados">Mais bem avaliados</router-link></v-btn>
          <v-btn text><router-link class="nav-link" to="/estreias">Próximas Estreias</router-link></v-btn>
        </v-toolbar-items>
      </v-toolbar>
      <div>
        <router-view></router-view>
      </div>
      <footer class="text-center">
        <v-card color="#4F237F">
          <div class="container">
            <p class="my-2 text-footer">© 2019 Davi Roberto + Stelo Soluções de Pagamentos<br>Desenvolvido por
              <a href="https://www.linkedin.com/in/davifsroberto/" target="_blank">Davi Roberto</a>
            </p>
          </div>
        </v-card>
      </footer>
    </v-app>
  </div>
</template>

<script>
export default {
  name: "App"
};
</script>

<style>
.text-footer {
  color: #fff;
  font-weight: 300;
}
</style>
