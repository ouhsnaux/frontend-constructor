module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    'plugin:vue/essential',
    'eslint:recommended',
    'airbnb-base',
    '@vue/prettier'
  ],
  plugins: ['import'],
  parserOptions: {
    parser: 'babel-eslint',
  },
  rules: {
    'no-console': [1],
    'prettier/prettier': [
      'error',
      {
        singleQuote: true,
        trailingComma: 'es5',
        arrowParens: 'always',
        endOfLine: 'auto',
        htmlWhitespaceSensitivity: 'ignore',
      },
    ],
    'import/extensions': ['error', 'always', {
      js: 'never',
      mjs: 'never',
      jsx: 'never',
      ts: 'never',
      tsx: 'never',
      vue: 'never'
    }]
  },
  // settings: {
  //   'import/resolver': {
  //     webpack: {
  //       config: './build/local.config.js', // 你本地的 webpack 配置
  //     },
  //   }
  // },
  settings: {
    'import/resolver': {
      alias: {
        map: [['@', './src']],
        extensions: ['.vue', '.json', '.js'],
      },
    },
  }
}
