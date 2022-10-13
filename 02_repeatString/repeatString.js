const repeatString = function(string,num) {
    let currentString = "";
    if(num < 0){return "ERROR";}
    for(let i = 0; i<num; i++){
        currentString += string;
    }
    return currentString;
};

// Do not edit below this line
module.exports = repeatString;
