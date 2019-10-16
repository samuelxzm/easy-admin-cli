# 一.概述

基于vue+element二次开发管理平台框架的构建工具。

# 二.使用

在安装node前提下

```
1.配置淘宝镜像
npm install -g cnpm --registry=https://registry.npm.taobao.org
2.全局安装easy-admin-cli 构建工具
cnpm install easy-admin-cli -g
安装完成后可使用命令
1)easy-admin-add            增加新模板
2)easy-admin-delete         删除模板
3)easy-admin-list           显示模板列表
4)easy-admin-init           根据模板初始化项目
3.新建项目
easy-admin-init mainpage newproject
//easy-admin-init <模板名称> <新项目名称>
//模板名称：
//1)mainpage：整体框架
//2)simple：简易框架
4.打开项目目录
cd newproject
5.安装依赖
cnpm install
6.启动项目
npm run serve


//配置路由 src/router/index
1.手工 例子
2.可视化配置路由页面
3.接口（api在settings）
路由文件json  附件 接口返回路由格式



//热加载配置

//logo 图标

//src setting配置详解
文件中有详细的注释



关于首页（是否为首页，可能为两级（取二级第一个））首页不可关闭

右上角 图标区域
1.不显示
2.增加一个
3.每个图标讲解
1）关闭：功能
2）刷新：功能说明
3）最大化
4）单独打开
5) 消息：接口配置（数量）说明
a.总数接口（必）
b.>0时 消息列表接口（必）
c.消息盒子页面（可选，不配置使用默认）
d.消息中心页面（必）
6）帮助改成？（如果需要必须配置路径（在线帮助））
7）设置
主题
个人中心图标
4.加图标
5.改造组件
6.全局搜索（接口配置）


启动环境配置：开发环境  生产环境  （修改，配置）
错误日志根据开发环境
SQLite

批处理 start （npm run install等）

入口文件配置（title）
启动遮罩
1.可能升级（依赖包）
2.让不让改
污染 侵入式

错误
日志 logutil（保存）
本地数据库
工具校验
在线帮助
```

