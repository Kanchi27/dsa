// Selection Sort -> find min element each time and place it at the top
// O(n2) - worst case
// best case - O(n) -> find min element place it at the start (and shift all other elements forward by one step/swap it with the min elem )also keep a track if each prev element is smaller than next element parallel to finding min element
function swap(a,b,arr){
    return [arr[b], arr[a]] = [arr[a], arr[b]];
  }
  
  function selectionSort(arr){
    for(let i=0;i<arr.length; i++){
      let min = i;
       let flag = 0;
      for(j=i+1;j<arr.length; j++){
        if(arr[j] < arr[min]){
          min = j
        }    
         if(arr[j] > arr[j+1]){
         flag = 1;
       }
      }
      if(min!==i){
        swap(i,min,arr);
      }
      if(flag === 0){
        break;
      }
    }
    return arr
  }
  
  
  console.log(selectionSort([-2,9, 33, 2, 45, -1,17, 8]))