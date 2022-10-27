/* Lesson 2 */

/* VARIABLES */

// Step 1: declare and instantiate a variable to hold your name
let myName = 'Luis Alfredo Vega';

// Step 2: place the value of the name variable into the HTML file (hint: document.querySelector())
document.getElementById('name').innerText = myName;

// Step 3: declare and instantiate a variable to hold the current year
let currentYear = new Date();

// Step 4: place the value of the current year variable into the HTML file
document.getElementById('year').innerText = currentYear.getFullYear();

// Step 5: declare and instantiate a variable to hold the name of your picture
let myPic = document.querySelector('img');


// Step 6: copy your image into the "images" folder


// Step 7: place the value of the picture variable into the HTML file (hint: document.querySelector().setAttribute())

myPic.setAttribute('src', 'images/myPic.jpg');
myPic.setAttribute('alt', 'This is my profile picture')


/* ARRAYS */

// Step 1: declare and instantiate an array variable to hold your favorite foods

let data = ['hamburger', 'pizza', 'lasagna', 'spaghetti'];
// Step 2: place the values of the favorite foods variable into the HTML file
let list = document.getElementById('food');

function printArray(){
  list.innerHTML = '';
  data.forEach((item)=>{
    let li = document.createElement("li");
    li.innerText = item;
    list.appendChild(li);
  })
}

printArray();
// Step 3: declare and instantiate a variable to hold another favorite food
let moreFood = 'arepa';

// Step 4: add the variable holding another favorite food to the favorite food array
data.push(moreFood);

// Step 5: repeat Step 2
printArray();
// Step 6: remove the first element in the favorite foods array
data.shift();

// Step 7: repeat Step 2
printArray();
// Step 8: remove the last element in the favorite foods array
data.pop();

// Step 7: repeat Step 2
printArray();

