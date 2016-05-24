/**
 * Created by huangxinxin on 16/5/20.
 */
import $ from 'jquery'
import Vue from 'vue'
import hljs from 'highlight.js'

import './index.css'
import template from './index.html'
import VueDirectiveCheck from '../../../src/index.js'

// 根据开发环境进行对应的操作
let debug = process.skyeye.ENV === 'dev'
Vue.config.debug = debug
Vue.config.silent = !debug

Vue.use(
  VueDirectiveCheck, {
    debug,
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
    regExtends: {
      md5: /^[a-z0-9]{32}$/,
      md6: /^[a-z0-9]{32}$/
    }
  }
)

let app = {
  data () {
    return {
      a1: 360, // isNumber
      a2: '360 skyeye', // isString
      a3: [ 360, 'skyeye' ], // isArray
      a4: { org: 'skyeye' }, // isObject
      a5: function () { return 'skyeye' }, // isFunction
      a6: 'hi, skyeye', // isNotEmpty
      a6Options: {
        isTrim: false
      },
      a7: '110110200512250360', // isId
      a8: 'huangxin-xy@360.cn', // isEmail
      a9: '18511581045', // isMobile
      a10: '56601234', // isTel
      a11: '192.168.1.1', // isIpv4
      a12: '2001:0DB8:02de:0000:0000:0000:0000:0e13', // isIpv6
      a13: '8.8.8.8', // isIp
      a14: '9e107d9d372bb6826bd81d3542a419d6', // isMd5
      a15: 'https://skyeye.360safe.com/', // isUrl
      a16: 'hi, i am a coder', // isMinLen
      a16Options: {
        len: 10
      },
      a17: 'hi, we are skyeyer', // isMaxLen
      a17Options: {
        len: 20
      },
      a18: 'hi, enjoy', // isRangeLen
      a18Options: {
        min: 10,
        max: 20
      },
      a19: '{"org": "skyeye"}', // isJson
      a20: [ { // 循环校验
        id: '110110200512250360',
        email: 'huangxin-xy@360.cn',
        password: '123456'
      }, {
        id: '11011020051225',
        email: 'huangxin-xy360.cn',
        password: '12345678'
      } ],
      a20Options: {
        passwordLen: {
          min: 8,
          max: 20
        }
      }
    }
  },
  ready: function () {
    $('pre').each(function (i, block) {
      hljs.highlightBlock(block)
    })
  },
  template
}

let run = function () {
  return new Vue({
    el: 'body',
    components: {
      app
    }
  })
}
run()
