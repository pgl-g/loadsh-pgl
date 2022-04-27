
const p1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject('400--')
  }, 400)
})

const p2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject('500')
  }, 500)
})

const p3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject('2000')
  }, 2000)
})


Promise.any([p1, p2, p3]).then(res => {
  console.log(res);
}).catch(err => {
  console.log(err);
})