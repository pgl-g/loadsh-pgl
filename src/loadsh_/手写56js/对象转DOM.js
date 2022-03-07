

/**
 * 不太明白vnode的结构
 */

function _render(vnode) {

  if (typeof vnode === 'number') {
    vnode = String(vnode);
  }

  if (typeof vnode === 'string') {
    return document.createTextNode(vnode);
  }

  const dom = document.createElement(vnode.tag);

  if (vnode.attrs) {
    Object.keys(attrs).forEach(key => {
      const attr = attrs[key];
      dom.setAttribute(key, attr);
    })
  }

  vnode.children.forEach(child => dom.appenChild(_render(child)));


  return dom

}