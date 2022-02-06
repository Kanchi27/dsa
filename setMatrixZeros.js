// Given an m x n integer matrix matrix, if an element is 0, set its entire row and column to 0's, and return the matrix.

// You must do it in place.


/**
 ** Since first cell for both first row and first column is the same i.e. matrix[0][0]
 ** We can use an additional variable for either the first row/column.
 ** For this solution we are using an additional variable for the first column
 ** and using matrix[0][0] for the first row.
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes = function(matrix) {
    let rows  = matrix.length;
    let cols = matrix[0].length;
    let isColZero = false;
    
    for(let i=0;i<rows;i++){
        // check if any elem in first column is 0 => first col is 0
        
        if(matrix[i][0]===0){
            isColZero = true;
        }
        
       // check for [row* col-1 matrix for any zero elemeent]
          // If an element is zero, we set the first element of the corresponding row and column to 0
        for(let j=1;j<cols;j++){
            if(matrix[i][j]===0){
                matrix[i][0] = 0;
                matrix[0][j] = 0;
            }
        }
        
    }
    
    // Iterate over the array once again and using the first row and first column, update the elements.
    for(let i=1;i<rows;i++){
        for(let j=1;j<cols;j++){
            if(matrix[i][0] === 0 || matrix[0][j] === 0){
                matrix[i][j] = 0;
            }
        }
    }
    
    
    if(matrix[0][0] === 0){
        //  1st row is 0
    for(let j=0;j<cols;j++){
        matrix[0][j] = 0  
        }
     }
    
   
     if(isColZero){
          //  1st col is 0
    for(let i=0;i<rows;i++){
        matrix[i][0] = 0  
        }
     }
   
};
