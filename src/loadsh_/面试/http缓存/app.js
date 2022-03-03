const http = require('http');
const fs = require('fs');
const url = require('url');
const etag = require('etag');


const app = http.createServer((req, res) => {
  // res.end('hello');
  const {pathname} = url.parse(req.url);

  if (pathname === '/') {
    const data = fs.readFileSync('./index.html');

    res.end(data);
  } 
  else if (pathname === '/logo.png') {
    const data = fs.readFileSync('./logo1.png');





    /**
     * 协商缓存 
     *  判断ifmodifiedSince与（文件的修改的时间mtime.toUTCString()）是否一样
     *  如若是一样，则返回304从缓存中拿值生效，修改了文件，不一样则重新请求，返回200
     * 
     *  last-modeified问题：
     *   1. 根据文件名进行修改，内容没有变时间戳会会更新，导致判断失效进行重新缓存
     *   2. 文件名修改过快的话没法精确到毫秒
     */
    // 获取文件的修改时间
    const { mtime } = fs.statSync('./logo1.png');

    // 发送get请求，请求头上需要包含ifmodeified-since字段，其值正是上次响应头中last-modeified 
    res.setHeader('last-modeified', mtime.toUTCString());
    res.setHeader('Cache-Control', 'no-cache');



    // res.writeHead(200, {
    //   // Expires: new Date('2022-3-2 21:27 ') // http1.0 设置过期时间 缺点：要求服务器与客户端的时钟保持严格的同步，并且在这一天的到来后，服务器还得重新设定新的时间
    //   'Cache-Control': 'max-age=5' // http1.1（表示当访问此网页后的5秒内再次访问不会去服务器） 滑动时间 单位是秒 
    // })
    
    /**
     * 更好的协商缓存Entity Tag
     *  1. 其内容主要是服务器为不同资源进行哈希运算所生成的一个字符串
     *  该字符串类似于文件指纹，只要文件内容编码存在差异，对应的ETag标签值就会不痛，因此
     *  可以使用ETag对文件资源进行更精确的变化感知
     */
    // 根据文件内容生成类似于哈希code，进行身份协商
    res.setHeader('etag', etag(data));
    const ifNoneMatc = req.headers['if-none-match'];
    if (ifNoneMatc === etag(data)) {
      res.statusCode = 304;
      res.end();
      return;
    }

    res.end(data);
  } 
  else {
    res.statusCode = 404;
    res.end();
  }
});


app.listen(3000, () => {
  console.log('http://localhost:3000')
});
