const path = require("path")

const common = {
  entry: "./index.ts",
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
    extensions: ['.ts', '.d.ts']
  }
}

module.exports = () => [
  {
    ...common,
    target: 'node',
    output: {
      path: path.resolve('./dist/node/')
    }
  },
  {
    ...common,
    target: 'web',
    output: {
      path: path.resolve('./dist/web/')
    }
  }
]

