console.log('测试webpack配置');

module.exports = function() {
  let hello = document.createElement('div');

  hello.innerHTML = 'hello xxx';

  return hello;

}