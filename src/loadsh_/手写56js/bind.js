

function f(b) {
  console.log(this.a, b);
}

//=> 3, 4
// f.fakeBind({ a: 3 })(4);

//=> 3, 10
f.fakeBind({ a: 3 }, 10)(11);

Function.prototype.fakeBind = function(obj, ...args) {
  console.log(obj, ...args);
  return (...rest) => this.call(obj, ...args, ...rest);
}

