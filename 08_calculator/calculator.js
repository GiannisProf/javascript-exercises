const add = function(number1,number2) {
  result = +number1 + +number2;
  return result;
};

const subtract = function(number1, number2) {
  let result = number1 - number2;
  return result;
};

const sum = function(array) {
	let sum = 0;
  for(let i = 0; i < array.length; i++){
    sum += array[i];
  }
  return +sum;
};

const multiply = function(array) {
  let result = 1;
  for(let i = 0; i < array.length; i++){
    result *= array[i];
  }
  return result;

};

const power = function(number1, number2) {
	let result = Math.pow(number1,number2);
  return result;
};

const factorial = function(number) {
  if (number === 0){return 1;}
  else if (number === 1){return 1;}
  else{
    return factorial(number - 1)*number;
  }
	
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
