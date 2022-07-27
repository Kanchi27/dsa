// There is an integer array nums sorted in ascending order (with distinct values).

// Prior to being passed to your function, nums is possibly rotated at an unknown pivot index k (1 <= k < nums.length) such that the resulting array is [nums[k], nums[k+1], ..., nums[n-1], nums[0], nums[1], ..., nums[k-1]] (0-indexed). For example, [0,1,2,4,5,6,7] might be rotated at pivot index 3 and become [4,5,6,7,0,1,2].

// Given the array nums after the possible rotation and an integer target, return the index of target if it is in nums, or -1 if it is not in nums.

// You must write an algorithm with O(log n) runtime complexity.
// Input: nums = [4,5,6,7,0,1,2], target = 0
// Output: 4


// Algo : if you are at mid, and  if start<mid => left sorted  else right sorted
// now target in case of left sorted lies btw start and mid, discard right portion
// else in right sorted, if target lies between mid and end, discard left portion

function search(arr,target){
  let start = 0;
  let end = arr.length - 1;
  while (start <= end) {
    let mid = Math.floor((start + end) / 2)
    if (arr[mid] === target) {
      return mid
    }
    if (arr[mid]>=arr[start]) {  // left sorted
      if (target < arr[mid] && target >= arr[start]) {
        end = mid - 1;

      } else {
        start = mid + 1
      }
    } else {            // right sorted
      if (target > arr[mid] && target <= arr[end]) {
        start = mid + 1;
      } else {
        end = mid - 1
      }
    }

  }
  return -1
}

// 4 5 6 7 0 1 2 
//    mid:7,start:4, end:2 , target = [6,1]
// 12 13 4 5 9 10 11
//    mid:5, start:12, end : 11, target : [13,10]
