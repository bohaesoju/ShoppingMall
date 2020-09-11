const path = require('path');
const moment = require('moment');
const serverEnv = process.env.SERVER_ENV || 'local';
const withCSS = require('@zeit/next-css');
const withImages = require('next-images');
const buildVersion = process.env.BUILD_VERSION || moment().format('YYYYMMDDHHmmss');
const assetPrefix = /prod|stage|beta|develop/.test(serverEnv) ? `${assetsHost}/front-end/assets-admin/${buildVersion}` : '';

console.log(`
  next config js SERVER_ENV = ${serverEnv}
  __dirname = ${__dirname}
  buildVersion = ${buildVersion}
  assetPrefix = ${assetPrefix}
`);

module.exports = withCSS(withImages({
    inlineImageLimit: 8 * 1024,
    webpack (config, options) {
      config.resolve.alias = {
        ...config.resolve.alias,
        'src': path.join(__dirname, 'src')
      };
  
      config.devtool = 'source-map';
      for (const plugin of config.plugins) {
        if (plugin.constructor.name === 'UglifyJsPlugin') {
          plugin.options.sourceMap = true;
          break;
        }
      }
      
      if (config.optimization && config.optimization.minimizer) {
        for (const plugin of config.optimization.minimizer) {
          if (plugin.constructor.name === 'TerserPlugin') {
            plugin.options.sourceMap = true;
            break;
          }
        }
      }
  
      return config;
    },
    poweredByHeader: false,
    assetPrefix: assetPrefix,
    env : {
      SERVER_ENV: serverEnv,
    },
    serverRuntimeConfig: {
      PROJECT_ROOT: __dirname,
      BUILD_VERSION: buildVersion,
    },
  }));