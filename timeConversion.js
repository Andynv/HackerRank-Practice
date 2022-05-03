/*
 * Complete the 'timeConversion' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts STRING s as parameter.
 */

function timeConversion(s) {
    // Write your code here
    let time = s.includes("PM");

    if(!time){
     s = s.split("AM");
     s = s[0].split(":");  
        if(s[0] === "12") {
            s[0] = "00";
        }
         return s.join(":");
    }else {
        s = s.split("PM");
        s = s[0].split(":");
        if(s[0] != "12") {
            s[0] = (parseInt(s[0]) + 12).toString();
        }
        return s.join(":");
    };
};