module.exports = {
    devServer: {
      proxy: {
        '/api': {
          target: 'http://localhost:3080/'
        },
        "/userapi": {
          target: 'http://localhost:3080/',
          pathRewrite: {'^/userapi' : '/api'}
        }
      }
    }
  }