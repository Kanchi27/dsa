 // find longest substring length having valid paranthesis
 // keep counters for open and close paranthesis
 // if close>open -> invalid
 // if open===close -> update maxlength
 // )))(()()()))
 // moving forward, open: ( , close : )
 function longestValidParenthesis(string){
   let maxLength = 0;
   let open = 0;
   let close = 0;
   for(let k of string){
     if(k==="(") open++;
     if(k===')') close++
     if(close>open) {
       close=0;
       open=0;
     }
     
     if(open===close) {
       maxLength= Math.max(maxLength,open+close);
   }
   }

   // moving backward, open : ) , close (
   open=0;
   close=0;
    for(let k of [...string].reverse()){
     if(k===")") open++;
     if(k==='(') close++
     if(close>open) {
       close=0;
       open=0;
     }
     if(open===close) {
       maxLength=Math.max(maxLength,open+close);
   }
    }
   return maxLength;
 }

console.log(longestValidParenthesis(')))(()()()))'));
console.log(longestValidParenthesis('(()'));
