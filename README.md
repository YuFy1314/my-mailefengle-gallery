# my-mailefengle-gallery
 
![](https://img.shields.io/badge/node-%3E%3D6.0-brightgreen.svg) ![](https://img.shields.io/badge/npm-v3.5.0-blue.svg) ![](https://img.shields.io/appveyor/ci/gruntjs/grunt.svg) ![](https://img.shields.io/badge/dependencies-up%20to%20date-green.svg) ![](https://img.shields.io/badge/dev%20dependencies-up%20to%20date-green.svg)

此前发布了两个小白入手vue项目的栗子:
> vue-cli + ElementUI + Less的demo: https://github.com/YuFy1314/vue-cli-demo

> 基于vue 2.x + webpack 4.x 配置的demo: https://github.com/YuFy1314/my-webpack-project

这个项目主要是为了进一步熟悉vue项目的开发, 既然经过上面的两个案例知道了vue项目如何开发以及简单的项目的基本配置构建, 那么现在这个项目就是要知道整个Vue项目的开发流程以及构建, 还有结合Vue全家桶如何开发, 开发的过程中, 项目的结构也是至关重要

```
│   .gitignore                                                    // Git push到仓库忽略的文件
│   package.json                                                  // 配置文件
│   README.md                                                     // 入手项目前要读的文档
│   vue.config.js                                                 // 配置Vue项目可预览
│   webpack.config.js                                             // Webpack配置文件
│                                                                 
└───src                                                           // 项目主体文件夹
    │   App.vue                                                   // Vue入口主组件
    │   index.html                                                // 项目主页
    │   index.js                                                  // 项目入口 Vue的实例
    │                                                             
    ├───assets                                                    // 静态资源文件夹
    │   ├───css                                                   
    │   │       common.css                                        
    │   │       reset.css                                         
    │   │                                                         
    │   ├───fonts                                                 // 在阿里icon下载的图标库
    │   │       iconfont.css                                      
    │   │       iconfont.eot                                      
    │   │       iconfont.svg                                      
    │   │       iconfont.ttf                                      
    │   │       iconfont.woff                                     
    │   │                                                         
    │   ├───js                                                    
    │   │       style.js                                          // 引入所有第三方样式
    │   │                                                         
    │   └───less                                                  
    │       │   common.less                                       // 公共样式
    │       │   reset.less                                        // 默认样式
    │       │   theme.less                                        // 引入主题样式
    │       │                                                     
    │       └───theme                                             // 主题样式的定义
    │               theme-custom.less                             
    │               theme-default.less                            // 默认主题
    │               theme-navy.less                               
    │               theme-redbegonia.less                         
    │               theme-yahei.less                              
    │                                                             
    ├───components                                                
    │   ├───Collect                                               
    │   │       Collect.vue                                       // 收藏组件
    │   │                                                         
    │   ├───Discovery                                             
    │   │       Discovery.vue                                     // 发现组件
    │   │                                                         
    │   ├───Home                                                  
    │   │       Home.vue                                          // 主页组件
    │   │       MovieDetail.vue                                   // 电影详情组件
    │   │                                                         
    │   ├───index                                                 
    │   │       Index.vue                                         // 首页组件
    │   │                                                         
    │   └───Theme                                                 
    │           Theme.vue                                         // 个人主题组件
    │                                                             
    ├───plugins                                                   // 公共插件库
    │       exchangeThemePlugin.js                                // 切换主题插件
    │       publicPlugins.js                                      // 公共插件的引入
    │                                                             
    ├───public                                                    // 公共组件库
    │       AddressSelector.vue                                   // 地址选择器组件
    │       Footer.vue                                            // 尾部组件
    │       Grid.vue                                              // 单图组件
    │       Header.vue                                            // 一级头部组件
    │       Menu.vue                                              // 侧栏菜单组件
    │       Modal.vue                                             // 模态框组件
    │       MovieSearch.vue                                       // 电影搜索组件
    │       PageTop.vue                                           // 二级头部组件
    │       publicComponents.js                                   // 公共组件的引入
    │                                                             
    ├───router                                                    // 路由
    │       router.js                                             
    │                                                             
    └───vuex                                                      // Vue状态管理库
            getters.js                                            
            mutations.js                                          
            store.js                                              
```
## Branches
#### theme里程碑:
这里主要针对项目的皮肤主题的管理多元化进行开发
用户可以根据自己的喜好来设置个性化皮肤
 
#### step-by-step里程碑:
这个里程碑主要针对各大功能块进行开发, 一些主要需求业务的流程的开发
目前的功能：
* 主页查看电影相关信息，点击电影可以查看详情
* 点击个人头像可以查看相关资料
* 编辑个人资料更换头像
* 切换App皮肤

-----------------------
纯粹个人瞎搞，想熟悉一下Vue全家桶+webpack构建项目的开发流程^_^

## 技术栈
vue2 + vuex + vue-router + vue-resource + Webpack + ESNext + Muse-ui + Less + Flex + Bootstrap + JQuery

## 首要任务
首先你需要安装Node.js，本项目中使用的是v10.8.0。安装完Node.js后，会自带npm包管理器。
如果这两个你都有了就直接走下一步☟☟☟
## 安装依赖
> npm install
## 生产环境
> npm run build
## 开发环境
> npm start / npm run dev
## 打开浏览器
地址输入localhost:8080  就可以看到项目运行成功了
## 项目运行效果
[预览项目猛戳](https://yufy1314.github.io/my-mailefengle-gallery/)（请用chrome手机模式预览）
