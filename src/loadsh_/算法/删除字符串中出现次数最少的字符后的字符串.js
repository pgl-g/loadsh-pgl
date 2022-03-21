// 删除字符串中出现次数最少的字符后的字符串。

/**
 * 输入：aabcddd 
 * 输出：aaddd
 */

while(line = readline()) {
  let str = line;
  let result = line.split('').reduce((temp, data) => {
      temp[data] = temp[data] ? temp[data] + 1 : 1;
      return temp;
  }, {});   //统计字母出现次数
  let min = Number.MAX_SAFE_INTEGER;
  for (let index in result) {    //计算最小出现次数
      min = Math.min(min, result[index]);
  }
  for (let index in result) {
      if (min == result[index]) {    // 正则replace掉
          let reg = new RegExp(index, 'g');
          str = str.replace(reg, '');
      }
  }
  print(str)
}

