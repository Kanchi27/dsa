// Write an efficient algorithm that searches for a value target in an m x n integer matrix matrix. This matrix has the following properties:

// Integers in each row are sorted from left to right.
// The first integer of each row is greater than the last integer of the previous row.


var searchMatrix = function(matrix, target) {
    let l = 0;
    let col = matrix[0].length;
    let r = matrix.length*col - 1;
    while (l <= r) {
        let midRow = Math.floor((l+r)/(2*col));
        let midCol = (Math.floor((l+r)/2))%col;
      //  console.log(midRow, midCol)
        if (matrix[midRow][midCol] === target) {
            return true
        } else if(matrix[midRow][midCol] > target) {
            r = midRow*col + midCol - 1
        } else {
            l = midRow*col + midCol + 1
        }
    }
    
    return false
}
