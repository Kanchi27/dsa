// TC : Logn + Logn = Logn
function infiniteSortedArray(arr,key) {
  let low = 0;
  let high = 1;
  // since length is not know, check in some exponential range to find the key in O(logn) 
  // keep checking in multiples of 2 if key belongs to the range : (0,1) (1,2) (2,4) (4,8) (8.16) (16,32)
  while(arr[high] < key){
    if(arr[high]===key){
      return high;
    }
    low = high;
    high = 2*high;
  }
  while(low<=high){
    let mid = Math.floor((low + high)/2);
    if(arr[mid]=== key){
      return mid;
    }
    console.log(arr[mid])
     if(arr[mid] < key){    // arr[mid] can also be undefined, so check for less than before greater than , as length of array is not known
      low = mid+1;
    }else{
      high = mid - 1;
    }
  }
  return -1;
}
console.log(infiniteSortedArray([-101,-99,-97,-1,0,3,5,9,12,13,19,300,500,970,1000,100000,10000000,10000000000],10000000000))
