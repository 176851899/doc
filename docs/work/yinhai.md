#                              培训记录





好的插件：

墨刀：制作原型  
snipaste；截图    使用https://tech.wmzhe.com/article/13062.html

processon.**免费在线****流程图思维导图**

https://www.processon.com/



## 3.3号git，svn，银海云

#### **SVN状态图标不显示的解决办法**

https://www.cnblogs.com/shizilunya/p/11065521.html

3.4

# 3.9  公司自己的框架

项目cli搭建

1.再src下中的.env.development中对应修改

若这个配置提供了完整的后端接口地址,则浏览器将会直接请求这里配置的后端接口地址,且无法使用前端webpack-dev-server所提供的请求跨域功能

VUE_APP_BASE_PATH=/ta404

用于前端跨域时的真实后端地址

##### VUE_APP_BACKEND_PATH=http://172.20.20.13:8081/ta404 

可以操作项目在scopes下的project下

2.在webpackCommonConfig.js中

// 项目新增模块

 projectModules: [

  'demoTest'

 ],



# 3.15项目增删改查

删除数据：逻辑删除（现在不用，以后可以找到），物理删除（直接消失，找不到）



# 3.22    来研发部报道vue

### 问题解决

#### 了解nvm,是一个node 版本切换管理的包管理器

  安装时注意nvm安装路径不要出现中文和空格这些的



# 3.23  熟悉部门开发文档和一些环境配置

### 好用的代码切图工具

pxcook

# Everything  （文件搜索工具）

   

### 原型Axure工具

