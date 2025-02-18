export const fnTesting = (array) => {
  const tree = [];
  for (let i = 0; i < array.length; i++) {
    const item = array[i];
    const product = item['Product Name'];
    const itemSize = getSize(item);
    let j = 0;
    function deepBranches(arrayNode, j) {
      if (j >= itemSize) {
        return;
      }
      let currentKey = getKey(item, j);
      let currentNode = arrayNode.find(
        (node) => node.title === item[currentKey],
      );
      if (!currentNode) {
        currentNode = {
          title: item[currentKey],
          key: `${item[currentKey]}:${Math.floor(Math.random() * 20)}`,
          children: j === itemSize - 1 ? null : [],
        };
        if (item[currentKey] !== null) {
          arrayNode.push(currentNode);
        }
      }
      if (
        j === itemSize - 1 &&
        currentNode?.children &&
        Array.isArray(currentNode?.children)
      ) {
        currentNode?.children.push({
          key: `${Math.floor(Math.random() * 10)}`,
          title: product,
          children: null,
        });
        return;
      } else {
        deepBranches(currentNode.children, j + 1);
      }
    }
    deepBranches(tree, j);
  }
  // console.log(tree);
  return tree;
};

const getKey = (object, index) => {
  const keys = Object.keys(object);
  return keys[index];
};
const getSize = (object) => {
  const size = Object.keys(object).length;
  return size;
};

const isHasInTree = (array, name) => {
  let stack = [...array];
  while (stack.length > 0) {
    let lastElem = stack.pop();
    if (lastElem.Category === name) {
      return true;
    }
    if (lastElem.subcategory === name) {
      return true;
    }
    if (lastElem?.children && lastElem.children.length > 0) {
      stack.push(...lastElem.children);
    }
  }
  return false;
};
