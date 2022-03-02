/**
 * "()", "(())", "()()", "(())()" 是括号匹配的字符串， 而 ")(", "(()", "()()(", "()())" 则是括号不匹配的字符串(不懂)
 */

let s = "a(b(c(de)fgh)";

function removeTheses(s) {
  let arr = [];
  let pop = [];
  s = s.split('');
  s.forEach((item, i) => {
    let flag = true;
    // console.log(i);
    if (item === '(') {
      // 将每个下标压入栈中
      pop.push(i);
    } else if (item === ')') {
      flag = false;
      
      if (pop.length >= 1) {
        // 如果是）则与pop抵消
        pop = pop.filter((p, idx) => {
          // console.log(idx, 'filter');
          return idx !== pop.length - 1
        })
        flag = true;
        // console.log(pop, 'pop')
      }

    } 
    flag === true && arr.push(item);
  })
  if(pop.length){
    // 当pop里还有多个(,取消s里的(
    arr = arr.filter((item,index) => {
      let is = true
      pop.forEach((item)=>{
        index === item && (is = false)
      })
      return is
    })
  }
  return arr.join('')
}


console.log(removeTheses(s));