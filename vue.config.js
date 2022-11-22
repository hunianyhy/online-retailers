const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  // 不打包map文件
  productionSourceMap:false,
  transpileDependencies: true,
  devServer: {
  //port: 8080,可不写
     port: 8080,
     proxy: {
         '/api': {
             target: "http://gmall-h5-api.atguigu.cn",
          // target后面是接口地址
             pathRewrite: {
                //  '^/api': ''
             }
         }
     }
 }
})
