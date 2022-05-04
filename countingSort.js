/*
 * Complete the 'countingSort' function below.
 *
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts INTEGER_ARRAY arr as parameter.
 */

function countingSort(arr) {
    // Write your code here
let frequencyArray = new Array(100).fill(0);
for(let num of arr){
    frequencyArray[num]++
   };
  return frequencyArray;
};
