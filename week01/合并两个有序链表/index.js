// 将两个升序链表合并为一个新的 升序 链表并返回。新链表是通过拼接给定的两个链表的所有节点组成的。 

//  

// 示例：

// 输入：1->2->4, 1->3->4
// 输出：1->1->2->3->4->4

var mergeTwoLists = function(l1, l2) {
  return l1 && l2 && {
      val: Math.min(l1.val, l2.val),
      next: l1.val < l2.val && mergeTwoLists(l1.next, l2) || mergeTwoLists(l1, l2.next)  
  } || l1 || l2
};