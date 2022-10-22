# git

## 作用

版本控制，用于文件版本历史的管理以及多人协作。

## 功能

* 修改历史的提交记录
* TODO rebase会修改历史提交的id？
* TODO 代码解决冲突通用方案 git rerere

## 工作流

### git flow

* master
  * 主干
  * 常在分支
  * 随时可发布
* develop
  * from master
  * 常在分支
  * 开发分支
* feature
  * from develop
  * 功能开发分支
  * 一个功能开发完毕后合并到develop
* release
  * from develop
  * 测试分支
  * 功能测试完成后合并到develop 和 master
* hotfix
  * from master
  * bug 修复分支
  * 修复完毕后合并到develop和master

问题：

1. develop的代码未经测试完毕，另一个分支从develop拉下来后如果更早的发布和上线，导致出现问题
2. 繁琐

### github flow

### gitlab flow

### 子模块

更新： git submodule update --remote --merge

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

## github

### 高级搜索

搜索范围，语言，星级
in:readme
