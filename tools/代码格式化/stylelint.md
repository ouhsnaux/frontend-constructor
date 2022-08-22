# stylelint

## 依赖

* css
  * stylelint
  * stylelint-config-standard
* scss
  * stylelint-scss
  * stylelint-config-standard-scss

## 项目配置

创建 .stylelintrc.js

```js
module.exports = {
  // css
  // extends: 'stylelint-config-standard',
  // scss
  extends: 'stylelint-config-standard-scss',
}
```

## vscode

* 插件 stylelint
* 配置

    ```json
    "editor.codeActionsOnSave": {
        "source.fixAll": true,
    },
    "stylelint.validate": [
        "css",
        "less",
        "postcss",
        "scss",
        "sass"
    ],
    ```
