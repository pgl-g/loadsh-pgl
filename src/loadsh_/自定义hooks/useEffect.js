

// 手动实现useEffect

/**
 * useEffect 特点: 在依赖变化时，执行回调函数。这个变化是在本次的render和上次render依赖的比较
 *  1. 存储上一次render的依赖
 *  2. 兼容多次调用，收纳盒调用
 *  3. 比较依赖，执行回调函数
 * 增加副作用清除作用
 *    effect触发后会将清除函数存储起来，等到下一次触发effect时执行
 */

let index = 0;
// 兼容多次调用
let lastDepsBox = [];
// 兼容清除函数多次
let lastClearFnCallback = [];
/**
 * 
 * @param {callback} fn 回调函数
 * @param {Array} deps 依赖
 */
function UseEffect(fn, deps) {
  // 存储上一次的依赖 存储的是[[]、[]、[]]
  const lastDeps = lastDepsBox[index];
  
  const flag = 
  !lastDeps // 首次渲染 刚开始就会触发 
  || !deps // 没有依赖，次次触发
  || deps.some((dep, index) => dep !== lastDeps[index]); // 依赖进行比较
  if (flag) {
    lastDepsBox[index] = deps;
    if (lastClearFnCallback[index]) {
      lastClearFnCallback[index]();
    }
    lastClearFnCallback[index] = fn();
  }
  index++;
}