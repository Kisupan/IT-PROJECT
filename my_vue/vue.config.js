const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  configureWebpack: {
    performance: {
      hints: 'error',
      maxAssetSize: 300000000,
      maxEntrypointSize: 10000000
    }
  }
})
