// Insertion Sort -> take one element at a time and compare with the rest elements at its left , keep shifting bigger elements to right
//...until a smaller elem is found and place the temp elem there
// O(n2) - worst case
// best case - O(n) -> will be just comparison operation, no shifting 


function insertionSort(arr){
    for(let i=1;i<arr.length;i++){
      let temp = arr[i];
      let j = i-1;
      while(j>=0 && arr[j] > temp){
        arr[j+1] = arr[j];      // j=0, arr[1] = 20 ; j=1, arr[2]= 20
        j--;                    // j= -1 ; j=0
      }
      arr[j+1] = temp; // arr[0] = 14; arr[1]= 13  ,at the end, j will point to its initial value and restore the temp var
    }
    return arr
  }
  
  
  console.log(insertionSort([20,14,13,15,3]))
