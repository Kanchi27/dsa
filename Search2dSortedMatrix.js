// Write an efficient algorithm that searches for a value target in an m x n integer matrix matrix. This matrix has the following properties:

// Integers in each row are sorted in ascending from left to right.
// Integers in each column are sorted in ascending from top to bottom.


var searchMatrix = function(matrix, target) {
    let row = 0;
		let col = matrix[0].length - 1;
		while (row < matrix.length && col >= 0) {
			if (matrix[row][col] == target) {
				return true;
			}
			if (matrix[row][col] < target) {
				row++;
			} else {
				col--;
			}
		}
		return false;
};
