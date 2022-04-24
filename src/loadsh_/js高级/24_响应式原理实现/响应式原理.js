// 保存当前 响应式 函数
let activeReactiveFn = null;

let obj = {
  name: '斩杀',
  age: 12
}



// 封装一个依赖类
class Depend {
  constructor() {
    // 依赖收集器
    this.reactiveFns = new Set();
  }

  // 将依赖存到activeReactiveFn
  depend() {
    if (activeReactiveFn) {
      this.reactiveFns.add(activeReactiveFn);
    }
  }

  // 通知依赖进行更新
  notify() {
    this.reactiveFns.forEach(fn => fn());
  }

}

// 封装响应式函数，观察者
function watcher(fn) {
  activeReactiveFn = fn;
  fn();
  activeReactiveFn = null;
}

// 封装获取depend的函数
const targetMap = new WeakMap();
function getDepend(target, key) {
  let map = targetMap.get(target);
  if (!map) {
    map = new Map();
    targetMap.set(target, map);
  }

  let depend = map.get(key);
  if (!depend) {
    // 响应式函数对象
    depend = new Depend();
    map.set(key, depend);
  }

  return depend;

}



// 通过proxy进行响应式
let objProxy = new Proxy(obj, {
  get: function(target, key, receiver) {
    
    // 根据target.key 获取对应的depend

    const depend = getDepend(target, key);
    // 给depend对象中添加响应函数
    depend.depend();

    return Reflect.get(target, key, receiver);
    
  },
  set: function(target, key, newVal, receiver) {
    Reflect.set(target, key, newVal, receiver);
    //通知依赖进行更新
    const depend = getDepend(target, key);

    depend.notify();
  }
});



watcher(function() {
  console.log(objProxy.name);
})

objProxy.name = 'pgl';


watcher(function() {
  console.log(objProxy.age)
})



