(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{416:function(t,s,a){t.exports=a.p+"assets/img/cl_2.66002f84.png"},417:function(t,s,a){t.exports=a.p+"assets/img/cl_3.1565a831.png"},418:function(t,s,a){t.exports=a.p+"assets/img/cl_5.00d7c277.png"},419:function(t,s,a){t.exports=a.p+"assets/img/cl_4.11358245.png"},516:function(t,s,a){"use strict";a.r(s);var i=a(56),e=Object(i.a)({},(function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[i("h1",{attrs:{id:"commitlint"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#commitlint"}},[t._v("#")]),t._v(" commitlint")]),t._v(" "),i("h2",{attrs:{id:"安装"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#安装"}},[t._v("#")]),t._v(" 安装")]),t._v(" "),i("h3",{attrs:{id:"_1-安装-husky"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#_1-安装-husky"}},[t._v("#")]),t._v(" 1.安装 Husky")]),t._v(" "),i("p",[t._v("husky 是一个 git hook 的管理工具，实现了大部分的 git hook，一般情况下，commitlint 会用在 git 的 hook 回调中，如果不想自己写 githooks，那么最简单的就是和 husky 一起使用。")]),t._v(" "),i("div",{staticClass:"language- extra-class"},[i("pre",{pre:!0,attrs:{class:"language-text"}},[i("code",[t._v("npm install husky@4.3.8 -D\n或者\nyarn add husky@4.3.8 -D\n")])])]),i("h3",{attrs:{id:"_2-安装-commitlint"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#_2-安装-commitlint"}},[t._v("#")]),t._v(" 2.安装 commitlint")]),t._v(" "),i("div",{staticClass:"language- extra-class"},[i("pre",{pre:!0,attrs:{class:"language-text"}},[i("code",[t._v("npm install --save-dev @commitlint/config-conventional @commitlint/cli\n或者\nyarn add  @commitlint/config-conventional @commitlint/cli -D\n")])])]),i("h2",{attrs:{id:"配置"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#配置"}},[t._v("#")]),t._v(" 配置")]),t._v(" "),i("h3",{attrs:{id:"_1-package-json-中配置-husky-hooks"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#_1-package-json-中配置-husky-hooks"}},[t._v("#")]),t._v(" 1.package.json 中配置 husky.hooks")]),t._v(" "),i("p",[t._v("在 husky 的配置加入 CommitlIint 配置，v1.0.1 版本以后为 HUSKY_GIT_PARAMS，v0.14.3 为 GIT_PARAMS")]),t._v(" "),i("div",{staticClass:"language- extra-class"},[i("pre",{pre:!0,attrs:{class:"language-text"}},[i("code",[t._v('"husky": {\n  "hooks": {\n    "commit-msg": "commitlint -e $HUSKY_GIT_PARAMS"\n  }\n},\n')])])]),i("h3",{attrs:{id:"_2-生成-commitlint-配置文件"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#_2-生成-commitlint-配置文件"}},[t._v("#")]),t._v(" 2.生成 commitlint 配置文件")]),t._v(" "),i("p",[t._v("生成配置文件 commitlint.config.js")]),t._v(" "),i("div",{staticClass:"language- extra-class"},[i("pre",{pre:!0,attrs:{class:"language-text"}},[i("code",[t._v("echo \"module.exports = {extends: ['@commitlint/config-conventional']};\" > commitlint.config.js\n")])])]),i("h3",{attrs:{id:"_3-commitlint-config-js-文件配置"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#_3-commitlint-config-js-文件配置"}},[t._v("#")]),t._v(" 3.commitlint.config.js 文件配置")]),t._v(" "),i("p",[t._v("rule 由 name 和配置数组组成，如：'name:[0, 'always', 72]'，数组中第一位为 level，可选 0,1,2，0 为 disable，1 为 warning，2 为 error，第二位为应用与否，可选 always|never，第三位该 rule 的值。具体配置例子如下：")]),t._v(" "),i("div",{staticClass:"language- extra-class"},[i("pre",{pre:!0,attrs:{class:"language-text"}},[i("code",[t._v("module.exports = {\n  extends: [\n    \"@commitlint/config-conventional\"\n  ],\n  rules: {\n    'type-enum': [2, 'always', [\n      'feat', 'fix', 'improvement', 'docs', 'style', 'refactor', 'pref', 'build', 'chore', 'revert'\n     ]],\n    'type-case': [0],\n    'type-empty': [0],\n    'scope-empty': [0],\n    'scope-case': [0],\n    'subject-full-stop': [0, 'never'],\n    'subject-case': [0, 'never'],\n    'header-max-length': [0, 'always', 72]\n  }\n};\n")])])]),i("p",[t._v("这里列出了大部分常用的配置，其它的可以参考 Commitlint 网站")]),t._v(" "),i("h2",{attrs:{id:"使用"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#使用"}},[t._v("#")]),t._v(" 使用")]),t._v(" "),i("p",[t._v("配置完成之后，我们可以试着修改项目文件，然后进行"),i("code",[t._v('git commmit -m "xxx"')]),t._v("操作。\n"),i("img",{attrs:{src:a(416),alt:"commitlint"}}),t._v("\n这里我们使用错误的提交方式，最上面的是自动测试的脚本，大家可以忽略，husky 给出了 commit-msg 的 input 为 xxx，触发了 subject-empty，type-empty 两个规则，提交不符合规范，被拦了下来。如果是正确的提交，例子如下：\n"),i("img",{attrs:{src:a(417),alt:"commitlint"}})]),t._v(" "),i("div",{staticClass:"custom-block warning"},[i("p",{staticClass:"custom-block-title"},[t._v("注意")]),t._v(" "),i("p",[t._v("feat:后需有空格")])]),t._v(" "),i("h4",{attrs:{id:"feat-到底是什么意思呢-下面列出-commitlint-常用提交规范-type-类别-项目中-强制要求-使用该规范"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#feat-到底是什么意思呢-下面列出-commitlint-常用提交规范-type-类别-项目中-强制要求-使用该规范"}},[t._v("#")]),t._v(" feat 到底是什么意思呢？下面列出 commitlint 常用提交规范 type 类别(项目中 "),i("u",[t._v("强制要求")]),t._v(" 使用该规范)：")]),t._v(" "),i("ul",[i("li",[t._v("feat: 新功能")]),t._v(" "),i("li",[t._v("fix: 修复 BUG")]),t._v(" "),i("li",[t._v("improvement: 对当前功能的改进")]),t._v(" "),i("li",[t._v("docs: 仅仅文档修改")]),t._v(" "),i("li",[t._v("style: 不影响代码的改变，例如：空格、格式")]),t._v(" "),i("li",[t._v("refactor: 重构，既不修复错误也不添加功能的代码更改")]),t._v(" "),i("li",[t._v("pref: 提高性能的代码更改")]),t._v(" "),i("li",[t._v("build: 影响生成系统或外部依赖项的更改（示例范围：gulp、broccoli、npm）")]),t._v(" "),i("li",[t._v("chore: 不修改 src 或测试文件的其他更改")]),t._v(" "),i("li",[t._v("revert: 还原以前的提交")])]),t._v(" "),i("p",[t._v("例子：")]),t._v(" "),i("div",{staticClass:"language- extra-class"},[i("pre",{pre:!0,attrs:{class:"language-text"}},[i("code",[t._v("git commit -m 'feat: 添加xxx管理模块'\ngit commit -m 'fix: 修复xxxxBUG，fixed #xxxxxxx'\ngit commit -m 'docs: 修改/添加xxxx文档'\n")])])]),i("div",{staticClass:"custom-block warning"},[i("p",{staticClass:"custom-block-title"},[t._v("注意")]),t._v(" "),i("p",[t._v("提交时类别后面 : 后都需有空格")])]),t._v(" "),i("h2",{attrs:{id:"注意事项"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#注意事项"}},[t._v("#")]),t._v(" 注意事项")]),t._v(" "),i("h3",{attrs:{id:"commit-husky-报错"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#commit-husky-报错"}},[t._v("#")]),t._v(" Commit husky 报错")]),t._v(" "),i("p",[t._v("husky > commit-msg hook failed (add --no-verify to bypass)\n"),i("img",{attrs:{src:a(418),alt:"commitlint"}})]),t._v(" "),i("h4",{attrs:{id:"解决方法"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#解决方法"}},[t._v("#")]),t._v(" 解决方法")]),t._v(" "),i("p",[t._v("commitlint.config.js 的编码修改为 UTF-8\n"),i("img",{attrs:{src:a(419),alt:"commitlint"}})])])}),[],!1,null,null,null);s.default=e.exports}}]);