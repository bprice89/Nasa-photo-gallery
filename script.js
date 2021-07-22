const resultsNav =  document.getElementById('resultsNav');
const favoritesNav = document.getElementById('favoritesNav');
const imagesConatiner = document.querySelector('.images-container');
const saveConfirmed = document.querySelector('.save-confirmed');
const loader = document.querySelector('.loader');

// NASA Api
const count = 10;    // gives me a count of 10 pictures at a time
const apiKey = 'DEMO_KEY';
const apiUrl = `https://api.nasa.gov/planetary/apod?api_key=${apiKey}&count=${count}`;      //Nasa ApI with demo key and count

let resultsArray =[];


// Fetch 10 images from API using async
async function getNasaPictures() {
    try {
        const response = await fetch(apiUrl);
        resultsArray = await response.json();     //converts API response into json form
        console.log(resultsArray);
        updateDom();
    } catch (error) {               // catch error if fetch doesnt work
        console.log(error)
    }
}


getNasaPictures();