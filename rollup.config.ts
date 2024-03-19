// import { Config } from '@stencil/core';
// // import babel from '@rollup/plugin-babel';

// export const config: Config = {
//   namespace: 'thirdweb',
//   outputTargets: [
//     {
//       type: 'dist',
//       esmLoaderPath: '../loader',
//     },
//     {
//       type: 'dist-custom-elements',
//     },
//     {
//       type: 'docs-readme',
//     },
//     {
//       type: 'www',
//       serviceWorker: null, // disable service workers
//     },
//   ],
//   testing: {
//     browserHeadless: "new",
//   },
//   // rollupPlugins: {
//   //   before: [
//   //     {
//   //       async buildStart() {
//   //         const bundle = await rollup({
//   //           input: 'src/components/my-thirdweb-component/App.jsx', // Ensure this path is correct
//   //           plugins: [
//   //             babel({
//   //               presets: ['@babel/preset-react'],
//   //               babelHelpers: 'bundled',
//   //               exclude: 'node_modules/**', // Exclude node_modules
//   //             }),
//   //           ],
//   //         });
//   //         await bundle.write({
//   //           dir: 'public/build', // Update the output directory as needed
//   //           format: 'es',
//   //           sourcemap: true,
//   //         });
//   //       },
//   //     },
//   //   ],
//   // },
// };
