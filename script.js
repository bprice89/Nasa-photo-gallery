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

function updateDom() {
    resultsArray.forEach((result) => {
        const card = document.createElement('div');      //using results array and populating new Html elements, created div for picture gallery
        card.classList.add('card');                  //add class to div element
       
        const link = document.createElement('a');          //create anchor tag for picture
        link.href = result.hdurl;                    //add URL to link
        link.title = 'View Full Image';
        link.target = '_blank';                 //allow image to open in new tab
        
        const image = document.createElement('img');          //create img element and add url to it
        image.src = result.url;
        image.alt = "Nasa Picture of the day"
        image.loading = 'lazy';                     //loads picutes slow
        image.classList.add('card-img-top');
        
        const cardBody = document.createElement('div');        //card body  
        cardBody.classList.add('card-body');

        const cardTitle = document.createElement('h5');
        cardTitle.classList.add('card-title');
        cardTitle.textContent = result.title;

        const saveText = document.createElement('p');         //add ability to save to favorites
        saveText.classList.add('clickable');
        saveText.textContent = 'Add To Favorites';

        const cardText = document.createElement('p');
        cardText.textContent = result.explanation;        //add image explantation

        const footer = document.createElement('small');
        footer.classList.add('text-muted');

        const date = document.createElement('strong');
        date.textContent = result.date;

        const copyrightResult = result.copyright === undefined ? '' : result.copyright;      //used turnary to create if statement if copyright is undefined to leave blank
        const copyright = document.createElement('span');
        copyright.textContent = `${copyrightResult}`;

        footer.append(date, copyright);                //append date and copyright to the footer
        cardBody.append(cardTitle, saveText, cardText, footer);
        link.appendChild(image);
        card.append(link, cardBody);     //append everything to card element
        imagesConatiner.appendChild(card);
    });
}

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