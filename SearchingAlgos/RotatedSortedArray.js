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
