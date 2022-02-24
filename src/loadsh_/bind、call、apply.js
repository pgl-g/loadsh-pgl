

/**
 * call和apply第二个参数不一样，bind会创建一个函数
 */

let obj = {
  a: 1,
  b: 2,
  c: function(em, f) {
    console.log(this.a, this.b, em, f)
  }
}

let obj2 = {
  a: '张三',
  b: 12,
}

// obj.c()

obj.c.call(obj2, '测试call1', '测试call2');
obj.c.apply(obj2, ['1212', '222']);
