# git

## 作用

版本控制，用于文件版本历史的管理以及多人协作。

## 功能

### 子模块

更新： git submodule update --remote --merge

## 工作流

## husky

### 作用

代码提交和上传等操作过程中添加其它动作，比如

* 提交信息格式校验
* 代码格式校验或自动格式化
* 自动运行单元测试，保证通过，或限制覆盖率

### 校验时机

* `pre-commit` commit时触发
* `prepare-commit-msg`
* `commit-msg`
* `post-commit` 提交之后触发

### 操作步骤

1. `npm i lint-staged husky -save-dev` 安装husky,lint-staged 会自动在根目录添加.husky文件夹
2. `npx husky add .husky/pre-commit "npm run lint"` 在 .husky文件夹添加pre-commit.sh，每次提交时执行 `npm run lint`
3. `npx husky add .husky/commit-msg 'npx --no-install commitlint --edit "$1"'` 创建 `commit-msg` 文件
4. `npm i -D @commitlint/cli @commitlint/config-conventional` 安装依赖准备对提交信息校验
5. 根目录添加 `commitlint.config.js` 配置文件

```js
module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'type-enum': [
      2,
      'always',
      ['feat', 'fix', 'docs', 'style', 'refactor', 'perf', 'test', 'chore', 'revert', 'build'],
    ],
  },
};

```

## 工具

fastgithub
