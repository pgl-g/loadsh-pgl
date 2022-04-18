// let obj = {
//   key: 1,
//   value: 2
// }


// const xx = Object.defineProperty({}, obj.key, obj);
// console.log(xx);

// let arr = [
//   {
//     label: '终南山',
//   },
//   {
//     label: '张三'
//   }
// ]
// const [items, ...res] = arr;

// console.log(items);


// const msg = '哈哈';

// var str = '///'
// console.log(window.msg)

// const btns = document.getElementsByTagName('button');


// for (var i = 0; i < btns.length; i++) {
//   btns[i].onclick = function() {
//     console.log(i + '我点击率' + '由于var没有作用域等同于window，所以拿到的i是window下执行完的数值')
//   }
// }

// for (var i = 0; i < btns.length; i++) {
//   (function(m) {
//     btns[m].onclick = function() {
//       console.log(m + '我点击率' + '通过自调用函数产生函数作用域产生闭包，外部函数依次获取调用次数，实现')
//     }
//   })(i)
// }


// for (let i = 0; i < btns.length; i++) {
//   btns[i].onclick = function() {
//     console.log(i + '我点击率' + 'let会产生块级作用域使其内部依次调用，window不能访问内部块级数据')
//   }
// }

// let objSet = new WeakSet();

// let obj = {
//   name: '张绍刚'
// }

// objSet.add(obj);

// obj = null

// console.log(objSet)

// let wset = new Set();
// let key = {
//     name:"爱钱的大傻憨",
//     age:18
// };

// //wset.add("1");//报错
// wset.add(key);
// key = null
// console.log("wset:",wset);


const obj = {
  name: '张三',
  age: 12
}


function objFnName() {
  console.log('name：执行了');
}

function objFnAge() {
  console.log('age：执行了');
}


// 1. 创建weekmap
const weekMaps = new WeakMap();
 
// 2. 收集依赖
// 2.1 对obj收集数据结构
const objMap = new Map();

objMap.set('name', [objFnName]);
objMap.set('age', [objFnAge]);


obj.name = '李四';

weekMaps.set(obj, objMap);
console.log(weekMaps);

const targetObj = weekMaps.get(obj);
console.log(targetObj);
const fns = targetObj.get('name');
fns.forEach(fn => fn());



 