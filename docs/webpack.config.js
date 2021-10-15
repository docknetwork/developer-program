module.exports = {
  mode: 'production',
  entry: './webpack/index.js',
  output: {
    path: __dirname + '/assets/javascripts/',
    filename: "bundle.js"
  },
  module: {
    rules: [
      {
        test: /\.js$/i,
        include: __dirname + '/webpack/',
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
          },
        },
      },
      {
        test: /\.css$/i,
        include: __dirname + '/webpack/',
        use: ['style-loader', 'css-loader', 'postcss-loader'],
      },
    ],
  },
  devServer: {
    static: true,
  },
};
