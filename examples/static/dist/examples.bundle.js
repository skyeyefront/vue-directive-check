webpackJsonp([0],{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _jquery = __webpack_require__(1);

	var _jquery2 = _interopRequireDefault(_jquery);

	var _vue = __webpack_require__(2);

	var _vue2 = _interopRequireDefault(_vue);

	var _highlight = __webpack_require__(4);

	var _highlight2 = _interopRequireDefault(_highlight);

	__webpack_require__(161);

	var _index = __webpack_require__(165);

	var _index2 = _interopRequireDefault(_index);

	var _index3 = __webpack_require__(166);

	var _index4 = _interopRequireDefault(_index3);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	/**
	 * Created by huangxinxin on 16/5/20.
	 */


	_vue2.default.use(_index4.default, {
	  debug: true,
	  formExtends: {
	    // 新增方法
	    isTest: function isTest(configs, regs) {
	      // configs 已有的校验方法 [Object]
	      // regs 已有的正则 [Object]
	      return function (v) {
	        // 对v的校验逻辑 ...
	        // return 校验结果
	      };
	    },
	    // 覆盖已有方法
	    isMd5: function isMd5(configs, regs) {
	      return function (v) {};
	    },
	    /* 错误示例 */
	    // 命名不符合[isYourFunctionName]规范
	    t1: function t1() {},
	    // 未返回一个函数
	    isT1: function isT1() {},
	    // 不是函数
	    isT2: 'hi test'
	  },
	  regExtends: {
	    md5: /^[a-z0-9]{32}$/,
	    md6: /^[a-z0-9]{32}$/
	  }
	});

	var app = {
	  data: function data() {
	    return {
	      name: 'skyeye huangxin'
	    };
	  },

	  methods: {
	    onChange: function onChange() {
	      console.log(this.checkName);
	    }
	  },
	  ready: function ready() {
	    (0, _jquery2.default)('pre').each(function (i, block) {
	      _highlight2.default.highlightBlock(block);
	    });
	  },
	  template: _index2.default
	};

	var example = new _vue2.default({
	  el: 'body',
	  components: {
	    app: app
	  }
	});
	example;

/***/ },

/***/ 161:
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(162);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(164)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../node_modules/css-loader/index.js!./index.css", function() {
				var newContent = require("!!./../../../node_modules/css-loader/index.js!./index.css");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },

/***/ 162:
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(163)();
	// imports


	// module
	exports.push([module.id, "html, body {\n    margin: 0;\n    padding: 0;\n    font-family: \"Microsoft YaHei\";\n    font-size: 12px;\n}\n\n.container {\n    max-width: 1024px;\n    margin: 0 auto;\n    padding: 8px 24px 8px 24px;\n}\n\nh1 {\n    color: darkcyan;\n}\n\nh2 {\n    color: #40a070;\n}\n\nsection {\n    padding: 8px;\n    background-color: #2e2e2e;\n    margin: 8px;\n    color: #ffffff;\n}\n\n.checked-result {\n    display: inline-block;\n    height: 30px;\n    line-height: 30px;\n    padding: 0 8px;\n}\n\n.checked-result.error {\n    background-color: #ff5555;\n}\n\n.checked-result.success {\n    background-color: #00cc66;\n}", ""]);

	// exports


/***/ },

/***/ 163:
/***/ function(module, exports) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	// css base code, injected by the css-loader
	module.exports = function() {
		var list = [];

		// return the list of modules as css string
		list.toString = function toString() {
			var result = [];
			for(var i = 0; i < this.length; i++) {
				var item = this[i];
				if(item[2]) {
					result.push("@media " + item[2] + "{" + item[1] + "}");
				} else {
					result.push(item[1]);
				}
			}
			return result.join("");
		};

		// import a list of modules into the list
		list.i = function(modules, mediaQuery) {
			if(typeof modules === "string")
				modules = [[null, modules, ""]];
			var alreadyImportedModules = {};
			for(var i = 0; i < this.length; i++) {
				var id = this[i][0];
				if(typeof id === "number")
					alreadyImportedModules[id] = true;
			}
			for(i = 0; i < modules.length; i++) {
				var item = modules[i];
				// skip already imported module
				// this implementation is not 100% perfect for weird media query combinations
				//  when a module is imported multiple times with different media queries.
				//  I hope this will never occur (Hey this way we have smaller bundles)
				if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
					if(mediaQuery && !item[2]) {
						item[2] = mediaQuery;
					} else if(mediaQuery) {
						item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
					}
					list.push(item);
				}
			}
		};
		return list;
	};


