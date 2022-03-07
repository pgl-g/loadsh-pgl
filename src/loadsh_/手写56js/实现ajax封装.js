

const ajax = {

  get(url, fn) {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', url, true);
    xhr.onreadystatechange = function() {
      if (xhr.readyState === 4) {
        fn(xhr.responseText);
      }
    }
    xhr.send();
  },


  post(url, fn, data) {
    const xhr = new XMLHttpRequest();
    xhr.open('POST', url, true);

    // 设置请求头
    xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');

    xhr.onreadystatechange = function() {
      if (xhr.readyState === 4) {
        fn(xhr.responseText);
      }
    }
    // 回调
    xhr.send(data);
  }
}