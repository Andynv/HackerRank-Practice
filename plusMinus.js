/*
 * Complete the 'plusMinus' function below.
 *
 * The function accepts INTEGER_ARRAY arr as parameter.
 */

function plusMinus(arr) {
    // Write your code here
    var sum = 0;
    var max = 0;
    var zero = 0;
    for(let i = 0; i < arr.length; i++){
        if(arr[i] > 0){
            sum++
        } else if(arr[i] < 0){
            max ++
        } else {
            zero++
        };
    };
    console.log((sum/arr.length).toFixed(6));
    console.log((max/arr.length).toFixed(6));
    console.log((zero/arr.length).toFixed(6));
};