/***/ },

/***/ 164:
/***/ function(module, exports, __webpack_require__) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	var stylesInDom = {},
		memoize = function(fn) {
			var memo;
			return function () {
				if (typeof memo === "undefined") memo = fn.apply(this, arguments);
				return memo;
			};
		},
		isOldIE = memoize(function() {
			return /msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase());
		}),
		getHeadElement = memoize(function () {
			return document.head || document.getElementsByTagName("head")[0];
		}),
		singletonElement = null,
		singletonCounter = 0,
		styleElementsInsertedAtTop = [];

	module.exports = function(list, options) {
		if(false) {
			if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
		}

		options = options || {};
		// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
		// tags it will allow on a page
		if (typeof options.singleton === "undefined") options.singleton = isOldIE();

		// By default, add <style> tags to the bottom of <head>.
		if (typeof options.insertAt === "undefined") options.insertAt = "bottom";

		var styles = listToStyles(list);
		addStylesToDom(styles, options);

		return function update(newList) {
			var mayRemove = [];
			for(var i = 0; i < styles.length; i++) {
				var item = styles[i];
				var domStyle = stylesInDom[item.id];
				domStyle.refs--;
				mayRemove.push(domStyle);
			}
			if(newList) {
				var newStyles = listToStyles(newList);
				addStylesToDom(newStyles, options);
			}
			for(var i = 0; i < mayRemove.length; i++) {
				var domStyle = mayRemove[i];
				if(domStyle.refs === 0) {
					for(var j = 0; j < domStyle.parts.length; j++)
						domStyle.parts[j]();
					delete stylesInDom[domStyle.id];
				}
			}
		};
	}

	function addStylesToDom(styles, options) {
		for(var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];
			if(domStyle) {
				domStyle.refs++;
				for(var j = 0; j < domStyle.parts.length; j++) {
					domStyle.parts[j](item.parts[j]);
				}
				for(; j < item.parts.length; j++) {
					domStyle.parts.push(addStyle(item.parts[j], options));
				}
			} else {
				var parts = [];
				for(var j = 0; j < item.parts.length; j++) {
					parts.push(addStyle(item.parts[j], options));
				}
				stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
			}
		}
	}

	function listToStyles(list) {
		var styles = [];
		var newStyles = {};
		for(var i = 0; i < list.length; i++) {
			var item = list[i];
			var id = item[0];
			var css = item[1];
			var media = item[2];
			var sourceMap = item[3];
			var part = {css: css, media: media, sourceMap: sourceMap};
			if(!newStyles[id])
				styles.push(newStyles[id] = {id: id, parts: [part]});
			else
				newStyles[id].parts.push(part);
		}
		return styles;
	}

	function insertStyleElement(options, styleElement) {
		var head = getHeadElement();
		var lastStyleElementInsertedAtTop = styleElementsInsertedAtTop[styleElementsInsertedAtTop.length - 1];
		if (options.insertAt === "top") {
			if(!lastStyleElementInsertedAtTop) {
				head.insertBefore(styleElement, head.firstChild);
			} else if(lastStyleElementInsertedAtTop.nextSibling) {
				head.insertBefore(styleElement, lastStyleElementInsertedAtTop.nextSibling);
			} else {
				head.appendChild(styleElement);
			}
			styleElementsInsertedAtTop.push(styleElement);
		} else if (options.insertAt === "bottom") {
			head.appendChild(styleElement);
		} else {
			throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
		}
	}

	function removeStyleElement(styleElement) {
		styleElement.parentNode.removeChild(styleElement);
		var idx = styleElementsInsertedAtTop.indexOf(styleElement);
		if(idx >= 0) {
			styleElementsInsertedAtTop.splice(idx, 1);
		}
	}

	function createStyleElement(options) {
		var styleElement = document.createElement("style");
		styleElement.type = "text/css";
		insertStyleElement(options, styleElement);
		return styleElement;
	}

	function createLinkElement(options) {
		var linkElement = document.createElement("link");
		linkElement.rel = "stylesheet";
		insertStyleElement(options, linkElement);
		return linkElement;
	}

	function addStyle(obj, options) {
		var styleElement, update, remove;

		if (options.singleton) {
			var styleIndex = singletonCounter++;
			styleElement = singletonElement || (singletonElement = createStyleElement(options));
			update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
			remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
		} else if(obj.sourceMap &&
			typeof URL === "function" &&
			typeof URL.createObjectURL === "function" &&
			typeof URL.revokeObjectURL === "function" &&
			typeof Blob === "function" &&
			typeof btoa === "function") {
			styleElement = createLinkElement(options);
			update = updateLink.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
				if(styleElement.href)
					URL.revokeObjectURL(styleElement.href);
			};
		} else {
			styleElement = createStyleElement(options);
			update = applyToTag.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
			};
		}

		update(obj);

		return function updateStyle(newObj) {
			if(newObj) {
				if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
					return;
				update(obj = newObj);
			} else {
				remove();
			}
		};
	}

	var replaceText = (function () {
		var textStore = [];

		return function (index, replacement) {
			textStore[index] = replacement;
			return textStore.filter(Boolean).join('\n');
		};
	})();

	function applyToSingletonTag(styleElement, index, remove, obj) {
		var css = remove ? "" : obj.css;

		if (styleElement.styleSheet) {
			styleElement.styleSheet.cssText = replaceText(index, css);
		} else {
			var cssNode = document.createTextNode(css);
			var childNodes = styleElement.childNodes;
			if (childNodes[index]) styleElement.removeChild(childNodes[index]);
			if (childNodes.length) {
				styleElement.insertBefore(cssNode, childNodes[index]);
			} else {
				styleElement.appendChild(cssNode);
			}
		}
	}

	function applyToTag(styleElement, obj) {
		var css = obj.css;
		var media = obj.media;

		if(media) {
			styleElement.setAttribute("media", media)
		}

		if(styleElement.styleSheet) {
			styleElement.styleSheet.cssText = css;
		} else {
			while(styleElement.firstChild) {
				styleElement.removeChild(styleElement.firstChild);
			}
			styleElement.appendChild(document.createTextNode(css));
		}
	}

	function updateLink(linkElement, obj) {
		var css = obj.css;
		var sourceMap = obj.sourceMap;

		if(sourceMap) {
			// http://stackoverflow.com/a/26603875
			css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
		}

		var blob = new Blob([css], { type: "text/css" });

		var oldSrc = linkElement.href;

		linkElement.href = URL.createObjectURL(blob);

		if(oldSrc)
			URL.revokeObjectURL(oldSrc);
	}


