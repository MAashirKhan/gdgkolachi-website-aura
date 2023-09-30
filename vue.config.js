const TerserPlugin = require("terser-webpack-plugin");

module.exports = {
  productionSourceMap: false,
  pwa: {
    name: 'GDG Web App',
    workboxPluginMode: 'InjectManifest',
    themeColor: '#4A90E2',
    workboxOptions: {
      swSrc: './src/sw.js',
      swDest: 'service-worker.js',
    },
  },
  configureWebpack: {
    optimization: {
      minimize: false,
      minimizer: [new TerserPlugin({
        terserOptions: {
          compress: {
            drop_console: true,
          },
        },
      })],
    },
  },
}
