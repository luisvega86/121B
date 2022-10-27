/* Lesson 3 */

/* FUNCTIONS */

// Step 1: Using function declaration, define a function named add that takes two arguments, number1 and number2
function add(number1,number2){
    return parseInt(number1) + parseInt(number2)
}
// Step 2: In the function, return the sum of the parameters number1 and number2

// Step 3: Step 3: Using function declaration, define another function named addNumbers that gets the values of two HTML form controls with IDs of addend1 and addend2. Pass them to the add function

function addNumbers(){
    let number1 = document.getElementById("addend1").value;
    let number2 = document.getElementById("addend2").value;
    let sum = add(number1,number2);
    document.getElementById('sum').value = sum;
}
// Step 4: Assign the return value to an HTML form element with an ID of sum

// Step 5: Add a "click" event listener to the HTML button with an ID of addNumbers that calls the addNumbers function
document.getElementById('addNumbers').addEventListener('click', function(){
    addNumbers();
});
// Step 6: Using function expressions, repeat Steps 1-5 with new functions named subtract and subtractNumbers and HTML form controls with IDs of minuend, subtrahend, difference and subtractNumbers
const subtract = function(minuend, subtrahend){
    return parseInt(minuend) - parseInt(subtrahend)
}

function subtractNumbers(){
    let minuend = document.getElementById('minuend').value;
    let subtrahend = document.getElementById('subtrahend').value;
    let difference = subtract(minuend, subtrahend);
    document.getElementById('difference').value = difference;
}

document.getElementById('subtractNumbers').addEventListener('click', function(){
    subtractNumbers();
})
// Step 7: Using arrow functions, repeat Steps 1-5 with new functions named multiply and mulitplyNumbers and HTML form controls with IDs of factor1, factor2, product and multiplyNumbers
const multiply = (factor1, factor2) => parseInt(factor1) * parseInt(factor2);

const mulitplyNumbers = () => {
    let factor1 = document.getElementById('factor1').value;
    let factor2 = document.getElementById('factor2').value;
    let product = multiply(factor1,factor2);
    document.getElementById('product').value = product;
}

document.getElementById('multiplyNumbers').addEventListener('click', function(){
    mulitplyNumbers();
})
// Step 8: Using any of the three function declaration types, repeat Steps 1-5 with new functions named divide and divideNumbers and HTML form controls with IDs of dividend, divisor, quotient and divideNumbers
const divide = (dividend, divisor) => parseInt(dividend) / parseInt(divisor);

const divideNumbers = () => {
    let dividend = document.getElementById('dividend').value;
    let divisor = document.getElementById('divisor').value;
    let quotient = divide(dividend,divisor);
    document.getElementById('quotient').value = quotient;
}

document.getElementById('divideNumbers').addEventListener('click', function(){
    divideNumbers();
})
// Step 9: Test all of the mathematical functionality of the task3.html page.


/* BUILT-IN METHODS */

// Step 1: Declare and instantiate a variable of type Date to hold the current date
let date = new Date();
// Step 2: Declare a variable to hold the current year
let year;
// Step 3: Using the variable declared in Step 1, call the built-in getFullYear() method/function and assign it to the variable declared in Step 2
year = date.getFullYear();
// Step 4: Assign the current year variable to an HTML form element with an ID of year
document.getElementById('year').innerText = year

/* ARRAY METHODS */

// Step 1: Declare and instantiate an array variable to hold the numbers 1 through 25
let numbers = Array.from(Array(26).keys()).slice(1);
// Step 2: Assign the value of the array variable to the HTML element with an ID of "array"
let list = document.getElementById('array');

list.innerHTML = '';
numbers.forEach((item, index)=>{
let span = document.createElement("span");
span.innerText = index == numbers.length - 1 ? item : item + ', ';
list.appendChild(span);
})

// Step 3: Use the filter array method to find all of the odd numbers of the array variable and assign the reult to the HTML element with an ID of "odds" ( hint: % (modulus operartor) )
let oddNumbers = numbers.filter(n => n % 2 == 1);

let oddsList = document.getElementById('odds');

oddsList.innerHTML = '';
oddNumbers.forEach((item, index)=>{
let span = document.createElement("span");
span.innerText = index == oddNumbers.length - 1 ? item : item + ', ';
oddsList.appendChild(span);
})
// Step 4: Use the filter array method to find all of the even numbers of the array variable and assign the result to the HTML element with an ID of "evens"
let evenNumbers = numbers.filter(n => n % 2 == 0);

let evensList = document.getElementById('evens');

evensList.innerHTML = '';
evenNumbers.forEach((item, index)=>{
let span = document.createElement("span");
span.innerText = index == evenNumbers.length - 1 ? item : item + ', ';
evensList.appendChild(span);
})
// Step 5: Use the reduce array method to sum the array variable elements and assign the result to the HTML element with an ID of "sumOfArray"
let sum = numbers.reduce((num1, num2) => num1 + num2, 0);
document.getElementById('sumOfArray').innerText = sum;
// Step 6: Use the map array method to multiple each element in the array variable by 2 and assign the result to the HTML element with an ID of "multiplied"
let twoTimes = numbers.map(number => number * 2);
document.getElementById('multiplied').innerText = twoTimes;

// Step 7: Use the map and reduce array methods to sum the array elements after multiplying each element by two.  Assign the result to the HTML element with an ID of "sumOfMultiplied"
let sumOfMultiplied = twoTimes.reduce((num1, num2) => num1 + num2, 0);
document.getElementById('sumOfMultiplied').innerText = sumOfMultiplied;