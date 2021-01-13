let config = {
  //代理url
  // proxy_url: 'http://14.23.157.98:81', //外网ip

  proxy_url: 'http:' + '//10.10.' + '104.3:81', //内网ip
  apphead: '/casts-acs',

  //谭文轩
  // proxy_url: 'http://192.168.30.2:4070',
  // apphead: '/front',

  // 王永俊
  // proxy_url: 'http://172.30.207.79:4070',
  // apphead: '/front',

  // 程小萍
  // proxy_url: 'http://172.30.207.220:4040',
  // apphead: '/casts',

  //测试机器
  // proxy_url: 'http://192.168.30.100',
  // apphead: '/casts',

  //图片前缀地址
  base_image_url: '/casts-acs/',
  // base_image_url: '/casts/',
  // download_url: '/download_url/',
  //文件上传路径
  uploader: '/casts-acs/access/ui/CASTS-FRONT/GTCCOMMATTACH10',
  //国旗地址
  national_flag_url: 'http:' + '//14.23.157' + '.98:8090/downloadfromfront/flags/',

  //本地测试是否开启菜单权限过滤
  isFilterMenu: true
};
//正式环境

if (!process.env.VUE_APP_ISSHOWTAG) {
  console.log('process.env.VUE_APP_ISSHOWTAG', process.env.VUE_APP_ISSHOWTAG);
  config.proxy_url = 'http:' + '//10.10.' + '104.3:81';
  config.apphead = '/casts-acs';
}

module.exports = config;
