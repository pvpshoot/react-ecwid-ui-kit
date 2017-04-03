const path = require('path');

module.exports = {
  title: 'React Ecwid Ui kit',
  // defaultExample: true,
  sections: [
    {
      name: 'Grid system',
      content: './src/react-ecwid-ui-kit/components/Grid/Readme.md',
    },
    {
      name: 'UI Components',
      // content: 'docs/ui.md',
      components: './src/react-ecwid-ui-kit/components/**/*.js',
    },
  ],
  styleguideDir: 'docs',
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
    },
    { test: /\.css$/, include: [dir, /flexboxgrid/], loader: 'style!css?importLoaders=1' },
    { test: /\.svg$/, include: dir, loader: 'file', query: { name: 'static/media/[name].[hash:8].[ext]' } });
    return webpackConfig;
  },
};
