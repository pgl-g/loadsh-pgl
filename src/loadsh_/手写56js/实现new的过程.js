

function _New(fn, ...args) {
  const obj = {};

  obj.__proto___ = fn.prototype;

  fn.apply(obj, args);


  return obj;
}