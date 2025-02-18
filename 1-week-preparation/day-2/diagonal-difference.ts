/**
 * Calculates the absolute difference between the sums of the matrix's two diagonals.
 * @param {number[][]} arr - A 2D array representing the matrix.
 * @returns {number} The absolute difference between the sums of the matrix's two diagonals.
 */
function diagonalDifference(arr: number[][]): number {
    let leftToRightDiagonalSum = 0;
    let rightToLeftDiagonalSum = 0;
    const n = arr.length;
    for (let rowIndex = 0; rowIndex < n; rowIndex++) {
        leftToRightDiagonalSum += arr[rowIndex][rowIndex];
        rightToLeftDiagonalSum += arr[rowIndex][n - 1 - rowIndex];
    }
    return Math.abs(
        leftToRightDiagonalSum - rightToLeftDiagonalSum
    );
}
