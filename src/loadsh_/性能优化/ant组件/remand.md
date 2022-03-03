## checkbox优化 
解决：全选效果, after下关闭checkbox的动画，可以提升用户体验

## form表单中不一定是输入组件， 也会包含展示组件，但是由于form更新时会触发所有子组件的更新，所以表单里包含里很大的组件，例如tabs组件，就会造成性能瓶颈
解决：将 tag 拆分成一个组件，并设置 shouldComponentUpdate。这样每次输入时就不会触发 tag 的更新。
