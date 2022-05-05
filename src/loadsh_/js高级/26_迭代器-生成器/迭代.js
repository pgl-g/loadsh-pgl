// 测试代码结构  

// 迭代器构造
// function createArrayIteror(arr) {
//   let index = 0;
//   return {
//     next: () => {
//       if (index < arr.length) {
//         return { flag: true, i: index++ }
//       } else {
//         return { flag: false,  i: undefined }
//       }
  
//     }
//   }
// }
// function createArrayIterator(arr) {
//   let index = 0
//   return {
//     next: () => {
//       if (index < arr.length) {
//         return { done: false, value: arr[index++] }
//       } else {
//         return { done: true, value: undefined } 
//       }
//     }
//   }
// }

// const names = ['张三', '李四', '王五']

// const result = createArrayIterator(names);
// console.log(result.next())

// console.log(result.next())

// console.log(result.next())




// function foo(start, end) {
//   let index = start
//   while(index < end) {
//     yield index++
//   }
// }
// function* createRangeIterator(start, end) {
//   let index = start
//   while (index < end) {
//     yield index++
//   }

//   // let index = start
//   // return {
//   //   next: function() {
//   //     if (index < end) {
//   //       return { done: false, value: index++ }
//   //     } else {
//   //       return { done: true, value: undefined }
//   //     }
//   //   }
//   // }
// }


// const result = createRangeIterator(10, 20);
// console.log(result.next());


function requsetData(res) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(res);
    }, 100);
  }, err => {
    reject(err);
  })
}

// 产生回调地狱
// requsetData('pgl').then(res => {
//   return requsetData(res + 'aa');
// }).then(res1 => {
//   console.log(res1);
// });


// function* createInterator() {
//   const res1 = yield requsetData('张三');
//   const res2 = yield requsetData(res1 + '李四');
//   yield requsetData(res2 + '王五');
// }

// const generator = createInterator();
// generator.next().value.then(res => {
//   generator.next(res).value.then(res1 => {
//     generator.next(res1).value.then(res2 => {
//       console.log(res2);
//     });
//   });
// });

function* generator() {
  const res1 = yield requsetData('pgl');

  const res2 = yield requsetData(res1 + '-' + '18');

  const res3 = yield requsetData(res2 + '-' + '175');

  console.log(res3)
}

// const gen = generator();

// gen.next().value.then(res1 => {
//   gen.next(res1).value.then(res2 => {
//     gen.next(res2).value.then(res3 => {
//       console.log(res3);
//     })
//   })
// })

function exetFoo(genFoo) {

  const genx = genFoo();

  function exet(res) {
    const result = genx.next(res);
    if (result.done) {
      return result.value;
    }

    result.value.then(res1 => {
      exet(res1);
    })
  }

  exet();



}

exetFoo(generator);