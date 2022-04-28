


const obj = {
  name: 'shy',
  age: 1,
  height: 12
}


const entries = Object.entries(obj);

const newObj = {};
for (const n of entries) {
  newObj[n[0]] = n[1];
}

const fortries = Object.fromEntries(entries);
console.log(fortries)

