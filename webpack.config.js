const path = require('path');

module.exports = (env) => ({
  entry: './src/index.js',
  mode: env.mode === 'development' ? 'development' : 'production',
  output: {
    filename: '[name][contenthash].js',
    path: path.resolve(__dirname, 'dist'),
    clean: true
  },
});