import path from 'path'

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
    extensions: ['.ts', '.d.ts']
  }
}

const config = [
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

export default config
