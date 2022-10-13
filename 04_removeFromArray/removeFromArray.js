const removeFromArray = function(array,...theArgs){
    for(let i = 0; i < array.length; i++){  
        for(let j = 0; j < theArgs.length; j++){
            if(array[i]===theArgs[j]){
                array.splice(i,1)
                i--;
            }
        }
    }
    return array;
};

// Do not edit below this line
module.exports = removeFromArray;
