/*
 * Complete the 'lonelyinteger' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts INTEGER_ARRAY a as parameter.
 */

function lonelyinteger(a) {
    // Write your code here
    let unique = a.filter(function(value){
    return a.indexOf(value) === a.lastIndexOf(value)
    });
    return unique[0];
};