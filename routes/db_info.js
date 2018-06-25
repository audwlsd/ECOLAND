module.exports = (function () {
    return {
      local: { // localhost
        host: 'localhost',
        port: '3306',
        user: 'ngeol564',
        password: 'dktorma!23',
        database: 'ecoland'
      },
      real: { // real server db info
        host: 'ecolanddb.c803u9draov8.ap-northeast-2.rds.amazonaws.com',
        port: '3306',
        user: 'ngeol564',
        password: 'dktorma!23',
        database: 'ecoland'
      },
      dev: { // dev server db info
        host: '',
        port: '',
        user: '',
        password: '',
        database: ''
      }
    }
  })();