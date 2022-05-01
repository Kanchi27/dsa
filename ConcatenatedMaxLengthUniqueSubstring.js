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









function concatenateUniqueElemString(arr){
  let s = arr.join(''); 
  console.log('s',s)
  let max = 0;
  let begin = 0;
  let map = {};
  for(let end=0; end< s.length; end++){
    console.log('condition',map[s[end]]!==undefined && map[s[end]] >= begin,map[s[end]],begin)
    if(map[s[end]]!==undefined && map[s[end]] >= begin){
      // only update begin from 0 to that index where already a char has encountered + 1
      begin=map[s[end]]+1;
      console.log('begin',begin,s[end],map[s[end]])
    }
    map[s[end]] = end;
    console.log('map',map)
    // max count will be current index - beginning index(as beginning index will update in case same character is encountered) +1
    max = Math.max(max, end-begin+1);
    console.log('max',max)
  }
  return max
};
console.log(concatenateUniqueElemString(["cha","r","act","ers"]));  // 6



s characters
condition false undefined 0
map { c: 0 }
max 1
condition false undefined 0
map { c: 0, h: 1 }
max 2
condition false undefined 0
map { c: 0, h: 1, a: 2 }
max 3
condition false undefined 0
map { c: 0, h: 1, a: 2, r: 3 }
max 4
condition true 2 0
begin 3 a 2
map { c: 0, h: 1, a: 4, r: 3 }
max 4
condition false 0 3
map { c: 5, h: 1, a: 4, r: 3 }
max 4
condition false undefined 3
map { c: 5, h: 1, a: 4, r: 3, t: 6 }
max 4
condition false undefined 3
map { c: 5, h: 1, a: 4, r: 3, t: 6, e: 7 }
max 5
condition true 3 3
begin 4 r 3
map { c: 5, h: 1, a: 4, r: 8, t: 6, e: 7 }
max 5
condition false undefined 4
map { c: 5, h: 1, a: 4, r: 8, t: 6, e: 7, s: 9 }
max 6
6
