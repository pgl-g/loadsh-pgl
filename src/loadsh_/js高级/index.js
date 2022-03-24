inner = 'window';
function say() {
    console.log(inner, 'ce1');
    console.log(this.inner, 'ce2');
}
var obj1 = (function() {
    var inner = '1-1';
    return {
        inner: '1-2',
        say: function() {
            console.log(inner, 'ce3');
            console.log(this.inner, 'ce4');
        }
    }
})();
var obj2 = (function() {
    var inner = '2-1';
    return {
        inner: '2-2',
        say: function() {
            console.log(inner, 'ce5');
            console.log(this.inner, 'ce6');
        }
    }
})();

// say(); // window, window
// //在window直接执行，指向的是Windows
// obj1.say(); // 1-2 window
// obj2.say(); // 
obj1.say = say;
obj1.say();
// obj1.say = obj2.say;
// obj1.say();

