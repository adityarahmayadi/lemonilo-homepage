module.exports = function(api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      ['babel-plugin-styled-components', {'displayName': false}],
      ['module-resolver', {
        root: ['./src'],
        extensions: ['.js'],
        alias: {
          '@lemonilo': './src'
        }
      }]
    ]
  };
};
