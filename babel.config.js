module.exports = {
  presets: ['babel-preset-expo'],
  plugins: [
    [
      'module:react-native-dotenv',
      {
        moduleName: '@env',
        path: `.env.${process.env.APP_ENV || 'development'}`,
      },
    ],
    'react-native-worklets/plugin', 
  ],
  env: {
    production: {
      plugins: ['transform-remove-console'],
    },
  },
};