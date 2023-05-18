---
title: git
date: 2022-03-08
sidebarDepth: 1
---

# lint-staged

## 安装
### 1.安装Husky
husky是一个git hook的管理工具，实现了大部分的git hook，一般情况下，lint-staged会用在git的hook回调中，如果不想自己写githooks，那么最简单的就是和 husky一起使用。
```
npm install husky@4.3.8 -D
或者
yarn add husky@4.3.8 -D
```
### 2.安装lint-staged
```
npm install -D lint-staged
或者
yarn add lint-staged --dev
```

## 配置
package.json中配置husky和lint-staged。
```
"husky": {
  "hooks": {
    "pre-commit": "lint-staged"
  }
},
"lint-staged": {
  "src/**/*.{js,vue}": [
    "eslint",    //指令配置，需要先安装eslint
  ]
}
```

## 使用
尝试提交代码 `git commit -m "test"`，会进行代码校验，若代码有错会提示错误信息
```
$ git commit -m "test: test lint "
husky > pre-commit (node v10.15.3)
‼ Some of your tasks use `git add` command. Please remove it from the config since all modifications made by tasks will be automatically added to the git commit index.

[STARTED] Preparing...
[SUCCESS] Preparing...
[STARTED] Running tasks...
[STARTED] Running tasks for src/**/*.{js,vue}
[STARTED] vue-cli-service lint
[FAILED] vue-cli-service lint [FAILED]
[FAILED] vue-cli-service lint [FAILED]
[SUCCESS] Running tasks...
[STARTED] Applying modifications...
[SKIPPED] Skipped because of errors from tasks.
[STARTED] Reverting to original state because of errors...
[SUCCESS] Reverting to original state because of errors...
[STARTED] Cleaning up...
[SUCCESS] Cleaning up...

× vue-cli-service lint:
error: Parsing error: Unterminated string constant

  22 |   methods: {
  23 |     submit() {
> 24 |       this.$http.get(xxxxhello").then(res => {
     |                               ^
  25 |         this.list = res.data.data.list;
  26 |       });
  27 |     } at src\views\About.vue:38:30:
  36 |   methods: {
  37 |     submit() {
> 38 |       this.$http.get(xxxxhello").then(res => {
     |                              ^
  39 |         this.list = res.data.data.list;
  40 |       });
  41 |     }


1 error found.
husky > pre-commit hook failed (add --no-verify to bypass)
error Command failed with exit code 1.
```
根据提示的错误信息修改代码，即可保证上传的代码没有错误

## 自定义配置
详见：<https://www.cnblogs.com/jiaoshou/p/12250278.html>