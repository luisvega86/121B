/* Lesson 4 */

/* DATA */

// Step 1: Declare a new variable to hold information about yourself
var aboutMe = {};

// Step 2: Inside of the object, add a property named name with a value of your name as a string
aboutMe.name = 'Luis Alfredo Vega';
// Step 3: Add another property named photo with a value of the image path and name (used in Task 2) as a string
aboutMe.photo = 'images/myPic.jpg';
// Step 4: Add another property named favoriteFoods with a value of an array of your favorite foods as strings ( hint: [] )
aboutMe.favoriteFoods = ['pizza','hamburger','asado','sushi'];
// Step 5: Add another property named hobbies with a value of an array of your hobbies as strings
aboutMe.hobbies = ['videogames','movies','music'];
// Step 6: Add another property named placesLived with a value of an empty array
aboutMe.placesLived = [];
// Step 7: Inside of the empty array above, add a new object with two properties: place and length and values of an empty string
let places = {
    place : '',
    length : ''
};
aboutMe.placesLived.push(places);

// Step 8: For each property, add appropriate values as strings
places.place = 'Venezuela';
places.length = 23;

// Step 9: Add additional objects with the same properties for each place you've lived
let morePlaces = {
    place : 'Russia',
    length : 7
};
aboutMe.placesLived.push(morePlaces);
let oneMorePlaces = {
    place : 'Argentina',
    length : 6
};
aboutMe.placesLived.push(oneMorePlaces);


/* OUTPUT */

// Step 1: Assign the value of the name property (of the object declared above) to the HTML <span> element with an ID of name
document.getElementById('name').innerText = aboutMe.name;
// Step 2: Assign the value of the photo property as the src attribute of the HTML <img> element with an ID of photo
document.getElementById('photo').setAttribute('src', aboutMe.photo);
// Step 3: Assign the value of the name property as the alt attribute of the HTML <img> element with an ID of photo
document.getElementById('photo').setAttribute('alt', aboutMe.name);
// Step 4: For each favorite food in the favoriteFoods property, create an HTML <li> element and place its value in the <li> element
function printArray(array, html){
    let list = document.getElementById(html);
    let data = aboutMe[array];
    list.innerHTML = '';
    data.forEach((item)=>{
        let li = document.createElement('li');
        li.innerText = item;
        list.appendChild(li);
    })
}

printArray('favoriteFoods', 'favorite-foods');

// Step 5: Append the <li> elements created above as children of the HTML <ul> element with an ID of favorite-foods

// Step 6: Repeat Step 4 for each hobby in the hobbies property

// Step 7: Repeat Step 5 using the HTML <ul> element with an ID of hobbies
printArray('hobbies', 'hobbies')
// Step 8: For each object in the <em>placesLived</em> property:
let list = document.getElementById('places-lived');

aboutMe.placesLived.forEach((place) => {
    let dt = document.createElement('dt');
    dt.innerText = place.place;
    let dd = document.createElement('dd');
    dd.innerText = place.length;
    list.appendChild(dt);
    list.appendChild(dd);
})
// - Create an HTML <dt> element and put its place property in the <dt> element
// - Create an HTML <dd> element and put its length property in the <dd> element

// Step 9: Append the HTML <dt> and <dd> elements created above to the HTML <dl> element with an ID of places-lived
