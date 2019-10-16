#!/usr/bin/env node
const program = require('commander')
 
// 定义当前版本
// 定义使用方法
// 定义四个指令
program
 .version(require('../package').version)
 .usage('<command> [options]')
 .command('add', '增加新模板')
 .command('delete', '删除模板')
 .command('list', '展示模板列表')
 .command('init', '根据模板初始化项目')
  
// 解析命令行参数
program.parse(process.argv)