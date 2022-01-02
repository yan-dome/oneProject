
const BundleAnalyzerPlugin = require("webpack-bundle-analyzer").BundleAnalyzerPlugin;

//vue-cli的配置文件


module.exports = {
    devServer:{
        proxy:{
            "/api":{
                target:"https://test.myslt.com",
            }
        }
    }, 
    productionSourceMap:true,
    configureWebpack: require("./webpack.config"),
}
