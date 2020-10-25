// 给定 n 个非负整数表示每个宽度为 1 的柱子的高度图，计算按此排列的柱子，下雨之后能接多少雨水。

//  

// 示例 1：



// 输入：height = [0,1,0,2,1,0,1,3,2,1,2,1]
// 输出：6
// 解释：上面是由数组 [0,1,0,2,1,0,1,3,2,1,2,1] 表示的高度图，在这种情况下，可以接 6 个单位的雨水（蓝色部分表示雨水）。 
// 示例 2：

// 输入：height = [4,2,0,3,2,5]
// 输出：9
//  

// 提示：

// n == height.length
// 0 <= n <= 3 * 104
// 0 <= height[i] <= 105

var trap = function(height) {
  let n=height.length;
  if(n===0) return 0;
  let res=0;

  let left_max=[] ,right_max=[];
  //记录左边数组的最大值
  left_max[0]=height[0];
  for(let i=1;i<n;i++){
    left_max[i]=Math.max(left_max[i-1],height[i]);
  }
  //记录右边数组的最大值
  right_max[n-1]=height[n-1];
  for(let i=n-2;i>=0;i--){
    right_max[i]=Math.max(right_max[i+1],height[i]);
  }
  //统计每一列的面积之和
  for(let i=0;i<n;i++){
    res+=Math.min(left_max[i],right_max[i])-height[i];
  }
  return res;
};
