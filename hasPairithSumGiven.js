// Given an array of integers and a value, determine if there are any two integers in the array whose sum is equal to the given value.

// Time complexity : O(n)
// Space complexity : O(n)
function hasPairWithSum(arr,value){
  let checkData = new Set();
  for(let i of arr){
    if(checkData.has(value-i)){
      return true
    }
      checkData.add(i)
  }
  return false
}

console.log(hasPairWithSum([5,4,6],13)) 
