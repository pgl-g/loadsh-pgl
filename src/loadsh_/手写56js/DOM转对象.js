
const dom2tree = (node) => {

  const obj = {};
  obj.tag = node.tagName;
  obj.children = [];

  node.childNodes.forEach(child => obj.children.push(dom2tree(child)));

  return obj;
}