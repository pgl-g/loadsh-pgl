// weekmap({key(对象)：value})：key是一个对象，弱引用
const targetMap = new WeakMap();
function getDep(target, key) {
  // 1. 根据对象（target）取出对应对map对象
  let depsMap = targetMap.get(target);
  if (!depsMap) {
    depsMap = new Map();
    targetMap.set(target, depsMap);
  }

  // 2. 取出具体对dep对象
  let dep = depsMap.get(key);
  if (!dep) {
    dep = new Map();
    depsMap.set(key, dep);
  }
  return dep;
}