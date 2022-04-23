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

// let obj = {
//   name: "张三",
//   age: 18
// }

// const newProxy = new Proxy(obj, {

//   get(target, key, receiver) {
//     console.log(target, key, receiver, '截取事件');
//     return target[key]
//   },
//   set(target, key, newKey) {
//     console.log('设置事件');
//     target[key] = newKey;
//   }

// })


// newProxy.name = '私聊'

// console.log(obj);


// function foo() {

// }

// const newProxy = new Proxy(foo, {
//   apply (target, thisArg, argument) {
//     console.log(target, thisArg, argument)
//   }
// })



// let obj = {
//   name: 'pgl',
//   age: 18,
//   get: function () {
//     return this.name;
//   },
//   set: function(newVal) {
//     this.name = newVal
//   }
// }


// const newProxy = new Proxy(obj, {
//   get(target, key, receiver) {
//     console.log(Reflect.get(target, key), '------', receiver)
//     return Reflect.get(target, key);
//   },
//   set(target, key, newVal, receiver) {
//     // target[key] = newVal
//     Reflect.set(target, key, newVal, receiver);
//   }
// })
 
// newProxy.name = 'xx'

// console.log(obj)
// console.log(obj, newProxy)


// const obj = {
//   _name: "why",
//   get name() {
//     return this._name
//   },
//   set name(newValue) {
//     this._name = newValue
//   }
// }

// const objProxy = new Proxy(obj, {
//   get: function(target, key, receiver) {
//     // receiver是创建出来的代理对象
//     console.log("get方法被访问--------", key, receiver)
//     console.log(receiver === objProxy)
//     return Reflect.get(target, key, receiver)
//   },
//   set: function(target, key, newValue, receiver) {
//     console.log("set方法被访问--------", key)
//     Reflect.set(target, key, newValue, receiver)
//   }
// })

// // objProxy.name = "kobe"
// console.log(objProxy)
// console.log(objProxy.name)


function Student(name, age) {

  this.name = name;
  this.age = age;
  
}


function Teacher() {
  console.log(this, '0---')
}

const obj = Reflect.construct(Student, ['张三', 12], Teacher);


console.log(obj)


