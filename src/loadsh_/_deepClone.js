

// 深拷贝

function deepCleen(deepObj1, deepObj2) {
  const deepObj2 = deepObj2 || {};

  for (const key in deepObj1) {
    if (typeof deepObj1[key] === 'object') {
      if (deepObj1[key].constructor === Array) {
        // 数组
        deepObj2[key] = [];
      } else {
        deepObj2[key] = {};
      }
      deepCleen(deepObj1[key])
    } else {
      deepObj1[key] = deepObj2[key];
    }
  }
  return deepObj2;
}