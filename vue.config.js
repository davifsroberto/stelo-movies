module.exports = {
  lintOnSave: false,
  devServer: {
    open: process.platform === "darwin",
    host: "localhost",
    port: 8095,
    https: false,
    hotOnly: false
  },  
  css: {
    loaderOptions: {
      sass: {
        data: `@import "~@/sass/main.scss"`,
      }
    }
  }
}