[(https://www.axure.com.cn/)





### uTools 优秀的插件库，开箱即用





### Prettier 是一个固执己见的代码格式化程序

使用：https://www.prettier.cn/docs/install.html









## git提交代码校验，若代码有错会提示错误信息lint-staged+husky

  [lint-staged 使用教程](https://www.cnblogs.com/jiaoshou/p/12250278.html)

lint-staged 是一个在git暂存文件上运行linters的工具，当然如果你觉得每次修改一个文件就给所有文件执行一次lint检查不恶心的话，这个工具对你来说就没有什么意义了，请直接关闭即可。



# git提交规范 commitLint+husky

一句话说，当我们运行 `git commmit -m 'xxx'` 时，用来**检查 `xxx` 是否满足固定格式的工具。**

```js
启动执行插件
yarn add || npm install husky --dev
复制代码
commitlint核心执行文件 安装项目开发环境
yarn add || npm install @commitlint/cli --dev
复制代码
commitlint自定义配置文件 安装项目开发环境
yarn add || npm install @commitlint/config-conventional --dev
```

作者：已注销
链接：https://juejin.cn/post/6877081615357607943
来源：稀土掘金

# 3.24       学习数字化大屏任务

遇到 问题：eachars引入没有看清楚版本， 



## 3.25  问题

遇到问题，在template中如果直接引入img等的相对地址，解析出来地址 不对，可以先传为base64或者用相对地址

# 3.28

继续写项目

# 3.29

## 完善数字化大屏幕



echars完成销毁

 myChart.dispose()

   myChart = null

# 3.30

### JSDoc格式注释标签规范

css动画和过渡在同一块区域使用，过渡层会被挡住，引起过渡视角失效



# [CSS命名规范-BEM](https://www.bemcss.com/#)

# 3.31

熟悉代码规范格式检验



# 4.1    Nginx部署

4.1    Nginx部署

服务器密码 aAB191131

阿里云AB191131

注意:购买的服务器应在安全组配置映射相应的端口

本地服务器测试没问题再上线，它不能出现在中文目录下，而且可能因为端口被占用而失败，解决办法去关闭端口或者更改端口，默认为80

  停止.\nginx.exe -s stop

刷新配置文件，相当于刷新 .\nginx.exe -s reload

  启动.\nginx.exe -c .\conf\kerwin.conf

电脑自带cmd可以省略.\当前目录nginx.exe -c conf\kerwin.conf



// nginx部署有子路由时这publicpath为/,在vue.config.js中设置，history模式必须更要注意

 publicPath: process.env.NODE_ENV === 'production' ? '/' : '/', // 部署应用包时的基本 URL

问题nginx启动

解决然后使用管理员运行cmd窗口，再次使用nginx命令，即可打开nginx服务。

nginx: [alert] could not open error log file: CreateFile() "logs/error.log" failed (5: Access is denied)

[【Nginx异常】[error\] 4236#29900: OpenEvent(“Global\ngx_reload_27128“) failed (5: Access is denied)](https://www.cnblogs.com/no8g/p/13415465.html)

## 大屏存在问题

注意：当把浏览器放大大屏项目会出现先大后小

界面还原度

3D圆盘转动

solt默认

注释

去掉多余代码

class规范bem

写方法尽量写到导出里面

组件flex自适应

对比差异写组件

调式好去掉console

图表dispose

git 提交规范，加msg-

 vscode插件GitLens — Git supercharged把git关联起来



# 4.8 mock和nginx问题

mock 只支持ajax类型

[git报错husky > pre-commit hook failed (add --no-verify to bypass)](https://www.cnblogs.com/jasonzhang-blog/p/11298580.html)prettiter安装好没有，commit-prettiter通常是相关包没安装好

nginx中Failed to load resource: the server responded with a status of 404 ()解决办法

**正常情况下服务器报404错误都是资源访问路径问题。**vue.config里面配置publicPath

 module.exports = {

  // lintOnSave: false, // 暂时关闭代码格式检测

  outputDir: 'dist', // 当运行 vue-cli-service build 时生成的生产环境构建文件的目录

  publicPath: process.env.NODE_ENV === 'production' ? '/' : '/', // 部署应用包时的基本 URl

 }

当我们上线服务器用我们可以用路由的 **history 模式**的模式时候 如果不想返回 404，服务器要设置一下

参考vue-routerhttps://v3.router.vuejs.org/zh/guide/essentials/history-mode.html#%E5%90%8E%E7%AB%AF%E9%85%8D%E7%BD%AE%E4%BE%8B%E5%AD%90

nginx配置

```nginx
location / {
  try_files $uri $uri/ /index.html;
}
```

## github在线看代码方式

现在教你们一个很方便的代码学习方式，只需要在网址的`github`后面加上`1s`便可以实现在线学习项目的代码了！！！这样就不需要一定要把源代码下载才能学习代码知识了~~

https://github1s.com/176851899/analysis/





# 4.11

1.数字大屏不能出现滚动条

2.3D立体感不好，需要完善

3.代码格式化

4.文件需要利用关注点分离

4.具体模拟数据的名称

5，是否启用mock，切换配置

6.业务代码提交的时候不要console

7.找共同点封装

8.方法封装用动词命名

10.定义  this._trimer,临时_

11.大的路由在view下弄个目录

12. vue中script下属性方法生命周期写法顺序   

    

13. 控制台看见报sockjs.js?9be2:1606 GET http://192.168.43.226:8080/sockjs-node/info?t=1584966826465 net::ERR_CONNECTION_TIMED_OUT这个错误，，虽然它不影响咱们程序的运行，但是它也是一直存在，看着也不舒服，所以咱们今天来解决这个错误。网上找到的原因说是：sockjs-node是一个JavaScript库，提供跨浏览器JavaScript的API，创建了一个低延迟、全双工的浏览器.

    ​      https://www.10qianwan.com/articledetail/623252.html

    在项目运行以后，network会一直调用这个接口。如果没有使用，那么就一直会报这个异常。

    #### 

# 4.14

# client?a57c:172 [WDS] Disconnected 错误解决

出现原因：win10默认设置的ipv6的[优先级](https://so.csdn.net/so/search?q=优先级&spm=1001.2101.3001.7020)高于ipv4，所以把localhost解析到ipv6去了（这里主要因为项目使用了代理服务软件解析问题）

也有可能是端口占用问题，这种解决办法就是将config.js里面的port端口号修改

一种方法解决办法：***打开chorm浏览器点击右键检查—>找到Application—>点开Stroage下的localstorage：
将下述句子 复制在key上

``` vbnet
loglevel:webpack-dev-server     value：SILENT
```

https://blog.csdn.net/weixin_59519449/article/details/124027978



写职业规划：

# 4.15

听技术分享

1.vue 中ref和动态渲染ref,注意可能要隐式迭代才能拿到那个元素对象

2.less混入和循环渲染样式 lessk快速入门 https://less.bootcss.com/#%E6%A6%82%E8%A7%88

3.css3  fliter

4.background-clip

5.精灵图的位置读取http://www.spritecow.com/

6.好用的动画库，animejs，animate.css



# 4.18

学习webGL和前端常用设计模式

安装devops公司项目

# 4.19

开早会

npm 或者yarn 出错一般是包的问题，在package.json,看是注释掉还是干嘛



# 4.20

看和学习devops项目代码



# 4.21

window.screen.width（获取屏幕分辨率）

当页面只有一个图表的时候直接用 window.onresize = myChart.resize 就可以了（eacharts方法）

如果 有很多回调，为了保险可以在外面包一个  setTimeout(()=>{},0)利用它属于宏任务



# 5.5

在js代码运行时如果数字太长的，由于计算机的原理本身，这个数字会变为其它数字，不准，可以用字符串‘30000255255525522’

`vuepress` 可以来快速搭建个人博客，文档，如vue官方文档



# 5.10  搭建Unpkg （通常做私有化部署cdn）

1.unpkg 是一个内容源自 npm 的全球快速 CDN。（通常做私有化部署）（还需要java环境装个JRE就可以https://pc.qq.com/search.html#!keyword=jre）

> 注：它部署在 cloudflare上，在大陆地区访问到的是香港节点。 它支持 h/2 和很多新特性，如果不考虑网络延迟的原因，性能优化较为出色。在国内一些互联网公司也有镜像，例如[知乎](http://unpkg.zhimg.com/)和[饿了么](http://npm.elemecdn.com/)。

它能以快速而简单的方式提供任意包、任意文件，通过类似这样的 URL ：unpkg.com/:package@:version/:file

https://zhuanlan.zhihu.com/p/84119287

这个项目node 版本具于node12

本机现在为node14.19.1,npmwei6.14.16

tsc 4.4.5

yarn 1.22.15

vue-cli 4.5.15

2.nvm下载node问题：

使用教程https://juejin.cn/post/7011398696999288839

1. 出现诸如以下错误
   - nodejs An existing connection was forcibly closed by the remote host:连接被强行关闭
   - Could not retrieve [https://nodejs.org/dist/latest/SHASUMS256.txt](https://link.jianshu.com/?t=https%3A%2F%2Fnodejs.org%2Fdist%2Flatest%2FSHASUMS256.txt):无法获得指定的校验文件

https://blog.csdn.net/weixin_30919235/article/details/101316412?utm_medium=distribute.pc_relevant.none-task-blog-2~default~baidujs_title~default-0-101316412-blog-107105016.pc_relevant_default&spm=1001.2101.3001.4242.1&utm_relevant_index=3



3.nvm遇到修改权限问题：

(1)若我们有时遇到不能修改文件的状况，可以先把文件进行修改，之后保存到桌面，接着再复制粘贴替换到原始文件的目录路径下即可，这是最快捷显示没有权限修改电脑文件的方法。

(2)切换node时打开管理员cmd

4.git克隆指定的分支：git clone -b 分支名 仓库地址



# 5.13

在 CSS 选择器家族中，新增这样一类比较新的选择器 -- **逻辑选择器**，目前共有 4 名成员：

- `:is`
- `:where`
- `:not`
- `:has`
- 



# 5.18

1.质检qc部分编辑后端出错，没有找到task

2.流水线构建部分保存



# 5.23



![image-20220523165821340](C:\Users\晨\AppData\Roaming\Typora\typora-user-images\image-20220523165821340.png)



![image-20220524102705377](C:\Users\晨\AppData\Roaming\Typora\typora-user-images\image-20220524102705377.png)

# pngquant failed to build, make sure that libpng-dev is installed 

解决方案如下：重新安装 libpng-dev 

```typescript

$ yarn install --save-dev pngquant --msvs_version=2013
```

https://github.com/quasarframework/icongenie/issues/69



![前端缓存.png](https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/63ce805fb7074cbe92e04d00a1ff75b9~tplv-k3u1fbpfcp-zoom-in-crop-mark:1304:0:0:0.awebp?)













# 5.25

vue中，ctrl+鼠标滑到变量上快速转到相关处（安装了vetur等vue插件）







# 5.30

 React 项目中使用 TShttps://blog.csdn.net/shentian885/article/details/123784969

 ![image-20220601094702760](C:\Users\晨\AppData\Roaming\Typora\typora-user-images\image-20220601094702760.png)











6.6

1.===

NaN === NaN; // => false
NaN === 1;   // => false

-0 === +0; // => true

2.`Object.is(valueA,valueB)` 以与严格相等运算符相同的方式检查相等性的参数，但有两个区别。

首先，`NaN` 等于另一个 `NaN` 值：

```
Object.is(NaN, NaN); // => true
Object.is(NaN, 1);   // => false
复制代码
```

其次，`Object.is()` 区分 `-0` 和 `+0`：

```
Object.is(-0, +0); // => false
```

作者：杭州程序员张张
链接：https://juejin.cn/post/6844904193208287245
来源：稀土掘金
著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。



布尔值可以这样用

let a='dfg'

let flag=!!a ，flag相当于true，一直取反

# 空值合并运算符 (??)

？？是一个逻辑运算符，当其左侧操作数为null或未定义时，返回其右侧操作数，否则返回其左侧操作数。

主要用于设置默认值，比三目方便

如

let b=1

 let a=null?b:'没有东西'

let a=b??'没有东西'



## ts字面量类型的用法

![image-20220608162748969](C:\Users\晨\AppData\Roaming\Typora\typora-user-images\image-20220608162748969.png)

## 6.8开会：

前端物料平台：

6月：抓紧改bug

及时写日志，详细

做之前先了解业务

导出pdf https://blog.csdn.net/weixin_43672560/article/details/105121186

&&的巧用

 if (!this.count) {

​     const arr = [...this.branchList[0]?.children, ...this.branchList[1]?.children]

​     console.log(arr)

​     const { key, label } = arr.find(i => i.label === val.branch)

​     this.gitBranch = {

​      key,

​      label

​     }

​    }

​    this.count++

​    this.count > 1 && (this.gitBranch = { key: '', label: '' } && this.form.setFieldsValue({ branch: undefined }))





6.15

**Maven****仓库**

**自定义****maven****库**

**svn****代理**

**k8s**