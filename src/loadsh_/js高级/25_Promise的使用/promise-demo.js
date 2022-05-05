function* foo() {
  const value = '11';
  console.log(value);
  // const n = yield;
  yield;
  console.log('函数执行完成')
}
foo().next(10);
foo().return(15)


