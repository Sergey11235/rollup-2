import babel from "@rollup/plugin-babel";
import serve from "rollup-plugin-serve";
import livereload from "rollup-plugin-livereload";
import styles from "rollup-plugin-styles";
import image from "@rollup/plugin-image";

export default {
  input: "./index.js",
  output: {
    file: "./build/bundle.js",
    format: "cjs",
  },
  plugins: [
    babel({ babelHelpers: "bundled" }),
    styles(),
    image(),
    serve({ open: true }),
    livereload(),
  ],
};
