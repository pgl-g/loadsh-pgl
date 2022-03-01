class Person {

  constructor(name, age) {
    this.name = name;
    this.age = age;
    this._address = '杭州市';
  }


  eation() {
    console.log(this.name + '----' + this.age)
  }

  // 类的访问器
  get address() {
    // 拦截之前的访问操作
    return this._address;
  }

  set address(newAddress) {
    // 将新的数据重新赋值 拦截设置操作
    this._address = newAddress;
  }

  // 类的静态方法 (类方法)
  // Person.createPerson
  static createPerson() {
    return new Person('里斯', 20);
  }
}

let p = new Person('pgl', 18)
// p.eation();
// console.log(p);
// console.log(p.address)
p.address = '上饶';
console.log(p.createPerson())
// console.log(p.address)
