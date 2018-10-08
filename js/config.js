var versionJS = '2018072001';
seajs.config({
    // Sea.js 的基础路径
    base: './js',
    // 别名配置
    alias: {
        'seajs-text': 'seajs/seajs-text.js',
        'jquery': 'lib/jquery/jquery.min.1.10.2.js'
    },
    // 路径配置
    paths: {
        'public':'/public/static/js/act'
    },
    //版本号
    map: [
         [ /^(.*\.(?:css|js))(.*)$/i, '$1?v=' + versionJS]
    ],
    // 预加载项
    preload: ['seajs-text'],
    // 调试模式
    // debug: true,
    // 文件编码
    charset: 'utf-8'
});
