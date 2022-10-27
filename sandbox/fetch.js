// fetch.js
const url = "https://pokeapi.co/api/v2/pokemon/ditto";
let results = null;
async function getPokemon(url) {
    const response = await fetch(url);
//check to see if the fetch was successful
    if (response.ok) {
    // the API will send us JSON...but we have to convert the response before we can use it
    // .json() also returns a promise...so we await it as well.
    const data = await response.json();
    doStuff(data);
    }
}
function doStuff(data) {
    results = data;
    console.log("first: ", results);
    const ditto = document.querySelector('#ditto');
    ditto.innerHTML = `<li>${results.name}</li>`;
}

const urlList = "https://pokeapi.co/api/v2/pokemon";

async function getPokemonList(url) {
    const respuesta = await fetch(url);
    if (respuesta.ok) {
    // the API will send us JSON...but we have to convert the response before we can use it
    // .json() also returns a promise...so we await it as well.
    const data = await respuesta.json();
    doStuffList(data);
    }
}

function doStuffList(data) {
    console.log(data);
    const outputList = document.querySelector('#outputList');
    const pokeList = data.results;
    pokeList.forEach(pokemon => {
        let li = document.createElement('li');
        li.innerText = pokemon.name;
        outputList.appendChild(li);
    });
}


getPokemon(url);
getPokemonList(urlList);
console.log("second: ", results);

