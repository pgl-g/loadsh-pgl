


const data = {
  name: 'pgl',
  age: '1'
}


data.name = '李四'



    Object.keys(data).forEach(key => {

      Object.defineProperty(data, key, {
        get() {
          console.log('获取' + key + 'get')
          return val;
        },
        set(newVal) {
          console.log('监听' + key + 'set')
          val = newVal;
        }
      })
    })



    // 发布者
    class Dep {
      constructor() {
        // 用来存放Watcher对象的数组
        this.subs = [];
      }

      // 在subs中添加一个Watcher对象
      addSub(sub) {
        this.subs.push(sub);
      }

      // 通知所有Watcher对象更新视图
      notify() {
        this.subs.forEach(sub => {
          sub.update();
        })
      }
    }


    // 订阅者
    class Watcher {
      constructor(name) {
        this.name = name;
      }

      update() {
        // 更新值
        console.log(this.name);
      }
    }