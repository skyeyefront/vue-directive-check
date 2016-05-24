# 自定义值检查指令: v-check
### modifiers    
	force（第一次强制校验）
	
### arg          
	支持forms中的函数，当校验函数名有驼峰时，注意在模板中用短横线’-‘连接
	
### 返回值
    null  初始值
    false 校验失败
    true  校验成功
    
### 在模板中使用
	v-check:email="abc"                  checkAbc
	v-check:email.force="a.abc"          a.checkAbc
	v-check:email.force="a.b.c.abc"      a.b.c.checkAbc
	
### 注意
	1、若在v-for（循环）中使用，必须绑定v-bind:loop-var="循环变量"，而且循环变量必须是object（{}），不能是一个基础类型（number，string）
	2、当校验函数包含多个参数时，必须绑定v-bind:multi-args="[参数2, 参数3, ..., 参数n]"（参数1就是校验的值即check指令绑定的变量）
	
### 安装
	如下‘FILE_PATH’代表vue.directive.check的文件路径
	// 全局
	<script src="FILE_PATH"></script>
	Vue.use(VueDirectiveCheck, options)
	
	// AMD		
	define([FILE_PATH], function(VueDirectiveCheck){
		Vue.use(VueDirectiveCheck, options)
	})
	require([FILE_PATH], function(VueDirectiveCheck){
		Vue.use(VueDirectiveCheck, options)
	})
	
	// CommonJS
	var VueDirectiveCheck = require(FILE_PATH)
	Vue.use(VueDirectiveCheck, options)
	
	// ES6
	import VueDirectiveCheck from FILE_PATH
	Vue.use(VueDirectiveCheck, options)
	
### 安装选项
	options = {
		debug: true | false, // 为true时包含调试输出
		/* 检验方法扩展 */
		formExtends: {
     		// 新增方法
      		isTest: function (configs, regs) {
        		// configs 已有的校验方法 [Object]
        		// regs 已有的正则 [Object]
        		return function (v) {
          		// 对v的校验逻辑 ...
          		// return 校验结果
        		}
      		},
      		// 覆盖已有方法
      		isMd5: function (configs, regs) {
        		return function (v) {
		
        		}
      		},
      		/* 错误示例 */
      		// 命名不符合[isYourFunctionName]规范
      		t1: function () {

      		},
      		// 未返回一个函数
      		isT1: function () {

      		},
      		// 不是函数
      		isT2: 'hi test'
    	},
    	
    	/* 正则表达式扩展 */
    	regExtends: {
      		md5: /^[a-z0-9]{32}$/,
      		md6: /^[a-z0-9]{32}$/
    	}
	}
	
### 示例运行
	运行环境：python2.7, Flask, npm
	进入examples目录执行python demorun.py