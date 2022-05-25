// Given a sorted array of distinct integers and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order.

// You must write an algorithm with O(log n) runtime complexity.


// Example 1:

// Input: nums = [1,3,5,6], target = 5
// Output: 2
// Example 2:

// Input: nums = [1,3,5,6], target = 2
// Output: 1
// Example 3:

// Input: nums = [1,3,5,6], target = 7
// Output: 4

// Return Nearest target 
var searchInsert = function(nums, target) {
    
    function binarySearch(start, end) {
        if (start > end) return start;
        const mid = Math.floor((start + end) / 2);
        
        if (nums[mid] === target) return mid;
        if (nums[mid] < target) return binarySearch(mid + 1, end);
        if (nums[mid] > target) return binarySearch(start, mid - 1);
    }
    
    return binarySearch(0, nums.length - 1);
};
var searchInsert = function (nums, target) {
    let low = 0;
    let high = nums.length - 1;
    let mid, value;
  
    while (low <= high) {
      mid = Math.floor((low + high) / 2); // obtain the mid value
  
      value = nums[mid];
      if (nums[mid] === target) return mid;
      else if (nums[mid] < target) low = mid + 1;
      else if (nums[mid] > target) high = mid - 1;
    }
  
    return low; // low points to the position of insertion if match found or not
  };