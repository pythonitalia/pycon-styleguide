import typescript from "rollup-plugin-typescript2";
import { terser } from "rollup-plugin-terser";
import commonjs from "@rollup/plugin-commonjs";
import pkg from "./package.json";
import ts from "typescript";
import styles from "rollup-plugin-styles";

const assetFileNames = (assetInfo) =>
  assetInfo.name === "index.css"
    ? "index.css"
    : "assets/[name]-[hash][extname]";

const plugins = [
  commonjs(),
  styles({ mode: "extract", config: { path: "./postcss.config.js" } }),
  terser({
    output: {
      comments: false,
    },
  }),
];

const external = [
  ...Object.keys(pkg.dependencies || {}),
  ...Object.keys(pkg.peerDependencies || {}),
];

export default [
  {
    input: "./src/index.ts",
    external,
    output: [
      {
        file: `${pkg.module}`,
        format: "es",
        sourcemap: true,
        assetFileNames,
      },
      {
        file: `${pkg.main}`,
        format: "cjs",
        sourcemap: true,
        assetFileNames,
      },
    ],
    plugins: [
      typescript({
        typescript: ts,
        tsconfig: "tsconfig.json",
        tsconfigDefaults: {
          exclude: [
            "**/*.spec.ts",
            "**/*.test.ts",
            "**/*.stories.ts",
            "**/*.spec.tsx",
            "**/*.test.tsx",
            "**/*.stories.tsx",
            "node_modules",
            "bower_components",
            "jspm_packages",
            "dist",
          ],
          compilerOptions: {
            sourceMap: true,
            declaration: true,
          },
        },
      }),
      ...plugins,
    ],
  },
  {
    input: "./src/icons/index.ts",
    external,
    output: [
      {
        file: `dist/icons/index.esm.js`,
        format: "es",
        sourcemap: true,
        assetFileNames,
      },
      {
        file: `dist/icons/index.js`,
        format: "cjs",
        sourcemap: true,
        assetFileNames,
      },
    ],
    plugins: [
      typescript({
        typescript: ts,
        tsconfig: "tsconfig.json",
        tsconfigOverride: {
          include: ["./src/icons"],
        },
        tsconfigDefaults: {
          exclude: [
            "**/*.spec.ts",
            "**/*.test.ts",
            "**/*.stories.ts",
            "**/*.spec.tsx",
            "**/*.test.tsx",
            "**/*.stories.tsx",
            "node_modules",
            "bower_components",
            "jspm_packages",
            "dist",
          ],
          compilerOptions: {
            sourceMap: true,
            declaration: true,
          },
        },
      }),
      ...plugins,
    ],
  },
  {
    input: "./src/illustrations/index.ts",
    external,
    output: [
      {
        file: `dist/illustrations/index.esm.js`,
        format: "es",
        sourcemap: true,
        assetFileNames,
      },
      {
        file: `dist/illustrations/index.js`,
        format: "cjs",
        sourcemap: true,
        assetFileNames,
      },
    ],
    plugins: [
      typescript({
        typescript: ts,
        tsconfig: "tsconfig.json",
        tsconfigOverride: {
          include: ["./src/illustrations"],
        },
        tsconfigDefaults: {
          exclude: [
            "**/*.spec.ts",
            "**/*.test.ts",
            "**/*.stories.ts",
            "**/*.spec.tsx",
            "**/*.test.tsx",
            "**/*.stories.tsx",
            "node_modules",
            "bower_components",
            "jspm_packages",
            "dist",
          ],
          compilerOptions: {
            sourceMap: true,
            declaration: true,
          },
        },
      }),
      ...plugins,
    ],
  },
];
