module.exports = {
  transpileDependencies: [
    'vuetify'
  ],
  css: {
    extract: true // 确保生产环境下 CSS 被提取成独立文件
  },
  configureWebpack: {
    optimization: {
      minimize: false // 禁用代码混淆
    }
  },
  pluginOptions: {
    htmlWebpackPlugin: {
      options: {
        title: 'Lonnet\'s Blog'
      }
    }
  }
};