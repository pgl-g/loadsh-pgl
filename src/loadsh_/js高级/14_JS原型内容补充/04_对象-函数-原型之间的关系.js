// var obj = {
//   name: "why"
// }

// console.log(obj.__proto__)

// // 对象里面是有一个__proto__对象: 隐式原型对象

// // Foo是一个函数, 那么它会有一个显示原型对象: Foo.prototype
// // Foo.prototype来自哪里?
// // 答案: 创建了一个函数, Foo.prototype = { constructor: Foo }

// // Foo是一个对象, 那么它会有一个隐式原型对象: Foo.__proto__
// // Foo.__proto__来自哪里?
// // 答案: new Function()  Foo.__proto__ = Function.prototype
// // Function.prototype = { constructor: Function }

// // var Foo = new Function()
// function Foo() {

// }

// console.log(Foo.prototype === Foo.__proto__)
// console.log(Foo.prototype.constructor)
// console.log(Foo.__proto__.constructor)


// var foo1 = new Foo()
// var obj1 = new Object()

// console.log(Object.getOwnPropertyDescriptors(Function.__proto__))


// function Person() {
//   this.friends = [];
// }

// function Student() {
//   this.ns = 11;
// }

// Student.prototype = new Person;

// var str1 = new Student();
// var str2 = new Student();

// str1.friends.push('1');

// console.log(str2.friends);
class Polygon {
  constructor(height, width) {
    console.log(height, width);
    this.name = 'Polygon';
    this.height = height;
    this.width = width;
  }
  sayName() {
    console.log('Hi, I am a ', this.name + '.');
  }
}

class Square extends Polygon {
  constructor(width, height) {
    // this.height; 
    // ReferenceError，super 需要先被调用！
    
/*
   这里，它调用父类的构造函数的 length, 
   作为Polygon 的 width和 height.
*/ 
    super(width, height);
    // console.log(length, length);
    
/*  
    注意: 在派生的类中, 在你可以使用'this'之前, 必须先调用super()。
    忽略这, 这将导致引用错误。
*/
    this.name = 'Square';
  }

  get area() {
    return this.height * this.width;
  }

  set area(value) {
    this.area = value;
  } 
}

let str = new Square(183, 140);