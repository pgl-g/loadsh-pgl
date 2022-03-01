// 类的声明

class Person {
  // 类的构造方法
  // 注意：一个类只能有一个构造函数
  /**
   * new的过程
   *  1. 在内存中创建一个对象{}
   *  2. 将类的原型prototype赋值给创建出来的对象p.__proto__ === Person.prototype
   *  3. 将对象赋值给this：new绑定 p = this
   *  4. 执行函数中的代码
   *  5. 自动返回创建出来的对象
   */
  constructor(name, age) {
    // console.log(name, age, this.name);
    this.name = name;
    this.age = age;
  }
}

let p = new Person('彭格列', 18);
