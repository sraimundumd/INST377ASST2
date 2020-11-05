const { data } = require("cypress/types/jquery");

/** Have to create an endpoint */
const endpoint = 'https://data.princegeorgescountymd.gov/resource/umjn-t2iz.json'

const eat = [];

fetch(endpoint).then(blob => blob.json()).then(data => eat.push(...data))

function matchfinder(words, eat){
    return eat.filter(place => { 
        const regex = new RegExp(words, 'gi');
        return place.name.match(regex) || place.category.match(regex)
    });

function displayMatch() {
    console.log(this.value);
}
const searchInput = document.querySelector('.textinput');
const suggestions = document.querySelector('.suggestions');

searchInput.addEventListener('change', matchfinder);

}