/***/ },

/***/ 165:
/***/ function(module, exports) {

	module.exports = "<div id=\"demo\" class=\"container\">\n<h1>Vue自定义指令: v-check</h1>\n\n<!--使用说明-->\n<h2>使用说明:</h2>\n<section id=\"usages\">\n<h3>第一步: 安装</h3>\n<pre class=\"javascript\">\nVue.use(\n  VueDirectiveCheck, {\n    debug: true,\n    formExtends: {\n      // 新增方法\n      isTest: function (configs, regs) {\n        // configs 已有的校验方法 [Object]\n        // regs 已有的正则 [Object]\n        return function (v) {\n          // 对v的校验逻辑 ...\n          // return 校验结果\n        }\n      },\n      // 覆盖已有方法\n      isMd5: function (configs, regs) {\n        return function (v) {\n\n        }\n      },\n      /* 错误示例 */\n      // 命名不符合[isYourFunctionName]规范\n      t1: function () {\n\n      },\n      // 未返回一个函数\n      isT1: function () {\n\n      },\n      // 不是函数\n      isT2: 'hi test'\n    },\n    regExtends: {\n      md5: /^[a-z0-9]{32}$/,\n      md6: /^[a-z0-9]{32}$/\n    }\n  }\n)\n</pre>\n\n<h3>第二步: 在HTML中使用</h3>\n<pre class=\"javascript\">\n&lt;input type=\"text\" v-model=\"name\" v-check:not-empty=\"name\"&gt;\n</pre>\n</section>\n\n<!--示例-->\n<h2>示例:</h2>\n<section id=\"showcases\">\n    <h3>not-empty</h3>\n    <input type=\"text\"\n           v-model=\"name\"\n           v-check:not-empty=\"name\"\n           @change=\"onChange\">\n    <span class=\"checked-result {{ checkName === false ? 'error' : 'success' }}\">\n        结果[{{ checkName }}]\n    </span>\n</section>\n</div>";

/***/ },

