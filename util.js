
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

// 判断小数点后几位
function countDecimals(n) {
  if (Math.floor(n) === n.valueOf()) {
    return 0
  };
  return n.toString().split(".")[1].length || 0;
}