// Given 2 strings, check whether they are anagrams of each other

function checkAnagram(str1,str2){
  if(str1.length!=str2.length){
    return false
  }
  let countArr1=[];
  let countArr2=[];
  for(let char of str1){
    const idx = char.charCodeAt() -97;
    countArr1[idx] =   countArr1[idx]+1 || 1;
  }
  for(let char of str2){
    const idx = char.charCodeAt() -97;
    countArr2[idx] =   countArr2[idx]+1 || 1;
  }
  for(let i=0;i<countArr1.length;i++){
    if(countArr1[i]!== countArr2[i]){
      return false;
    }
  }
  return true;
}


console.log(checkAnagram('bored','robed'))
