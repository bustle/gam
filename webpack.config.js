const path = require('path')

const common = {
  entry: './lib/gam.ts',
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.ts$/u,
        loader: 'esbuild-loader',
        options: {
          loader: 'ts',
          target: 'es2015'
        }
      }
    ]
  },
  resolve: {
    extensions: ['.ts']
  }
}

module.exports = () => [
  {
    ...common,
    target: 'node',
    output: {
      path: path.resolve(__dirname, './dist/node/')
    }
  },
  {
    ...common,
    target: 'web',
    output: {
      path: path.resolve(__dirname, './dist/web/')
    }
  }
]

