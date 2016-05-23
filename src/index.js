import forms from './forms.js'
import regs from './regs.js'
import log from './logs.js'

let formsConfigs = forms.configs

export default {
  install: function (Vue, options = { debug: false, formExtends: {}, regExtends: {} }) {
    let id = 'check'
    let debug = options.debug
    let formExtends = options.formExtends
    let regExtends = options.regExtends
    log.isDebug = debug

    /**
     * 生成驼峰串
     * @param  {[type]} s      [description] 字符串
     * @param  {[type]} prefix [description] 前缀
     * @param  {[type]} sp     [description] 分隔符，默认’.‘
     * @return {[type]}        [description] 驼峰字符串
     */
    let capitalize = function (s, prefix, sp) {
      let f = function (ns, a) {
        return ns + a[ 0 ].toUpperCase() + a.slice(1, a.length)
      }
      return prefix + s.split(sp || '.').reduce(f, '')
    }

    /**
     * 输入值校验
     *
     * modifiers    force（第一次强制校验）
     * arg          支持formsConfigs中的函数，当校验函数名有驼峰时，注意在模板中用短横线’-‘连接
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
     */
    let check = {
      // 若在v-for（循环）中使用，必须绑定v-bind:loop-var="循环变量"，而且循环变量必须是object（{}），不能是一个基础类型（number，string）
      // 当校验函数包含多个参数时，必须绑定v-bind:multi-args="[参数2, 参数3, ..., 参数n]"（参数1就是校验的值即check指令绑定的变量）
      params: [ 'loop-var', 'multi-args' ],
      bind: function () {
        // 准备工作
        let expressionArr = this.expression.split('.')
        this.init = -1
        this.formsKey = capitalize(this.arg, 'is', '-')
        this.loopVar = this.params.loopVar
        this.expressionSuffix = capitalize(expressionArr.pop(), 'check')
        if (this.loopVar) {
          Vue.set(this.loopVar, this.expressionSuffix, null)
        } else {
          this.noLoopVar = expressionArr.push(this.expressionSuffix) && expressionArr.join('.')
          this.vm.$set(this.noLoopVar, null)
        }
        log.log('指令[' + id + '] => bind', '方法: ' + this.formsKey)
        // log.log(this.descriptor)
        // log.log(this.params)
        // log.log(this.vm)
      },
      update: function (now) {
        log.log('指令[' + id + '] => update', now)
        // 值更新时的工作
        // 也会以初始值为参数调用一次
        let flag = now
        if (this.init === -1) {
          if (now instanceof Array && !now.length) {
            flag = false
          }
          if (now && now instanceof Object && !Object.keys(now).length) {
            flag = false
          }
        }
        this.init += 1
        if (this.init || this.modifiers.force || flag) {
          var result = formsConfigs[ this.formsKey ] && formsConfigs[ this.formsKey ].apply(formsConfigs, [ now ].concat(this.params.multiArgs || []))
          if (this.loopVar) {
            Vue.set(this.loopVar, this.expressionSuffix, result)
          } else {
            this.vm.$set(this.noLoopVar, result)
          }
        }
      }
    }

    // 安装
    if (Vue && Vue.directive instanceof Function) {
      Vue.directive(id, check)
      log.info('指令[' + id + ']安装成功!')
      forms.extend(formExtends)
      regs.extend(regExtends)
    } else {
      log.error('指令[' + id + ']安装失败, 原因: Vue 异常')
    }
  },
  forms: forms.configs,
  regs: regs.configs
}
