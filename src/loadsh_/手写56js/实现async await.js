


const toAsync = (fn) => {

  return function() {

    const gen = fn.apply(this, arguments);

    return new Promise((resolve, reject) => {


        function go(key, arg) {
          let res;
          try {
            res = gen[key](arg);
          } catch (err) {
            return reject(err);
          }

          const { value, done } = res;

        if (done) {
          return resolve(value);
        } else {
          return Promise.resolve(value).then(val => {
            go('next', val);
          }).catch(err => {
            go('throw', err);
          })
        }
        }

        

        go('next');
    })
  }



}