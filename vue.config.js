module.exports = {
    publicPath: process.env.NODE_ENV === 'production'
       ? './'
       : '/',
       devServer: {
        port: 8082,     // 端口
    },
   }