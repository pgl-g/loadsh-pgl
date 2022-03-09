

let arr = [1, 2, 3];


function filte(arr) {
  let result = [];

  while(arr.length > 0) {
    

    let num = Math.floor(Math.random() * arr.length);

    result.push(arr.splice(num, 1)[0]);


  }

  return result
}

let res = filte(arr);

console.log(res)