const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  configureWebpack: {
    externals: {
      // global app config object
      config: JSON.stringify({
        apiUrl: 'http://localhost:8000'
      })
    }
  }
})
