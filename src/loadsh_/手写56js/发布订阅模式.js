


class EventEmitter {

  constructor() {

    this.cache = [];
  }

  on(name, fn) {
    const tasks = this.cache[name];
    if (tasks) {
      tasks.push(fn);
    } else {
      this.cache[name] = [fn];
    }
  }

  off(name, fn) {
    if (!name) {
      this.cache = [];
      return;
    } 
    const tasks = this.cache[name];

    if (tasks) {
      if (!fn) {
        this.cache[name] = [];
      }

      const index = tasks.findIndex(item => item === fn);
      if (index >=  0) {
        tasks.splice(index, 1);
      }
    }

  }

  emit(name, ...args) {
    // 复制一份。防止回调里继续on，导致死循环
    const tasks = this.cache[name].slice();
    if (tasks) {
      for (let task of tasks) {
        task(...args);
      }
    }
  }


  once(name, cb) {
    const fn = (...args) => {
      cb(...args);
      this.off(name, fn);
    }
    this.on(name, fn);
  }

}