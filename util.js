
// key 排序拼接
function sortKey (obj) {
  var keys = [];
  var objStr = '';
  for (var key in obj) {
    if (obj.hasOwnProperty(key)) {
      keys.push(key);
    }
  }
  var keysLen = keys.length;
  keys = keys.sort(function (a, b) {
    return a < b ? -1 : 1;
  });
  if (keysLen > 0) {
    objStr += keys[0] + '=' + obj[keys[0]];
  }
  for (var i = 1; i < keysLen; i++) {
    var key = keys[i];
    objStr = objStr + '&&' + key + '=' + obj[key];
  }
  return objStr;
}

// 是否是数字
function isNumber (n) {
  return !isNaN(parseFloat(n)) && isFinite(n);
}

// 判断小数点后几位，n必须number类型，不能是string，因为string的valueOf方法返回字符串
function countDecimals(n) {
  if (Math.floor(n) === n.valueOf()) {
    return 0;
  }
  return n.toString().split(".")[1].length;
}

// 判断是不是日期
function isDate(str) {
  var dateArr = str.split('-').map(function(val, i, arr) {
    return parseInt(val, 10);
  });
  var date = new Date(dateArr[0], dateArr[1] - 1, dateArr[2]);
  return date.getFullYear() === dateArr[0]
    && (date.getMonth() + 1) === dateArr[1]
    && date.getDate() === dateArr[2];
}

// 判断整数
// function isInt(n) {
//   return n % 1 === 0;
// }
// function isInt (n) {
//   return Number.isInteger(n) || (function (value) {
//     return typeof value === 'number'
//       && isFinite(value)
//       && Math.floor(value) === value
//   })(n);
// }
function isInt(value) {
  var er = /^-?[0-9]+$/;
  return er.test(value);
}