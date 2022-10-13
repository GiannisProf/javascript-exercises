const reverseString = function(input) {
    let stringArr = input.split("");
    let reverseStrArr = stringArr.reverse();
    let joinedStrArr = reverseStrArr.join("");
    
    return joinedStrArr;
};

// Do not edit below this line
module.exports = reverseString;
