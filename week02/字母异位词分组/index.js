
// 给定一个字符串数组，将字母异位词组合在一起。字母异位词指字母相同，但排列不同的字符串。

// 示例:

// 输入: ["eat", "tea", "tan", "ate", "nat", "bat"]
// 输出:
// [
//   ["ate","eat","tea"],
//   ["nat","tan"],
//   ["bat"]
// ]
// 说明：

// 所有输入均为小写字母。
// 不考虑答案输出的顺序。


/**
 * @description 哈希表
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
  let hash = new Map()
  
  for(let i = 0; i < strs.length; i++) {
      let str = strs[i].split('').sort().join()
      if(hash.has(str)) {
          let temp = hash.get(str)
          temp.push(strs[i])
          hash.set(str, temp)
      } else {
          hash.set(str, [strs[i]])
      }
  }
  
  return [...hash.values()]
};
