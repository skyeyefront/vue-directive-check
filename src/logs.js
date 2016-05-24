/**
 * Created by huangxinxin on 16/5/18.
 */
export default {
  isDebug: false,
  log: function (...args) {
    if (this.isDebug) {
      console.log(...args)
    }
  },
  info: function (...args) {
    if (this.isDebug) {
      console.info(...args)
    }
  },
  warn: function (...args) {
    if (this.isDebug) {
      console.warn(...args)
    }
  },
  error: function (...args) {
    if (this.isDebug) {
      console.error(...args)
    }
  }
}
