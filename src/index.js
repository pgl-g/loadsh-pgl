const { _forEach } = require('./loadsh_/_forEach');


let arr = [1, 2, 3];

_forEach(arr, (res, index) => {
  console.log(res);
})