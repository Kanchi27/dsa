 // Given a list of strings, find the pairs (1-index based), that are anagrams
 // eg input : ["cat","dog","god","tca"], O/P : [1,4], [2,3]
 
 function anagramPairs(arr) {
   var resultMap = {};
   arr.forEach((string,index)=>{
    var freq = {};
    for (let k of [...string].sort()) {
        if (freq[k]) {
           freq[k]++;
        } else {
           freq[k] = 1;
        }
    }
    let result='';
    for (const [key, value] of Object.entries(freq)) {
        result+=key+value
    }
    if(resultMap[result]){
      resultMap[result].push(index+1)
    }else{
      resultMap[result] = [index+1]
    };
   })
   return resultMap
};

console.log(getFrequency(["bored","cat","dog","god","tca","peek","robed"])) // [ [ 1, 7 ], [ 2, 5 ], [ 3, 4 ] ]
