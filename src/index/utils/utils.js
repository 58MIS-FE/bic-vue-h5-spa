/**
 * 判断姓名规则
 * @export
 * @param {any} name  手机号码
 * @returns Boolean 如果是正确 返回true 否则返回false
 */
// 6-20位数字和字母组合
export function enAndZn(val) {
  return /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,20}$/.test(val)
}
// 只能是汉字 不能超过20个汉字
export function vChineseTen(val) {
  return /^[\u4E00-\u9FA5]{0,20}$/.test(val)
}

// 只能是汉字 不能超过15个汉字
export function vChineseTenStore(val) {
  return /^[\u4E00-\u9FA5]{0,15}$/.test(val)
}

// 是否是 int类型 包括 0
export function isInteger(val) {
  return /^0$|^\+?[1-9]\d*$/.test(val)
}
/**
 * 判断是否是手机号码
 * @export
 * @param {any} phone  手机号码
 * @returns Boolean 如果是正确的手机号码 返回true 否则返回false
 */
export function isPhoneNumber(phone) {
  if (!(/^1\d{10}$/.test(phone))) {
    return false
  }
  return true
}

/**
 * 是否是微信
 * @export
 * @returns Boolean
 */
export function isWeixinBrowser() {
  return /micromessenger/.test(navigator.userAgent.toLowerCase())
}

export function isUndefined(value) {
  return value === undefined
}
/**
 * 数组是否存在
 * @export
 * @returns Boolean false不存在 存在返回index 位置
 */
export function containsArr(arr, obj) {
  var i = arr.length
  while (i--) {
    if (arr[i] === obj) {
      return i
    }
  }
  return false
}
/**
 * 数组 对象 是否存在
 * @export  k 是 对相比较的key
 * @returns Boolean false不存在 存在返回index 位置
 */
export function containsArrObj(arr, obj, key) {
  var i = arr.length
  while (i--) {
    if (arr[i][key] === obj[key]) {
      return i
    }
  }
  return false
}

/**
 * 深度拷贝
 * @export
 ＊ @param {object} parent 父对象
 ＊ @param {object} child 子对象
 * @returns 新对象 子对象更改父对象中的属性
 */
export function extendDeep(parent, child) {
  let toStr = Object.prototype.toString
  let astr = '[object Array]'
  child = child || {}
  for (let i in parent) {
    if (parent.hasOwnProperty(i)) {
      if (typeof parent[i] === 'object') {
        child[i] = (toStr.call(parent[i]) === astr) ? [] : {}
        extendDeep(parent[i], child[i])
      } else {
        child[i] = parent[i]
      }
    }
  }
  return child
}
/**
 * Checks if `value` is `null`.
 *
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is `null`, else `false`.
 * @example
 *
 * isNull(null)
 * // => true
 *
 * isNull(void 0)
 * // => false
 */
export function isNull(value) {
  return value === null
}

/**
 *
 * 解决 vuex 因为引用传递引起的问题
 * @export
 * @param {any} value 需要 copy 的数据
 * @returns 返回复制后的数据
 */
export function copy(value) {
  return JSON.parse(JSON.stringify(value))
}

/**
 *
 * 金钱格式化
 * @export
 * @param {any} money 需要 格式化 的数据
 * @returns 格式化后的数据
 */
export function fixed(money) {
  if (money === undefined) {
    return 0
  }
  let m = parseFloat(money)
  let value = m.toFixed(2)
  let last = value.substr(value.length - 1, 1)
  let second = value.substr(value.length - 2, 2)
  if (second === '00') {
    value = value.substr(0, value.length - 3)
  } else if (last === '0') {
    value = value.substr(0, value.length - 1)
  }
  return parseFloat(value)
}
export function DateFormat(time) {
  let date = new Date(time)
  let y = date.getFullYear();  
  let m = date.getMonth() + 1;  
  m = m < 10 ? ('0' + m) : m;  
  let d = date.getDate();  
  d = d < 10 ? ('0' + d) : d;  
  let h = date.getHours();
  h = h < 10 ? ('0' + h) : h;
  let minute = date.getMinutes();
  let second = date.getSeconds();
  minute = minute < 10 ? ('0' + minute) : minute;  
  second = second < 10 ? ('0' + second) : second; 
  return y + '-' + m + '-' + d;
}
export function DateFormatAll(time) {
  let date = new Date(time)
  let y = date.getFullYear();  
  let m = date.getMonth() + 1;  
  m = m < 10 ? ('0' + m) : m;  
  let d = date.getDate();  
  d = d < 10 ? ('0' + d) : d;  
  let h = date.getHours();
  h = h < 10 ? ('0' + h) : h;
  let minute = date.getMinutes();
  let second = date.getSeconds();
  minute = minute < 10 ? ('0' + minute) : minute;  
  second = second < 10 ? ('0' + second) : second; 
  return y + '-' + m + '-' + d + ' ' + h + ':' + minute + ':' + second;
}
export { throttle } from './throttle'