// Insertion Sort -> take one element at a time and compare the element with the elements to its left,
// until it reaches an element that is smaller than it; the element is then inserted in front of the smaller element.
// O(n2) - worst case
// best case - O(n) -> will be just comparison operation, no shifting 


function insertionSort(arr){
    for(let i=1;i<arr.length;i++){
      let temp = arr[i];                // i=1,temp = 14
      let j = i-1;                      // j=0,arr[j] = 20
      while(j>=0 && arr[j] > temp){
        arr[j+1] = arr[j];              // [20,20,13,15,3] => shift greater element by 1
        j--;                            // j= -1 
      }
      arr[j+1] = temp;                  // 1st pass : [14,20,13,15,3]; 2nd pass :[13,14,20,15,3] 3rd pass: [13,14,15,20,3]; 
                                        // at the end, j will point to its initial value and restore the temp var
    }
    return arr
  }
  
  
  console.log(insertionSort([20,14,13,15,3]))
