import resolve from 'rollup-plugin-node-resolve'
import babel from 'rollup-plugin-babel'
import pkg from './package.json'

const plugins = [
  resolve(),
  babel({
    exclude: 'node_modules/**' // only transpile our source code
  })
]

export default {
  input: pkg.main,
  sourcemap: true,
  plugins: plugins,
  output: {
    file: `dist/${pkg.name}.js`,
    format: 'umd',
    name: pkg.name
  }
}
