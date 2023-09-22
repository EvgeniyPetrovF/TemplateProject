const config = require('./tsconfig.json');

const { baseUrl, paths } = config.compilerOptions;

const getAliases = () => {
  return Object.entries(paths).reduce((aliases, alias) => {
    const key = alias[0].replace('/*', '');
    const value = baseUrl + alias[1][0].replace('*', '');

    return {
      ...aliases,
      [key]: value,
    };
  }, {});
};

module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    'react-native-reanimated/plugin',
    [
      'module-resolver',
      {
        root: ['.'],
        extensions: [
          '.ios.js',
          '.ios.ts',
          '.ios.jsx',
          '.ios.tsx',
          '.android.js',
          '.android.ts',
          '.android.jsx',
          '.android.tsx',
          '.js',
          '.jsx',
          '.ts',
          '.tsx',
          '.json',
        ],
        alias: getAliases(),
      },
    ],
    [
      'module:react-native-dotenv',
      {
        moduleName: 'react-native-dotenv',
        path: '.env',
        allowUndefined: false,
      },
    ],
  ],
};
