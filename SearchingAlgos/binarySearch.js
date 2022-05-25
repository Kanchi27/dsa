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



