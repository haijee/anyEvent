import typescript from "rollup-plugin-typescript";
import sourceMaps from 'rollup-plugin-sourcemaps'
import pkg from "./package.json" assert { type: "json" };


// 代码头
const banner =
    `/*!
 * event-action v${pkg.version}
 * (c) 2022-${new Date().getFullYear()} haijee
 * https://github.com/haijee/event-action
 * Released under the MIT License.
 */`

export default {
  input: "src/index.ts",
  output: [
    {
      format: "umd",
      file: pkg.browser,
      name: "events$",
      // 当入口文件有export时，'umd'格式必须指定name
      // 这样，在通过<script>标签引入时，才能通过name访问到export的内容。
    },
    {
      format: "es",
      file: pkg.module,
      banner,
      sourcemap: true,
    },
    {
      format: "cjs",
      file: pkg.main,
      sourcemap: true,
    },
  ],
  plugins: [
    typescript({
      exclude: "node_modules/**",
      typescript: require("typescript"),
    }),
    sourceMaps()
  ],
};
