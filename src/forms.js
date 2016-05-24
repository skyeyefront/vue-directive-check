/**
 * Created by huangxinxin on 16/5/18.
 */
import regs from './regs.js'
import log from './logs.js'

let regsConfigs = regs.configs
let configs = {}
/**
 * 计算长度
 * @param v
 * @returns {*}
 * @private
 */
let _length = function (v) {
  if (configs.isNumber(v) || configs.isString(v)) {
    v = '' + v
    return v.length
  } else if (configs.isArray(v)) {
    return v.length
  } else if (configs.isObject(v)) {
    return Object.keys(v).length
  } else {
    return -1
  }
}
/**
 * 函数命名规则 isYourFunctionName（必须是驼峰式）
 */
// 数字
configs.isNumber = function (v) {
  return typeof v === 'number' || !isNaN(+v)
}

// 字符串
configs.isString = function (v) {
  return typeof v === 'string'
}

// 数组
configs.isArray = function (v) {
  return v instanceof Array
}

// 对象
configs.isObject = function (v) {
  return v instanceof Object
}

// 方法
configs.isFunction = function (v) {
  return v instanceof Function
}

// 非空
configs.isNotEmpty = function (v, isTrim = false) {
  if (v) {
    if (v instanceof Object) {
      return Object.keys(v).length > 0
    }
    if (v instanceof Array) {
      return v.length > 0
    }
    if (isTrim) {
      return ('' + v).trim() !== ''
    }
    return true
  }
  return false
}

// 身份证（中国）
configs.isId = function (v) {
  return regsConfigs.id.test(v)
}

// 邮箱格式
configs.isEmail = function (v) {
  return regsConfigs.email.test(v)
}

// 移动电话（中国）
configs.isMobile = function (v) {
  return regsConfigs.mobile.test(v)
}

// 电话（包括移动电话和固话）
configs.isTel = function (v) {
  return regsConfigs.tel.test(v)
}

// ipv4
configs.isIpv4 = function (v) {
  return regsConfigs.ipv4.test(v)
}

// ipv6
configs.isIpv6 = function (v) {
  var s = v.match(/:/g)
  if (s) {
    return s.length <= 7 && /::/.test(v) ? /^([\da-f]{1,4}(:|::)){1,6}[\da-f]{1,4}$/i.test(v) : /^([\da-f]{1,4}:){7}[\da-f]{1,4}$/i.test(v)
  }
  return false
}

// ip
configs.isIp = function (v) {
  return configs.isIpv4(v) || configs.isIpv6(v)
}

// md5
configs.isMd5 = function (v) {
  return regsConfigs.md5.test(v)
}

// url
configs.isUrl = function (v) {
  return regsConfigs.url.test(v)
}

// 最小长度
configs.isMinLen = function (v, l) {
  return _length(v) >= l
}

// 最大长度
configs.isMaxLen = function (v, l) {
  return _length(v) <= l
}

// 长度范围
configs.isRangeLen = function (v, min, max) {
  return configs.isMinLen(v, min) && configs.isMaxLen(v, max)
}

// json
configs.isJson = function (v) {
  try {
    JSON.parse(v)
    return true
  } catch (err) {
    return false
  }
}

let extend = function (_configs) {
  if (_configs instanceof Object) {
    for (let k in _configs) {
      let v = _configs[ k ]
      if (k.indexOf('is') === 0) {
        if (v instanceof Function) {
          let r = v(configs, regsConfigs)
          if (r instanceof Function) {
            if (configs[ k ]) {
              log.info('覆盖[' + k + ']校验方法成功!')
            } else {
              log.info('新增[' + k + ']校验方法成功!')
            }
            configs[ k ] = r
          } else {
            log.error('安装[' + k + ']校验方法失败, 原因: 返回值不是一个Function')
          }
        } else {
          log.error('安装[' + k + ']校验方法失败, 原因: 值不是一个Function')
        }
      } else {
        log.error('安装[' + k + ']校验方法失败, 请参考命名格式: isYourFunctionName(必须是驼峰式)')
      }
    }
  }
}

export default { configs, extend }
