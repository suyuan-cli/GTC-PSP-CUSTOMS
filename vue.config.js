(async () => {
  const config = require('./src/p.config.js');
  const proxy_url = config.proxy_url;
  const base_image_url = config.base_image_url;
  const download_url = config.download_url;
  const apphead = config.apphead;
  // let portCreate = require('./mock/gePort');
  // let port = await portCreate(3001);
  // port--;

  let port = 3001;
  let backendProxyUrl = apphead + '/access';
  module.exports = {
    publicPath: './',
    productionSourceMap: false,
    devServer: {
      proxy: {
        '/api': {
          target: 'http://127.0.0.1:' + port,
          changOrigin: true
        },

        [backendProxyUrl]: {
          target: proxy_url,
          changOrigin: true,
          cookieDomainRewrite: 'localhost'
        },
        '/do': {
          target: proxy_url,
          changOrigin: true,
          cookieDomainRewrite: 'localhost'
        },

        [base_image_url]: {
          pathRewrite: {
            ['^' + base_image_url]: '' //一般不会重写
          },
          target: proxy_url + apphead + '/',
          changOrigin: true,
          cookieDomainRewrite: 'localhost'
        },
        [download_url]: {
          pathRewrite: {
            ['^' + download_url]: '' //一般不会重写
          },
          target: proxy_url + '/mgr/',
          changOrigin: true,
          cookieDomainRewrite: 'localhost'
        }
      }
    },
    chainWebpack(config) {
      config.plugin('define').tap((args) => {//从命令传入参数，用参数在项目中判断是否是显示项目
        args[0]['process.env'].IS_HC = JSON.stringify(process.env.IS_HC)
        return args
      })
    },
    pwa: {
      iconPaths: {
        favicon32: './favicon.ico',
        favicon16: './favicon.ico',
        appleTouchIcon: './favicon.ico',
        maskIcon: './favicon.ico',
        msTileImage: './favicon.ico'
      }
    }
  };
})();
