const { getDefaultConfig } = require('expo/metro-config');

const config = getDefaultConfig(__dirname);
config.resolver.assetExts.push('txt'); // .txt allow karo

config.resolver.extraNodeModules = {
  ...config.resolver.extraNodeModules,
  // Add this to handle the native module
};

module.exports = config;