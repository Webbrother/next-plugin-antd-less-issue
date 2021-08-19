/** @type {import('next').NextConfig} */
// module.exports = {
//   reactStrictMode: true,
// }

const withAntdLess = require('next-plugin-antd-less');

module.exports = withAntdLess({
  // optional
  // modifyVars: {
  //   '@primary-color': 'red',
  //   '@tabs-title-font-size': '18px'
  // },

  // optional
  lessVarsFilePath: './styles/variables.less',

  // optional
  lessVarsFilePathAppendToEndOfContent: false,
  // optional https://github.com/webpack-contrib/css-loader#object

  cssLoaderOptions: {},

  webpack(config) {
    return config;
  },

});
