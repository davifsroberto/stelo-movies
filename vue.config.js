const globalSassFiles = [
  './src/sass/main.scss'
]

module.exports = {
  lintOnSave: false,

  chainWebpack: config => {
    const oneOfsMap = config.module.rule('scss').oneOfs.store
    oneOfsMap.forEach(item => {
        item
        .use('sass-resources-loader')
        .loader('sass-resources-loader')
        .options({
          resources: globalSassFiles
        })
        .end()
    })
  },
  
  devServer: {
    open: process.platform === 'darwin',
    host: 'localhost',
    port: 8095,
    https: false,
    hotOnly: false    
  }

}