const { defineConfig } = require('@vue/cli-service');
const BundleTracker = require('webpack-bundle-tracker');

module.exports = defineConfig({
  publicPath: '/', // app이 배포될 root url
  //FIXME: CloudHIS-BackEnd -> 환경변수로 추출하는편이 좋아보임
  outputDir: '../CloudHIS-BackEnd/dist', // app이 배포될 경로
  assetsDir: 'static', // static 폴더를 정의하는 경로

  configureWebpack: {
    module: {
      rules: [
        {
          test: /\.(s*)css$/,
          use: ['postcss-loader']
        }
      ]
    }
  },

  chainWebpack: (config) => {
    config.optimization.splitChunks(false);

    // webpack-stats.json을 django로 전달하여 사용하기 위한 코드
    //FIXME: CloudHIS-BackEnd -> 환경변수로 추출하는편이 좋아보임
    config
      .plugin('BundleTracker')
      .use(BundleTracker, [{ filename: '../CloudHIS-BackEnd/webpack-stats.json' }]);

    config.devServer
      .host('0.0.0.0')
      .port(8080)
      .https(false)
      .headers({ 'Access-Control-Allow-Origin': ['*'] });
  },

  pages: {
    index: 'src/main.js',
  },
});
