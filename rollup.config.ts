import path from 'path'
import { defineConfig } from 'rollup'
import alias from '@rollup/plugin-alias'
import { nodeResolve } from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'
import externals from 'rollup-plugin-auto-external'
import typescript from 'rollup-plugin-typescript2'

export default defineConfig({
  input: './server/index.ts',
  output: {
    file: './dist/server/index.cjs',
    format: 'cjs',
  },
  plugins: [
    alias({
      entries: [
        { find: '~', replacement: path.resolve(__dirname, './app') },
        { find: '@server', replacement: path.resolve(__dirname, './server') },
      ],
    }),
    nodeResolve({
      extensions: ['.ts'],
    }),
    commonjs(),
    externals(),
    typescript(),
  ],
})
