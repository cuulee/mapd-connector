module.exports = {
    entry: [
      './src/mapd-con-es6.js'
    ],
    output: {
        path: __dirname +'/dist/',
        filename: 'MapdCon.js'
    },
    module: {
      loaders: [
        {test: /\.js$/, loader: "babel-loader", exclude: /node_modules/}
      ]
    },
    ecmaFeatures: { modules: true }
};
