// 给定一个整数数组 nums 和一个目标值 target，请你在该数组中找出和为目标值的那 两个 整数，并返回他们的数组下标。

// 你可以假设每种输入只会对应一个答案。但是，数组中同一个元素不能使用两遍。

// 示例:
// 给定 nums = [2, 7, 11, 15], target = 9

// 因为 nums[0] + nums[1] = 2 + 7 = 9
// 所以返回 [0, 1]

// 用 hashMap 存遍历过的元素和对应的索引。
// 每访问一个元素，查看 hashMap 中是否存在满足要求的目标数字。
// 所有事情在一次遍历中完成（用了空间换取时间）。

function twoSum(nums, target) {
  const map = new Map();
  for (let i = 0; i < nums.length; i++) {
    const curNum = nums[i];
    const targetNum = target - curNum;
    const targetNumIndex = map.get(targetNum);

    if (targetNumIndex !== undefined) {
      return [targetNumIndex, i];
    } else {
      map.set(curNum, i);
    }
  }
}