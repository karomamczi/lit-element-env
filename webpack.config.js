const { join } = require('path');

module.exports = {
  mode: 'none',
  entry: {
    main: './api/api.js',
  },
  module: {
    rules: [
      {
        test: /.js/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
            plugins: ['@babel/plugin-proposal-class-properties'],
          },
        },
      },
    ],
  },
  resolve: {
    extensions: ['.js'],
  },
  output: {
    path: join(__dirname, 'dist'),
    filename: 'api.js',
    library: 'api',
  },
};
