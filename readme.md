# 移动端音乐 WebApp

基于 Vue(2.5) + vuex + vue-router + vue-axios +better-scroll + Scss + ES6 等开发一款移动端音乐 WebApp，UI 界面参考了安卓版的网易云音乐。

:yum:项目演示地址：[移动端音乐 WebApp](http://120.79.162.149:3002)，如果你觉得我做的不错的话，我就厚着脸皮求个 **star** :star: 哈，**star** 是对我最大的鼓励呦（脸红脸红）。

:satisfied:源码地址：[vue-music-webapp](https://github.com/CaiJinyc/vue-music-webapp)，欢迎 star 和 fork 哦~

## 预览

图片虽然压缩过了，但是几张加载一起还是有 3MB 左右，所以请耐心等待一下啦:joy:。感觉不错的可以去上面 :point_up:的地址体验一下呦~

#### 推荐、排行榜、歌手

![推荐、排行、歌手](http://p87llnk7g.bkt.clouddn.com/18-5-15/21667995.jpg)

#### 歌单详情、个人中心

![详情页面](http://p87llnk7g.bkt.clouddn.com/18-5-15/4430556.jpg)

#### 播放器、播放列表

![播放器](http://p87llnk7g.bkt.clouddn.com/18-5-15/81352770.jpg)

#### 搜索页面

![搜索](http://p87llnk7g.bkt.clouddn.com/18-5-15/77000462.jpg)



## 开发目的

通过学习开发一个 Vue 全家桶项目，让自己更熟练的使用 Vue 全家桶、模块换开发、ES6 等知识，提高自己的技术能力。

## 技术栈

**前端**

* `Vue`：用于构建用户界面的 MVVM 框架
* `vue-router`：为单页面应用提供的路由系统，使用了 `Lazy Loading Routes` 技术来实现异步加载优化性能
* `vuex`：Vue 集中状态管理，在多个组件共享某些状态时非常便捷
* `vue-lazyload`：实现图片懒加载，节省用户流量，优化页面加载速度
* `better-scroll`：iscroll 的优化版，使移动端滑动体验更加流畅
* `SCSS`：css 预编译处理器
* `ES6`：ECMAScript 新一代语法，模块化、解构赋值、Promise、Class 等方法非常好用
* `fastclick` ：消除 click 移动游览器 300ms 的延迟
* ​

**后端**

* `Node.js`：利用 Express 搭建的本地测试服务器
* `vue-axios`：用来请求后端 API 音乐数据
* `NeteaseCloudMusicApi`：网易云音乐 NodeJS 版 API

**其他工具**

* `vue-cli`：Vue 脚手架工具，快速初始化项目代码
* `eslint`：代码风格检查工具，帮助我们规范代码书写（一定要养成良好的代码规范）
* `iconfont` ：阿里巴巴图标库，谁用谁知道

## TODO



## 实现功能

播放器内核、推荐页面、热榜页面、歌手页面、歌单详情、歌手详情、排行榜详情、搜索页面、播放列表、用户中心等等功能。

### 推荐页面

推荐页分成三个部分，分别是 banner 轮播图、推荐歌单、推荐歌曲，数据都是使用 `axios` 请求 API 获取得到的，图片都使用 `vue-lazyload` 实现懒加载。

轮播图：使用 `better-scroll` 实现，具体可以看这里 [Slide](https://ustbhuangyi.github.io/better-scroll/doc/zh-hans/options-advanced.html#snap) 。

推荐歌单，推荐歌曲：使用 `vuex` 管理数据，方便组件之间的数据交互（播放器播放歌曲）。因为数据上还有播放数量，所以就顺便也加上去了。

### 排行榜页面

同样是通过 API 获取到排行榜的数据，但是因为 API 获取到的是排行榜中所有歌曲的数据，所以难免在加载速度上有点慢，后期再看能不能优化一下，加载的慢毕竟太影响用户体验了，别的就没什么了。

### 歌手页面

实现歌手列表的左右联动（这个需要理解理解），因为之前已经写过和这个有关的博客，所以就不多写了，具体可以看我之前的这个笔记 :arrow_right: [移动端字母索引导航](http://caijin.tech/blog/2018/04/23/2018-4-23-list-view/) 。

### 歌曲列表组件

用来显示歌曲列表，在很多的地方都进行了复用，例如：歌单详情页、排行榜详情页、歌手详情页、搜索结果、用户中心等等。

### 歌单详情页

通过歌单的 ID 来获取歌单中的歌曲数据，然后还做了一些体验上面的交互，比如上滑显示状态栏然后将状态栏标题变为歌单名，具体可以尝试一下就知道了。

然后就是复用 歌曲列表组建 来显示歌曲。

### 排行榜详情、歌手详情

和歌单详情基本上没有什么区别，除了 UI 界面方面有细微的改动（根据不同的内容作出不同的优化）。

### 播放器

最最最重要的组件，毕竟是个音乐播放器，不能放歌那啥都是扯淡了。

实现功能：顺序播放、单曲循环、随机播放、收藏等。

播放、暂停使用 HTML5 的 audio 实现。

数据、播放状态、播放历史、习惯歌曲等方面使用了 `vuex` 来进行管理，因为数据太多，组件直接传递的话是会死人的，所以还是老老实实的用 `vuex` 吧，数据之前的传递真的很方便。

图标使用 `iconfont` 阿里巴巴图标库，中间的唱片旋转动画使用了 `animation` 实现。

歌词部分获取到网易的歌词数据，然后使用 第三方库 [`lyric-parser`](https://github.com/ustbhuangyi/lyric-parser) 进行处理。实现显示歌词、拖动进度条歌词同步滚动、歌词跟随歌曲进度高亮。

通过 `localstorage` 存储喜欢歌曲、播放历史数据。

### 播放列表

显示当前播放歌曲，可以用来删除列表中的歌曲、以及选择播放歌曲。

### 搜索功能

实现功能：搜索歌手、歌单、歌曲、数据节流、上拉刷新、保存搜索记录。

通过关键字请求 API 获取搜索数据，显示歌手、歌单、歌曲。

实现了上刷新，因为搜索可以设置请求数据的条数，所以可以用来实现上刷新的功能。

通过节流函数实现数据节流，通过 `localstorage` 存储搜索数据。

### 用户中心

将在本地存储的数据显示出来，方便用户使用，后期可以添加更多功能。

### 其他

此应用的全部数据来自 QQ音乐，推荐页的歌单列表及歌词是利用 `axios` 结合 `node.js` 代理后端请求抓取的。

全局通用的应用级状态使用 `vuex` 集中管理

全局引入 `fastclick` 库，消除 click 移动浏览器300ms延迟

页面是响应式的，适配常见的移动端屏幕，采用 `flex` 布局

## Build Setup

```bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).