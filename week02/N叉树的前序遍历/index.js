
// 给定一个 N 叉树，返回其节点值的前序遍历。

// 例如，给定一个 3叉树 :

 
// 返回其前序遍历: [1,3,5,6,2,4]。

// 说明: 递归法很简单，你可以使用迭代法完成此题吗?

/**解法二
 * @description 利用栈
 * @param {Node} root
 * @return {number[]}
 */
var preorder = function(root) {
  if (root === null) {
      return []
  }
  let array = []
  let queue = [root]
  while (queue.length) {
      let len = queue.length
      let node = queue.shift()
      array.push(node.val)
      if (node.children.length > 0) {
          queue = node.children.concat(queue) // 这里有别于层序遍历，用 node.children 连接 queue，而不是 queue.concat(node.children)这样就实现了前序遍历的效果
      }
  }
  return array
};
