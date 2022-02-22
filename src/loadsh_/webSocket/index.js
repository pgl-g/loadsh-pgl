/**
 * 个人理解：
 *  1.在ws一直推送数据时，有时会出现网络断开的情况，但是在网络断开的情况下并没有触发onclose事件，（会造成服务器会推送客户端多余的数据），并且数据接收不到
 *  2. 心跳机制：就是像心跳一样每隔一段事件来告诉服务器，数据是一直连着的，并且客户端也会确认服务端是否是正常连接，否则就是网络断了，需要重连（类似于tcp的三次握手）
 */


let lockReconnect = false; // 避免重复连接
let wsUrl = 'http://www.baidu.com';
let websocket = null;
let timer = null; // 定时器


// 创建一个ws
const createWebSocket = () => {
  // 有问题直接抛？不妥
  // try {
    
  // } catch (error) {
    
  // }

  // 实例化 ws对象
  websocket = new WebSocket(wsUrl);
  reconnect(wsUrl);
}


// 初始化步骤
const init = () => {
  // 连接一旦发生错误并回调
  websocket.onerror = function() {
    console.log('socket连接失败');
    // 进行重连
    reconnect(wsUrl);
  }

  // 连接成功建立回调
  websocket.onopen = function(e) {
    console.log('socket连接已打开')
    // 心跳重置
    heartCheck.start();

  }

  // 接收到消息的回调方法
  websocket.onmessage = function(e) {
    console.log('服务端收到客户端传送的值， 还有心跳...', e);
    // 心跳重置
    heartCheck.start();
  }

  // 连接关闭的回调方法
  websocket.onclose = function() {
    console.log('socket连接关闭');

    // 进行重连
    reconnect(wsUrl);
  }


  // 监听页面窗口关闭，主动去关闭ws连接，防止连接还没断就关闭窗口，服务端会抛出异常
  window.onbeforeunload = function() {
    websocket.close();
  }
}




// 重连
const reconnect = (url) => {
  // 防止重复连接判断
  if (lockReconnect) {
    return true;
  }

  lockReconnect = true;

  // 没连接上会一直重连，设置延迟避免重复请求过多
  timer && clearTimeout(timer);
  timer = setTimeout(() => {
    createWebSocket(url);
    lockReconnect = false;
  }, 20000)

}


// 心跳检测
let heartCheck = {
  // 每隔几秒检测下心跳是否在继续
  timeout: 10000,
  timeoutObj: null,
  serverTimeoutObj: null,
  start: () => {
    console.log('开始检测心跳');
    let self = this;
    this.timeoutObj && clearTimeout(this.timeoutObj);
    this.serverTimeoutObj && clearTimeout(this.serverTimeoutObj);
    this.timeout = setTimeout(() => {
      // 这里发送一个心跳，后端收到后，返回一个心跳消息
      console.log('发送信息， 测试后台是否运行中----');
      // 任意发一个消息过去，后台接收，在init（）中onmessage收到消息，说明后台没有挂掉
      websocket.send('你太6了');
      self.serverTimeoutObj = setTimeout(() => {
        console.log('后台挂掉了，没有心跳了...');
        console.log('打印ws的地址：'+websocket);
        websocket.close();
      }, self.timeout);
    }, this.timeout);
  }
}

// 关闭连接
const closeWebSocket = () => {
  websocket.close();
}

// 客户端发送消息给服务端
const send = () => {
  let message = 'xxx';
  websocket.send(message);
}
