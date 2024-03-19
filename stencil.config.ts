import { Config } from '@stencil/core';
// const nodePolyfills = require('rollup-plugin-node-polyfills');
// import { rollup } from 'rollup';
// import babel from '@rollup/plugin-babel';
// import resolve from '@rollup/plugin-node-resolve';
// import commonjs from '@rollup/plugin-commonjs';
// import replace from '@rollup/plugin-replace';
// import nodeResolve from '@rollup/plugin-node-resolve';
// import json from '@rollup/plugin-json'; // Import the JSON plugin
import nodePolyfills from 'rollup-plugin-node-polyfills';



export const config: Config = {
  namespace: 'thirdweb',
  outputTargets: [
    {
      dir: 'docs',
      type: 'www',
      // comment the following line to disable service workers in production
      serviceWorker: null,
      baseUrl: 'https://aliyanmalik.github.io/',
    },
  ],
  // outputTargets: [
  //   {
  //     type: 'dist-custom-elements',
  //     customElementsExportBehavior: 'single-export-module',
  //     // inlineDynamicImports: true,
  //     externalRuntime: false,
  //   },
  //   {
  //     type: 'docs-readme',
  //   },
  //   {
  //     type: 'www',
  //     serviceWorker: null, // disable service workers
  //   },
  // ],
  // outputTargets: [
  //   {
  //     type: 'dist',
  //     esmLoaderPath: '../loader',
  //   },
  //   {
  //     type: 'dist-custom-elements',
  //   },
  //   {
  //     type: 'docs-readme',
  //   },
  //   {
  //     type: 'www',
  //     serviceWorker: null, // disable service workers
  //   },
  // ],
  // outputTargets: [
  //   {
  //     type: "dist-custom-elements-bundle",
  //     inlineDynamicImports: true,
  //     externalRuntime: false,
  //   },
  //   {
  //     type: 'docs-readme',
  //   },
  //   {
  //     type: 'www',
  //     serviceWorker: null, // disable service workers
  //   },
  // ],
  plugins: [
    // Other plugins...
    nodePolyfills()
  ],
  testing: {
    browserHeadless: "new",
  },
  // rollupPlugins: {
  //   before: [
  //     {
  //       async buildStart() {
  //         const bundle = await rollup({
  //           input: 'src/components/my-thirdweb-component/App.jsx',
  //           plugins: [
  //             replace({
  //               'process.env.NODE_ENV': JSON.stringify('production'),
  //             }),
  //             nodeResolve({
  //               extensions: ['.js', '.jsx']
  //             }),
  //             commonjs(),
  //             json(), // Apply the JSON plugin
  //             // babel({
  //             //   presets: ['@babel/preset-react'],
  //             //   babelHelpers: 'bundled',
  //             //   exclude: 'node_modules/**', // Exclude node_modules
  //             // }),
  //           ],
  //         });
  //         await bundle.write({
  //           dir: 'public/build',
  //           format: 'es',
  //           sourcemap: true,
  //         });
  //       },
  //     },
  //   ],
  // },
};



