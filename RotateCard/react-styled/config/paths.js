const path = require('path')


const resolveApp = relativePath => path.resolve(__dirname, relativePath);

module.exports = {
  resolveApp,
  appPublic: resolveApp('../public'),
  appHtml: resolveApp('../public/index.html'),
  appSrc: resolveApp('../src'),
  appDist: resolveApp('../dist'),
}