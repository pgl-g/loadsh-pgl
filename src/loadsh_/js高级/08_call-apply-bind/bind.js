







Function.prototype._bind = function(context) {
  const that = this;
  const argsA = Array.prototype.slice.call(arguments, 1);
  function Binds() {};
  function toBinds() {
    const argsB = Array.prototype.slice.call(arguments, 0);
     that.apply(context, [...argsA, ...argsB])
  }
  Binds.prototype = that.prototype;
  toBinds.prototype = new Binds();
  return toBinds();
}




function foo(age) {
  this.name = '福建'
  console.log(this.name, age);
}

const res = foo._bind({ name: 'pgl' })

// const res2 = foo.bind({ name: '张三'});


const r = new res();

console.log(r)

