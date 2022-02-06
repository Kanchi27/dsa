// Find max length of conctenated string with uique characters in javascript
// Eg : ip - > ["un","iq","ue"]   op: 4


function concatenateUniqueElemString(arr){
  let s = arr.join('');
  let max = 0;
  let begin = 0;
  let map = {};
  for(let end=0; end< s.length; end++){
    if(map[s[end]]!==undefined && map[s[end]] >= begin){
      begin=map[s[end]]+1;
    }
    map[s[end]] = end;
    max = Math.max(max, end-begin+1);
  }
  return max
};

function findMaxLengthSubstring(s){
  let max = 0;
  let begin = 0;
  let set = new Set();
  for(let end=0; end< s.length; end++){
    while(set.has(s[end])){
      set.delete(s[begin]);
      begin = begin+1;
    }
    set.add(s[end])
    max = Math.max(max, end-begin+1);
  }
  return max
}
console.log(longestSubstring('dvdf'))
//   let freq= {};
//   let max = [];
//   let maxLength = 0;
//   for(let k of str){
//     if(freq[k]){
//       max.push(maxLength)
//       maxLength = 0;
//       freq={};
//     }
//      freq[k] = 1;
//       maxLength++;
//   }
//   return Math.max(maxLength,[...max]);
}
console.log(concatenateUniqueElemString(["cha","r","act","ers"]));  // 6
console.log(concatenateUniqueElemString(["un","iq","ue"]));       // 4
console.log(concatenateUniqueElemString(["abcdefghijklmnopqrstuvwxyz"]));  // 26