/***/ 166:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _forms = __webpack_require__(167);

	var _forms2 = _interopRequireDefault(_forms);

	var _regs = __webpack_require__(168);

	var _regs2 = _interopRequireDefault(_regs);

	var _logs = __webpack_require__(169);

	var _logs2 = _interopRequireDefault(_logs);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var formsConfigs = _forms2.default.configs;

	exports.default = {
	  install: function install(Vue) {
	    var options = arguments.length <= 1 || arguments[1] === undefined ? { debug: false, formExtends: {}, regExtends: {} } : arguments[1];

	    var id = 'check';
	    var debug = options.debug;
	    var formExtends = options.formExtends;
	    var regExtends = options.regExtends;
	    _logs2.default.isDebug = debug;

	    /**
	     * 生成驼峰串
	     * @param  {[type]} s      [description] 字符串
	     * @param  {[type]} prefix [description] 前缀
	     * @param  {[type]} sp     [description] 分隔符，默认’.‘
	     * @return {[type]}        [description] 驼峰字符串
	     */
	    var capitalize = function capitalize(s, prefix, sp) {
	      var f = function f(ns, a) {
	        return ns + a[0].toUpperCase() + a.slice(1, a.length);
	      };
	      return prefix + s.split(sp || '.').reduce(f, '');
	    };

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
	    var check = {
	      // 若在v-for（循环）中使用，必须绑定v-bind:loop-var="循环变量"，而且循环变量必须是object（{}），不能是一个基础类型（number，string）
	      // 当校验函数包含多个参数时，必须绑定v-bind:multi-args="[参数2, 参数3, ..., 参数n]"（参数1就是校验的值即check指令绑定的变量）
	      params: ['loop-var', 'multi-args'],
	      bind: function bind() {
	        // 准备工作
	        var expressionArr = this.expression.split('.');
	        this.init = -1;
	        this.formsKey = capitalize(this.arg, 'is', '-');
	        this.loopVar = this.params.loopVar;
	        this.expressionSuffix = capitalize(expressionArr.pop(), 'check');
	        if (this.loopVar) {
	          Vue.set(this.loopVar, this.expressionSuffix, null);
	        } else {
	          this.noLoopVar = expressionArr.push(this.expressionSuffix) && expressionArr.join('.');
	          this.vm.$set(this.noLoopVar, null);
	        }
	        _logs2.default.log('指令[' + id + '] => bind', '方法: ' + this.formsKey);
	        // log.log(this.descriptor)
	        // log.log(this.params)
	        // log.log(this.vm)
	      },
	      update: function update(now) {
	        _logs2.default.log('指令[' + id + '] => update', now);
	        // 值更新时的工作
	        // 也会以初始值为参数调用一次
	        var flag = now;
	        if (this.init === -1) {
	          if (now instanceof Array && !now.length) {
	            flag = false;
	          }
	          if (now && now instanceof Object && !Object.keys(now).length) {
	            flag = false;
	          }
	        }
	        this.init += 1;
	        if (this.init || this.modifiers.force || flag) {
	          var result = formsConfigs[this.formsKey] && formsConfigs[this.formsKey].apply(formsConfigs, [now].concat(this.params.multiArgs || []));
	          if (this.loopVar) {
	            Vue.set(this.loopVar, this.expressionSuffix, result);
	          } else {
	            this.vm.$set(this.noLoopVar, result);
	          }
	        }
	      }
	    };

	    // 安装
	    if (Vue && Vue.directive instanceof Function) {
	      Vue.directive(id, check);
	      _logs2.default.info('指令[' + id + ']安装成功!');
	      _forms2.default.extend(formExtends);
	      _regs2.default.extend(regExtends);
	    } else {
	      _logs2.default.error('指令[' + id + ']安装失败, 原因: Vue 异常');
	    }
	  },
	  forms: _forms2.default.configs,
	  regs: _regs2.default.configs
	};

