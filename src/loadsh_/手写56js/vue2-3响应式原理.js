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


// function Student(name, age) {

//   this.name = name;
//   this.age = age;
  
// }


// function Teacher() {
//   console.log(this, '0---')
// }

// const obj = Reflect.construct(Student, ['张三', 12], Teacher);


class Depend {
  constructor() {
    this.deps = [];
  }
  // 插入需要
  addDepend(fn) {
    this.deps.push(fn)
  }

  // 通知依赖更新
  notify() {
    this.deps.forEach(fn => fn());
  }
}


let obj = {
  name: 'pgl',
  age: 18
}


let depend = new Depend();

// 监听数据等更新
function watcherFn(fn) {
  depend.addDepend(fn);
}

let targetMap = new WeakMap();
function getDepend(target, key) {

  let map = targetMap.get(target); 
  if (!map) {
    map = new Map();
    targetMap.set(target, map);
  }

  let depend = map.get(key);
  if (!mapVal) {
    depend = new Depend();
    map.set(key, depend);
  }

  return depend;

}


let objProxy = new Proxy(obj, {
  get: function(target, key, receiver) {
    return Reflect.get(target, key, receiver);
  },
  set: function(target, key, newKey, receiver) {
    Reflect.set(target, key, newKey, receiver);
    // 通知depend更新
    const depend = getDepend(target, key);
    depend.notify();
  }
});


watcherFn(function() {
  console.log(objProxy.name, '--------------');
})
objProxy.name = 'x';


// 强引用/弱引用区别，为了删除引用操作
let targteweak = new WeakMap();
let objMap = new Map();

objMap.set('name', 'nameDepend');

targteweak.set(obj, objMap);