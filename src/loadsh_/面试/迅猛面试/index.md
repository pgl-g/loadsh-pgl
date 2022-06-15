1. 封装过哪些hooks

2. 浏览器运行机制
  a. 浏览器进程对URL进行初步的处理
  c. 从浏览器的DNS缓存种查找是否有我们要访问的IP
  b. 创建 TCP 连接（三次握手）
  d. 是HTTPS请求会建立 TLS 连接（client hello, server hello, pre-master key 生成『对话密钥』）
  e. 发送 HTTP 请求
  f. 状态码 200，根据响应头中的 Content-Type 决定如何响应并交给相应的进程，如下载文件交给下载管理器，加载资源、渲染 HTML将通知浏览器进程进行预渲染工作  
    II: HTML解析主要负责解析将文档解析为dom树
        css解析器主要负责将css内容解析为浏览器能够识别的css sheets
        js引擎就是解析执行js内容
        布局模块结算每个元素、节点的位置大小等信息
        绘图模块拿到计算好的数据绘制页面

3. 本地缓存的知识 （cookie，session，localStorage）
  a. localStorage本地缓存，会一直存在 ， 5mb，仅在客户端中保存
  b. sessionStorage 关闭浏览器就会失效， 5mb，仅在客户端中保存
  c. cookie 一般存储用户登录信息，可以设置过期时间 4kb，参与服务端通信，cookie 会携带在HTTP请求头中

4. redux三大原则
  a. 单一数据源：整个应用的state被存储在一棵object tree中，并且这个object tree只存在于唯一一个store中；
  b. state是只读的：唯一改变state的方法就是触发action，action是一个用于描述发生事件的普通对象；
  c. 使用纯函数修改数据；(为了指定状态树如何通过操作转换，需要纯函数。纯函数是那些返回值仅取决于其参数值的函数。)

5. 前端处理跨域问题 （代理，cors，JsonP）

6. 受控组件和非受控组件区别（根据是否使用了setState判断）
  a. 受控组件的状态是开发者维护，非受控组件的状态是组件自身维护（不受开发者控制）
  b. 一般更新state，来拿到最新的值，就是受控组件
  c. 值不受组件自身的 state 或 props 控制， 通过 添加 ref prop 来访问渲染后的底层 DOM 元素。就是非受控组件

7. 什么是高阶组件

8. webpack