


var arr = [1, 2, 3, 4];


Array.prototype._forEach = function(cb) {
  for (let i = 0; i < this.length; i++) {
    cb.call({}, this[i], i, this);
  }
}



arr._forEach((item, index, arrs) => {
  console.log(item, index, arrs)
})