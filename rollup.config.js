import typescript from 'rollup-plugin-typescript';
import sourceMaps from "rollup-plugin-sourcemaps";

export default {
  input: "src/main.ts",
  output: [
    {
      file: "dist/ts-toile.esm.js",
      format: "esm"
    },
    {
      format: "cjs",
      file: "dist/ts-toile.common.js"
    },
    {
      format: "iife",
      file: "dist/ts-toile.global.js",
      // 【可选配置】If you do not supply "output.name", you may not be able to access the exports of an IIFE bundle.
      name: "ts_toile"
    },
    {
      format: "amd",
      file: "dist/ts-toile.amd.js"
    },
    {
      format: "umd",
      file: "dist/ts-toile.umd.js",
      // umd 格式必须指定 name，否则报错
      name: 'ts_toile'
    }
  ],
  plugins: [
    typescript({
      exclude: "node_modules/**",
      typescript: require("typescript")
    }),
    sourceMaps()
  ]
};
