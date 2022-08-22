# typescript

## 安装依赖

```json
"@typescript-eslint/eslint-plugin": "^5.33.1",
"@typescript-eslint/parser": "^5.33.1",
```

## eslint配置

```js
module.exports = 
{
  parserOptions: {
    parser: '@typescript-eslint/parser',
  },
  extends: [
    'plugin:@typescript-eslint/recommended',
  ],
  rules: [
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/ban-types': 'off',
    '@typescript-eslint/ban-ts-comment': 'off',
  ]
}

```
