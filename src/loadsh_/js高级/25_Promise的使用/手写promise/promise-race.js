
const p1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('400')
  }, 400)
})

const p2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject('500')
  }, 500)
})

const p3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('2000')
  }, 2000)
})


Promise.all([p1, p2, p3]).then(res => {
  console.log(res);
}).catch(err => {
  console.log(err);
})