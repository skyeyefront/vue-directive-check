#自定义值检查指令
 * 表单输入值校验
 *
 * modifiers    force（第一次强制校验）
 * arg          支持forms中的函数，当校验函数名有驼峰时，注意在模板中用短横线’-‘连接
 *
 * 返回值
 *              null                                初始值
 *              false                               校验失败
 *              true                                校验成功
 *
 * 在模板中使用
 *              v-check:email="abc"                  checkAbc
 *              v-check:email.force="a.abc"          a.checkAbc
 *              v-check:email.force="a.b.c.abc"      a.b.c.checkAbc
 
 * 若在v-for（循环）中使用，必须绑定v-bind:loop-var="循环变量"，而且循环变量必须是object（{}），不能是一个基础类型（number，string）
 * 当校验函数包含多个参数时，必须绑定v-bind:multi-args="[参数2, 参数3, ..., 参数n]"（参数1就是校验的值即check指令绑定的变量）