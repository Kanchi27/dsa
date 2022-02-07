// // longest palindromic substring 
// Time complexity : O(n^2)
// Space Complexity : O(1)

// Generic solution to find all palindromic substring/total count/max length of palindromic substring

let findAllPalindromeInSubstrings = function(input, j, k) {
    console.log(j,k)
  let count = 0;
  while (j >= 0 && k < input.length && input[j] === input[k]) {
    count++;
    j--;
    k++;
    console.log(input.substring(j+1, k));
  }
  return count;
};

let findAllPalindromeSubstrings = function(input) {
  let count = 0;
  for (let i = 0; i < input.length; i++) {
    count += findAllPalindromeInSubstrings(input, i - 1, i + 1);
    count += findAllPalindromeInSubstrings(input, i, i + 1);
  }
  return count;
};


// function longestPalindromeSubstring(str){
//   if(str.length<1 && str===null) return '';
//   let longest = '';
//   for(let i=0;i<str.length;i++){
//     let oddPalindrome = expandFromCenter(i,i,str);
//     let evenPalindrome = expandFromCenter(i-1,i,str);
//     if(oddPalindrome.length > longest.length){
//       longest = oddPalindrome
//     }
//     if(evenPalindrome.length > longest.length){
//       longest = evenPalindrome
//     }
//   }
//   return longest
// }

// function expandFromCenter(left,right,str){
//   let i = 0;
//   while(str[left-i] && str[left-i]=== str[right+i]){
//     i++;   
//   }
//   i--;
//   return str.slice(left-i,right+i+1);
// }
// console.log(longestPalindromeSubstring("aabcba"));
