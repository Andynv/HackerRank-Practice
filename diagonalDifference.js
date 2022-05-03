/*
 * Complete the 'diagonalDifference' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts 2D_INTEGER_ARRAY arr as parameter.
 */

function diagonalDifference(arr) {
    // Write your code here
    let result = [0, 0];
    for(let i = 0; i < arr.length; i++){
        result[0] += arr[i][i];
        result[1] += arr[i][arr.length - 1 - i];
    };
    return Math.abs(result[0] - result[1]);
};