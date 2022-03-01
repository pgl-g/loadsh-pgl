

class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }



  running() {
    console.log(this.name + '---running')
  }


  personMethon() {
    console.log('父类的方法');
  }

  static personStic() {
    console.log('父类的静态方法');
  }
}

// 继承
class Student extends Person {


  // 继承父类的值
  constructor(name, age) {

    // JS引擎在解析子类的时候就有要求，如果我们实现继承
    // 那么子类的this之前 调用super()
    super(name, age);
    // this.name = name;
    // this.age = age;
  }


  personMethon() {
    console.log('重写父类的方法');
  }

  static personStic() {
    super.personStic();

    console.log('重写父类的静态方法');
  }
  


}


let stu = new Student('pgl', 18);
// 子类也可继承父类的方法
stu.running();
stu.personMethon();


// 直接通过类来进行访问静态方法
Student.personStic();
console.log(stu)
// console.log(Object.getOwnPropertyDescriptors(stu.__proto__.__proto__))