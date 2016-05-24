/**
 * Created by huangxinxin on 16/5/20.
 */
import $ from 'jquery'
import Vue from 'vue'
import hljs from 'highlight.js'

import './index.css'
import template from './index.html'
import VueDirectiveCheck from '../../../src/index.js'

Vue.use(
  VueDirectiveCheck, {
    debug: true,
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
      name: 'skyeye huangxin'
    }
  },
  methods: {
    onChange: function () {
      console.log(this.checkName)
    }
  },
  ready: function () {
    $('pre').each(function (i, block) {
      hljs.highlightBlock(block)
    })
  },
  template
}

let example = new Vue({
  el: 'body',
  components: {
    app
  }
})
example
