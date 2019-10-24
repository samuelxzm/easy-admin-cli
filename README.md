# 一.概述

基于vue+element二次开发管理平台框架的构建工具。

# 二.使用

在安装node前提下

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

## 三.项目配置

1.手工编辑json文件

配置路由 pages/router.json

可视化配置路由页面
接口（api在settings）
路由文件json  附件 接口返回路由格式

2.logo配置及功能

pages/Main.vue文件