/***/ },

/***/ 167:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _regs = __webpack_require__(168);

	var _regs2 = _interopRequireDefault(_regs);

	var _logs = __webpack_require__(169);

	var _logs2 = _interopRequireDefault(_logs);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	/**
	 * Created by huangxinxin on 16/5/18.
	 */


	var regsConfigs = _regs2.default.configs;
	var configs = {};
	/**
	 * 函数命名规则 isYourFunctionName（必须是驼峰式）
	 */
	// 数字
	configs.isNumber = function (v) {
	  return typeof v === 'number';
	};

	// 字符串
	configs.isString = function (v) {
	  return typeof v === 'string';
	};

	// 数组
	configs.isArray = function (v) {
	  return v instanceof Array;
	};

	// 对象
	configs.isObject = function (v) {
	  return v instanceof Object;
	};

	// 方法
	configs.isFunction = function (v) {
	  return v instanceof Function;
	};

	// 非空
	configs.isNotEmpty = function (v) {
	  var isTrim = arguments.length <= 1 || arguments[1] === undefined ? false : arguments[1];

	  if (v) {
	    if (v instanceof Object) {
	      return Object.keys(v).length > 0;
	    }
	    if (v instanceof Array) {
	      return v.length > 0;
	    }
	    if (isTrim) {
	      return ('' + v).trim() !== '';
	    }
	    return true;
	  }
	  return false;
	};

	// 身份证（中国）
	configs.isId = function (v) {
	  return regsConfigs.id.test(v);
	};

	// 邮箱格式
	configs.isEmail = function (v) {
	  return regsConfigs.email.test(v);
	};

	// 移动电话（中国）
	configs.isMobile = function (v) {
	  return regsConfigs.mobile.test(v);
	};

	// 电话（包括移动电话和固话）
	configs.isTel = function (v) {
	  return regsConfigs.tel.test(v);
	};

	// ipv4
	configs.isIpv4 = function (v) {
	  return regsConfigs.ipv4.test(v);
	};

	// ipv6
	configs.isIpv6 = function (v) {
	  var s = v.match(/:/g);
	  if (s) {
	    return s.length <= 7 && /::/.test(v) ? /^([\da-f]{1,4}(:|::)){1,6}[\da-f]{1,4}$/i.test(v) : /^([\da-f]{1,4}:){7}[\da-f]{1,4}$/i.test(v);
	  }
	  return false;
	};

	// ip
	configs.isIp = function (v) {
	  return configs.isIpv4(v) || configs.isIpv6(v);
	};

	// md5
	configs.isMd5 = function (v) {
	  return regsConfigs.md5.test(v);
	};

	// url
	configs.isUrl = function (v) {
	  return regsConfigs.url.test(v);
	};

	// 最小长度
	configs.isMinLen = function (v, l) {
	  return v.length >= l;
	};

	// 最大长度
	configs.isMaxLen = function (v, l) {
	  return v.length <= l;
	};

	// 长度范围
	configs.isRangeLen = function (v, min, max) {
	  return configs.isMinLen(v, min) && configs.isMaxLen(v, max);
	};

	// json
	configs.isJson = function (v) {
	  try {
	    JSON.parse(v);
	    return true;
	  } catch (err) {
	    return false;
	  }
	};

	var extend = function extend(_configs) {
	  if (_configs instanceof Object) {
	    for (var k in _configs) {
	      var v = _configs[k];
	      if (k.indexOf('is') === 0) {
	        if (v instanceof Function) {
	          var r = v(configs, regsConfigs);
	          if (r instanceof Function) {
	            if (configs[k]) {
	              _logs2.default.info('覆盖[' + k + ']校验方法成功!');
	            } else {
	              _logs2.default.info('新增[' + k + ']校验方法成功!');
	            }
	            configs[k] = r;
	          } else {
	            _logs2.default.error('安装[' + k + ']校验方法失败, 原因: 返回值不是一个Function');
	          }
	        } else {
	          _logs2.default.error('安装[' + k + ']校验方法失败, 原因: 值不是一个Function');
	        }
	      } else {
	        _logs2.default.error('安装[' + k + ']校验方法失败, 请参考命名格式: isYourFunctionName(必须是驼峰式)');
	      }
	    }
	  }
	};

	exports.default = { configs: configs, extend: extend };

