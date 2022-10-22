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

## 工具

fastgithub

## github

### 高级搜索

搜索范围，语言，星级
in:readme
