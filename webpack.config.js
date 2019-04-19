const path = require('path');
const webpack = require('webpack');

module.exports = {
  mode: 'development',
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  plugins: [
    env({
      AUTH_IDENTITY_POOL_ID: '',
      REGION: '',
      USER_POOL_ID: '',
      USER_POOL_WEB_CLIENT_ID: '',
    })
  ]
};

// Create env variables
function env(values) {
    const env = Object.keys(values).reduce((env, key) => {
      env[`process.env.${key}`] = JSON.stringify(process.env[key] || values[key]);
      return env
    }, {});

    return new webpack.DefinePlugin(env);
}