/***/ },

/***/ 168:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _logs = __webpack_require__(169);

	var _logs2 = _interopRequireDefault(_logs);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var configs = {
	  id: /(^\d{15}$)|(^\d{17}([0-9]|X)$)/,
	  email: /^[a-z]([a-z0-9]*[-_]?[a-z0-9]+)*@([a-z0-9]*[-_]?[a-z0-9]+)+[\.][a-z]{2,3}([\.][a-z]{2})?$/i,
	  mobile: /^(0|86|17951)?(13[0-9]|15[012356789]|17[0678]|18[0-9]|14[57])[0-9]{8}$/,
	  tel: /((\d{11})|^((\d{7,8})|(\d{4}|\d{3})-(\d{7,8})|(\d{4}|\d{3})-(\d{7,8})-(\d{4}|\d{3}|\d{2}|\d{1})|(\d{7,8})-(\d{4}|\d{3}|\d{2}|\d{1}))$)/,
	  ipv4: /^(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])\.(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])\.(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])\.(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])$/,
	  md5: /^[a-z0-9]{32}$/,
	  url: /^((https|http):\/\/)?(((([0-9]|1[0-9]{2}|[1-9][0-9]|2[0-4][0-9]|25[0-5])[.]{1}){3}([0-9]|1[0-9]{2}|[1-9][0-9]|2[0-4][0-9]|25[0-5]))|([0-9a-zA-Z\u4E00-\u9FA5\uF900-\uFA2D-]+[.]{1})+[a-zA-Z-]+)(:[0-9]{1,4})?((\/?)|(\/[0-9a-zA-Z_!~*'().;?:@&=+$,%#-]+)+\/?){1}/
	}; /**
	    * Created by huangxinxin on 16/5/18.
	    */


	var extend = function extend(_configs) {
	  if (_configs instanceof Object) {
	    for (var k in _configs) {
	      var v = _configs[k];
	      if (configs[k]) {
	        _logs2.default.info('覆盖[' + k + ']正则表达式成功!');
	      } else {
	        _logs2.default.info('新增[' + k + ']正则表达式成功!');
	      }
	      configs[k] = v;
	    }
	  }
	};

	exports.default = { configs: configs, extend: extend };

/***/ },

/***/ 169:
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	/**
	 * Created by huangxinxin on 16/5/18.
	 */
	exports.default = {
	  isDebug: false,
	  log: function log() {
	    if (this.isDebug) {
	      var _console;

	      (_console = console).log.apply(_console, arguments);
	    }
	  },
	  info: function info() {
	    if (this.isDebug) {
	      var _console2;

	      (_console2 = console).info.apply(_console2, arguments);
	    }
	  },
	  warn: function warn() {
	    if (this.isDebug) {
	      var _console3;

	      (_console3 = console).warn.apply(_console3, arguments);
	    }
	  },
	  error: function error() {
	    if (this.isDebug) {
	      var _console4;

	      (_console4 = console).error.apply(_console4, arguments);
	    }
	  }
	};

/***/ }

});