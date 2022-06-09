// Iterative approach
function binarySearch(arr, key) {
    let low = 0;
    let high = arr.length - 1;

    while (low <= high) {
        let mid = Math.floor((low + high) / 2);
        if (arr[mid] === key) {
            return mid;
        }
        else if (arr[mid] < key) {
            low = mid + 1
        }
        else {
            high = mid - 1
        }
    }
    return -1;
}
console.log(binarySearch([2, 4, 5, 7, 10, 12], 12));


// Recursive Approach
function binarySearchRecursive(arr, key, start = 0, end = arr.length - 1) {
    if (start > end) {
        return -1;
    }
    let mid = Math.floor((start + end) / 2);
    if (arr[mid] === key) {
        return mid;
    }
    else if (arr[mid] < key) {
        return binarySearchRecursive(arr, key, mid + 1, end);
    }
    else {
        return binarySearchRecursive(arr, key, start, mid - 1);
    }
}
console.log(binarySearchRecursive([2, 4, 5, 7, 10, 12], 12));


//Binary search, return index of element
let array = [1,2,3,4,5,6,7,8,9,10];
			
function recursiveBinarySearch(array, value, leftPosition, rightPosition){
  if (leftPosition > rightPosition) return -1;
  var middlePivot = Math.floor((leftPosition + rightPosition) / 2);
  if (array[middlePivot] === value) {
      return middlePivot;
  } else if (array[middlePivot] > value) {
      return recursiveBinarySearch(array, value, leftPosition, middlePivot - 1);
  } else {
      return recursiveBinarySearch(array, value, middlePivot + 1, rightPosition);
  }
}
console.log(recursiveBinarySearch(array,7,0,array.length-1))  // 6



