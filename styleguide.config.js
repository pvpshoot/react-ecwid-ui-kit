const path = require('path');

module.exports = {
  title: 'React Ecwid Ui kit',
  // defaultExample: true,
  components: './src/react-ecwid-ui-kit/components/**/*.js',
  updateWebpackConfig(webpackConfig) {
    const dir = path.resolve(__dirname, 'src');
    webpackConfig.module.loaders.push({
      test: /\.(js|jsx)$/,
      include: dir,
      loader: 'babel',
      query: {

          // This is a feature of `babel-loader` for webpack (not Babel itself).
          // It enables caching results in ./node_modules/.cache/babel-loader/
          // directory for faster rebuilds.
        cacheDirectory: true,
      },
    }, { test: /\.css$/, include: dir, loader: 'style!css?importLoaders=1' });
    return webpackConfig;
  },
};
