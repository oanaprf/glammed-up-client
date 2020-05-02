module.exports = api => {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      [
        'module-resolver',
        {
          root: ['.'],
          alias: {
            '@@components': './src/components',
            '@@screens': './src/screens',
            '@@store': './src/store',
            '@@utils': './src/utils',
            '@@config': './src/config',
          },
        },
      ],
    ],
  };
};
