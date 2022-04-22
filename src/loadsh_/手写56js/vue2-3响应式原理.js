// // Object.defineProperty
// // 缺点：新增/删除，不行
// const obj = {
//   name: '张三',
//   age: 18,
//   height: 100
// }



// let val = obj.name;

// Object.defineProperty(obj, 'name', {
  
//   get: function() {
//     console.log('获取值')
//     return val;
//   },
//   set: function(nVal) {
//     console.log('设置值')
//     val = nVal
//   }
// })

// console.log(obj.name)

// obj.name = '李四'

// Proxy-reflect

let obj = {
  name: "张三",
  age: 18
}

const newProxy = new Proxy(obj, {

  get(target, key, receiver) {
    console.log(target, key, receiver, '截取事件');
    return target[key]
  },
  set(target, key, newKey) {
    console.log('设置事件');
    target[key] = newKey;
  }

})



newProxy.name = '私聊'



