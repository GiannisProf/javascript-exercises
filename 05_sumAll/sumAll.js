const sumAll = function(num1,num2) {
    if(typeof num1 != "number" || num1 < 0 || typeof num2 != "number" || num2 < 0){return "ERROR"}
    let max = Math.max(num1,num2);
    let sum = Math.min(num1,num2);
    for(let i = sum +1; i <= max; i++){
        sum+=i;
    }
        return sum;
        
    }

// Do not edit below this line
module.exports = sumAll;
