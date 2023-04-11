import { dirname, resolve } from "node:path"
import { fileURLToPath } from "node:url"
import { nodeResolve } from "@rollup/plugin-node-resolve"
import commonjs from "@rollup/plugin-commonjs"
import typescript from "@rollup/plugin-typescript"
import del from "rollup-plugin-delete"
import terser from "@rollup/plugin-terser"
import filesize from "rollup-plugin-filesize"
import { getBabelOutputPlugin } from "@rollup/plugin-babel"

const __dirname = dirname(fileURLToPath(import.meta.url))
const inputPath = resolve(__dirname, "./packages/components/index.ts")
const outputDir = resolve(__dirname, "./packages/mala-ui/dist")

export default {
  input: inputPath,
  output: [
    {
      file: resolve(outputDir, "./mala-ui.cjs.js"),
      format: "cjs"
    },
    {
      file: resolve(outputDir, "./mala-ui.es.js"),
      format: "es"
    }
  ],
  plugins: [
    nodeResolve(),
    commonjs(),
    del({ targets: "packages/mala-ui/dist/*", verbose: true }),
    typescript(),
    getBabelOutputPlugin({
      presets: ["@babel/preset-env"]
    }),
    terser(),
    filesize()
  ],
  // 指出哪些模块需要被视为外部引入
  external: ["react", "react-dom"]
}
