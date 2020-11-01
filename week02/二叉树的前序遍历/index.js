// 给你二叉树的根节点 root ，返回它节点值的 前序 遍历。

/**
 * @description 迭代法
 * @param { Tree }} root 
 */
const preorderTraversal = (root) => {
  const res = [];
  const stack = [];
  while (root) {
    res.push(root.val);
    if (root.right) stack.push(root.right);
    root = root.left;
  }

  while (stack.length) {
    root = stack.pop();
    res.push(root.val);
    if (root.right) stack.push(root.right);
    root = root.left;
    while (root) {
      res.push(root.val);
      if (root.right) stack.push(root.right);
      root = root.left;
    }
  }

  return res;
};
