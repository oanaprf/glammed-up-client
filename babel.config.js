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
            '@@hocs': './src/hocs',
            '@@screens': './src/screens',
            '@@store': './src/store',
            '@@utils': './src/utils',
            '@@config': './src/config',
            '@@locales': './locales',
            '@@assets': './assets',
          },
        },
      ],
    ],
  };
};
