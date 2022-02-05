// You are given a string s and an integer k, a k duplicate removal consists of choosing k adjacent and equal letters from s and removing them, causing the left and the right side of the deleted substring to concatenate together.

// We repeatedly make k duplicate removals on s until we no longer can.

// Return the final string after all such duplicate removals have been made. It is guaranteed that the answer is unique.

 

// Example 1:

// Input: s = "abcd", k = 2
// Output: "abcd"
// Explanation: There's nothing to delete.
// Example 2:

// Input: s = "deeedbbcccbdaa", k = 3
// Output: "aa"
// Explanation: 
// First delete "eee" and "ccc", get "ddbbbdaa"
// Then delete "bbb", get "dddaa"
// Finally delete "ddd", get "aa"
// Example 3:

// Input: s = "pbbcggttciiippooaais", k = 2
// Output: "ps"
 

// Constraints:

// 1 <= s.length <= 105
// 2 <= k <= 104
// s only contains lower case English letters.





//Time : O(n)
//Space : O(n)


var removeDuplicates = function(s, k) {
    let stack = [];
    for(let char of s){
      let top = stack[stack.length -1] ;
      if(stack.length==0 || top[0]!==char){
        stack.push([char,1])
      }else{
        top[1]++;
        if(top[1]===k){
          stack.pop();
        }
      }
    }
  return stack.reduce((acc,curr) => acc + curr[0].repeat(curr[1]),'')
};


console.log(removeDuplicates("deeedbbcccbdaa",3))
console.log(removeDuplicates("pbbcggttciiippooaais",2))