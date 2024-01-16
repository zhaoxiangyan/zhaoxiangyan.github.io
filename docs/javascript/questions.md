# 面试题

## js 找出数组中出现最多的元素

```js
function findMostFrequentElement(arr) {
  let countMap = {}; // 创建一个空对象作为计数器

  for (let i = 0; i < arr.length; i++) {
    if (!countMap[arr[i]]) {
      countMap[arr[i]] = 1; // 如果该元素不在计数器中，则将其添加并设置初始值为1
    } else {
      countMap[arr[i]]++; // 否则，递增计数器中该元素的值
    }
  }

  let maxCount = -Infinity; // 记录当前最大计数值
  let mostFrequentElements = []; // 存放所有出现次数等于最大计数值的元素

  for (let element in countMap) {
    if (countMap[element] > maxCount) {
      maxCount = countMap[element]; // 更新最大计数值
      mostFrequentElements = [element]; // 清空之前保存的结果，只保留当前最大计数值的元素
    } else if (countMap[element] === maxCount) {
      mostFrequentElements.push(element); // 若与最大计数值相同，则将该元素添加至结果数组中
    }
  }

  return mostFrequentElements;
}

// 示例调用
const array = ["a", "b", "a", "b", "e", "f", "g", "h", "i", "j"];
console.log(findMostFrequentElement(array)); // 输出 ["a", "b"]
```
