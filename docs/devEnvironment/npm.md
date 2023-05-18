---
title: npm
date: 2022-03-08
sidebarDepth: 1
---

# npm

## npm 的安装

新版的 nodejs 已经集成了 npm，所以使用 nvm 安装好 nodejs 之后，npm 也已经安装好了。
可以使用以下命令查看 npm 是否安装成功：

```
npm -v
```

## npm 常用命令

```
npm init  //初始化一个package.json文件，但是有很多问答需要手动输入
npm install -g <package name>   //全局安装
npm install --save-dev    //本地安装
npm uninstall [package name] (-g)  //卸载安装的模块
npm run       //运行
npm cache clean     //清除缓存
```

了解更多命令参考: <http://caibaojian.com/npm/cli/access.html>

## npx

了解 npx 相关可以前往：<http://www.ruanyifeng.com/blog/2019/02/npx.html>
