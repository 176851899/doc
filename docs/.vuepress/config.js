module.exports = {
  title: "前端开发组学习文档",
  description: "前端开发组学习文档",
  configureWebpack: {
    resolve: {
      alias: {
        "@alias": "path/to/some/dir",
      },
    },
  },
  //导航栏配置
  themeConfig: {
    // sidebar: [
    //   {
    //     title: '准备开发环境',
    //     collapsable: false, //是否展开
    //     children: [
    //       ['/devEnvironment/nvm','nvm'],
    //       ['/devEnvironment/nodejs','node.js'],
    //       ['/devEnvironment/yarn','yarn'],
    //       ['/devEnvironment/git','git'],
    //       ['/devEnvironment/vscode','vscode'],
    //       ['/devEnvironment/pxcook','pxcook'],
    //       ['/devEnvironment/axure','axure'],
    //       ['/devEnvironment/tools','tools'],
    //     ]
    //   },
    // ],
    sidebar: {
      "/devEnvironment/": [
        {
          title: "准备开发环境",
          collapsable: false,
          children: [
            ["/devEnvironment/nvm", "nvm"],
            ["/devEnvironment/nodejs", "node.js"],
            ["/devEnvironment/yarn", "yarn"],
            ["/devEnvironment/npm", "npm"],
            ["/devEnvironment/git", "git"],
            ["/devEnvironment/vscode", "vscode"],
            ["/devEnvironment/pxcook", "pxcook"],
            ["/devEnvironment/axure", "axure"],
            ["/devEnvironment/tools", "tools"],
          ],
        },
      ],
      "/codeStandards/": [
        {
          title: "代码规范工具",
          collapsable: false,
          children: [
            ["/codeStandards/eslint", "eslint"],
            ["/codeStandards/prettier", "Prettier"],
            ["/codeStandards/lint-staged", "lint-staged"],
            ["/codeStandards/commitlint", "commitlint"],
          ],
        },
      ],
      "/bigscreenDoc/": [
        {
          title: "大屏开发学习",
          collapsable: false,
          children: [
            ["/bigscreenDoc/introduce", "什么是大屏"],
            ["/bigscreenDoc/ways", "怎样开发一个大屏"],
            ["/bigscreenDoc/tools", "工具资源"],
          ],
        },
      ],
      "/animationEffect/": [
        {
          title: "前端常用效果",
          collapsable: false,
          children: [
            ["/animationEffect/sticky", "粘性定位"],
            ["/animationEffect/vue-animation", "Vue动画"],
            ["/animationEffect/countEl", "元素宽高/边距计算"],
            ["/animationEffect/commonEffect", "前端常见效果实现"],
          ],
        },
      ],
      "/vue/": [
        {
          title: "vue相关知识",
          collapsable: false,
          children: [
            ["/animationEffect/sticky", "粘性定位"],
            ["/animationEffect/vue-animation", "Vue动画"],
            ["/animationEffect/countEl", "元素宽高/边距计算"],
            ["/animationEffect/commonEffect", "前端常见效果实现"],
          ],
        },
      ],
      "/work/": [
        {
          title: "工作随记",
          collapsable: false,
          children: [
            ["/work/yinhai", "久远银海"],
            ["work/work", "2022"],
            ["work/2023work", "2023"],
          ],
        },
      ],
    },
    // displayAllHeaders: true,
    sidebarDepth: 1,
    nav: [
      { text: "主页", link: "/" }, // 根路径
      {
        text: "阶段学习",
        items: [
          { text: "准备开发环境", link: "/devEnvironment/nvm" },
          { text: "代码规范工具", link: "/codeStandards/eslint" },
          { text: "大屏开发学习", link: "/bigscreenDoc/introduce" },
          { text: "前端常用效果", link: "/animationEffect/sticky" },
          { text: "vue相关知识", link: "/vue/sticky" },
        ],
      },
      // 显示下拉列表
      // {
      //   text: '语言',
      //   items: [
      //     { text: '中文', link: '/language/chinese' },
      //     { text: '英文', link: '/language/japanese' }
      //   ]
      // },
      // 下拉列表显示分组
      // {
      //   text: '高级',
      //   items: [
      //     {
      //       text: '算法',
      //       items: [
      //         { text: '冒泡', link: '/language/chinese' },
      //         { text: '快速', link: '/language/japanese' }
      //       ]
      //     },
      //     {
      //       text: '设计模式',
      //       items: [
      //         { text: '工厂', link: '/language/chinese' },
      //         { text: '单例', link: '/language/chinese'},
      //       ]
      //     },
      //   ]
      // }
    ],
  },
};
