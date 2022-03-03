class Jsonp {
  constructor(req) {
    this.url = req.url;
    this.callbackName = req.callbackName;
  }

  // 创建script标签
  create() {
    const script = document.createElement('script');
    const url = `${this.url}?callbackName=${this.callbackName}`;
    script.src = url;
    document.getElementsByTagName('head')[0].appendChild(script);
  }
}

new Jsonp({
  url: 'http://127.0.0.1:8000/',
  callbackName: 'getMsg' // 指定回调函数
}).create();

// 获取数据
function getMsg(data) {
  data = JSON.parse(data);
  console.log(data);
}