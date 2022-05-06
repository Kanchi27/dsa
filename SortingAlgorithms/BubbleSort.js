// Bubble Sort -> bubble smallest element to the top
function swap(a,b,arr){
    [arr[b], arr[a]] = [arr[a], arr[b]];
  }
  
  function bubbleSort(arr){
    for(let i=0;i<arr.length-1 ; i++){   
      let noSwap = true;
      for(j=arr.length;j>i; j--){    
        if(arr[j] < arr[j-1]){     // move smaller elem to front
          swap(j,j-1,arr);
          noSwap = false;
        }
      }
       if(noSwap) {
          break;
        }
    }
    return arr
  }
  
  console.log(bubbleSort([-2,9, 33, 2, 45, 17, 8]))
