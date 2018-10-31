var KEY = 'm2f1Oh2NB7Az98pUdmtCIo83MeZ7gRV4';
var util = {
  sortData: function(obj) {
    var keys = [];
    var objStr = '';
    for (var key in obj) {
      if (obj.hasOwnProperty(key)) {
        keys.push(key);
      }
    }
    keys = keys.sort(function(a, b) {
      return a < b ? -1 : 1;
    });
    for (var i = 0, keysLen = keys.length; i < keysLen; i++) {
      var key = keys[i];
      objStr += key + '=' + obj[key] + '&&';
    }
    objStr = objStr + 'key=' + KEY;
    return objStr;
  },
  isNumber: function(n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
  },
};
var countDecimals = function () {
  if(Math.floor(this.valueOf()) === this.valueOf()) return 0;
  return this.toString().split(".")[1].length || 0; 
}