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


function Person() {
  this.friends = [];
}

function Student() {
  this.ns = 11;
}

Student.prototype = new Person;

var str1 = new Student();
var str2 = new Student();

str1.friends.push('1');

console.log(str2.friends);