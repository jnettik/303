import commonjs from '@rollup/plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';
import babel from '@rollup/plugin-babel';
import terser from '@rollup/plugin-terser';

export default {
  input: 'src/aten-ceiling.js',
  output: {
    file: 'dist/js/aten-ceiling.js',
    format: 'iife',
    name: 'AtenCeiling',
    sourcemap: true,
  },
  plugins: [commonjs(), resolve(), babel({ babelHelpers: 'bundled' }), terser()],
};
