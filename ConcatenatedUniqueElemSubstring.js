// Find max length of conctenated string with uique characters in javascript
// Eg : ip - > ["un","iq","ue"]   op: 4


function concatenateUniqueElemString(arr){
  let str = arr.join('');
  let freq= {};
  let max = [];
  let maxLength = 0;
  for(let k of str){
    if(freq[k]){
      max.push(maxLength)
      maxLength = 0;
      freq={};
    }
     freq[k] = 1;
      maxLength++;
  }
  return Math.max(maxLength,[...max]);
}
console.log(concatenateUniqueElemString(["cha","r","act","ers"]));  // 6
console.log(concatenateUniqueElemString(["un","iq","ue"]));       // 4
console.log(concatenateUniqueElemString(["abcdefghijklmnopqrstuvwxyz"]));  // 26
