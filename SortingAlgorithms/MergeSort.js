// Merge Sort -> Divide & Conquer :
// Keep dividing (log(n)) the array in halves left & right until it is of length 1 => individual arr // is sorted, 
// Merge all of them starting from smallest one [0] + [0] => [0,0] + [0,0] => // [0,0,0,0]+[0,0,0,0] => [0,0,0,0,0,0,0,0]  .........
// Time : O(Nlog(n))
// O(n2) - worst case
// best case - O(n) -> if half of the array is already sorted
// space : O(N)
function merge(arr1,arr2){
    let ptr1=0,ptr2=0;
    let result = [];
    while(ptr1<arr1.length && ptr2<arr2.length){
      if(arr1[ptr1]<arr2[ptr2]){
        result.push(arr1[ptr1++]);
      }else{
        result.push(arr2[ptr2++]);
      }
    }
    while(ptr1<arr1.length){
      result.push(arr1[ptr1++]);
    }
     while(ptr2<arr2.length){
      result.push(arr2[ptr2++]);
    }
    return result
  }
  function mergeSort(arr){
    if(arr.length <= 1){
      return arr;
    }
    const mid = Math.floor(arr.length/2);
    const left = mergeSort(arr.slice(0,mid));
    const right = mergeSort(arr.slice(mid));
    return merge(left,right);
  }
  console.log(mergeSort([-2,9, 33, 2, 45, -1,17, 8]))