/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}

module.exports = nextConfig
// const withTM = require('next-transpile-modules')(['three']);

// module.exports = withTM({
//   webpack: (config, options) => {
//     config.module.rules.push({
//       test: /\.(obj)$/i,
//       loader: 'file-loader',
//       options: {
//         publicPath: '/_next/static/images/',
//         outputPath: 'static/images/',
//         name: '[name]-[hash].[ext]',
//       },
//     });

//     return config;
//   },
// });