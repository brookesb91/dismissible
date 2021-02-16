const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');

const PATHS = {
  src: path.resolve(__dirname, 'src'),
  dist: path.resolve(__dirname, 'dist'),
};

module.exports = {
  entry: `${PATHS.src}/dismissible.js`,
  output: {
    path: PATHS.dist,
    filename: 'dismissible.js',
  },
  plugins: [
    new CopyWebpackPlugin({
      patterns: [
        { from: `${PATHS.src}/dismissible.css`, to: PATHS.dist },
        { from: './package.json', to: PATHS.dist },
      ],
    }),
  ],
};
