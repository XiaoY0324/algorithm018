// 给定一个二叉树，返回它的中序 遍历。

// 示例:

// 输入: [1,null,2,3]
//    1
//     \
//      2
//     /
//    3

// 输出: [1,3,2]
// 进阶: 递归算法很简单，你可以通过迭代算法完成吗？

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
const inorderTraversal = (root) => {
  // 1. 设置结果集
  const result = [];

  // 2. 设置栈队列
  const stack = [];

  // 3. 遍历
  while (root || stack.length) {
    // 3.1 栈添加左子树
    while (root) {
      stack.push(root);
      root = root.left;
    }

    // 3.2 推出
    root = stack.pop();

    // 3.3 获取值
    result.push(root.val);

    // 3.4 转换右子树
    root = root.right;
  }

  // 4. 返回结果集
  return result;
};

const root = {
  val: 1,
  left: null,
  right: {
    val: 2,
    left: { val: 3, left: null, right: null },
    right: null,
  },
};

console.log(inorderTraversal(root));
