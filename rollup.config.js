import pkg from "./package.json";
import typescript from "@rollup/plugin-typescript";
import sourceMaps from "rollup-plugin-sourcemaps";

export default {
  input: "src/index.ts",
  output: {
    dir: "output",
    format: "cjs",
  },
  plugins: [typescript(), sourceMaps()],
  output: [
    {
      format: "cjs",
      file: pkg.main,
      sourcemap: true,
    },
    {
      format: "es",
      file: pkg.module,
      sourcemap: true,
    },
  ],
};
