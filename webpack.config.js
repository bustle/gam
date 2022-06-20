const path = require('path')

const common = {
  entry: './index.ts',
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
  output: {
    filename: 'gam.js',
    library: 'gam',
    libraryTarget: 'umd',
    globalObject: 'this',
    umdNamedDefine: true
  },
  resolve: {
    extensions: ['.ts', '.d.ts', '.js']
  }
}

module.exports = () => [
  {
    ...common,
    target: 'node',
    output: {
      ...common.output,
      path: path.resolve('./dist/node/'),

    }
  },
  {
    ...common,
    target: 'web',
    output: {
      ...common.output,
      path: path.resolve('./dist/web/')
    }
  }
]

