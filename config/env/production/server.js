module.exports = ({ env }) => ({
    url: env('https://afk-arena-api.herokuapp.com/'),
    proxy: true,
    app: {
        keys: env.array('APP_KEYS', ['Key1', 'Key2']),
      },
    });