// Insertion Sort -> take one element at a time and compare with the rest elements at its left , keep shifting bigger elements to right
//...until a smaller elem is found and place the temp elem there
// O(n2) - worst case
// best case - O(n) -> will be just comparison operation, no shifting 


function insertionSort(arr){
    for(let i=1;i<arr.length;i++){
      let temp = arr[i];
      let j = i-1;
      while(j>=0 && arr[j] > temp){
        arr[j+1] = arr[j];
        j--;
      }
      arr[j+1] = temp;
    }
    return arr
  }
  
  
  console.log(insertionSort([14,20,55,15,3]))