// Make a div
const myDiv = document.createElement('div');

// add a class of wrapper to it
myDiv.classList.add('wrapper');

// put it into the body
// const myBody = document.querySelector('body');
// myBody.insertAdjacentElement('afterbegin', myDiv);
document.body.appendChild(myDiv); // wes

// make an unordered list
const myList = document.createElement('ul');

// add three list items with the words "one, two, three" in them
const li1 = document.createElement('li');
const li2 = document.createElement('li');
const li3 = document.createElement('li');
li1.textContent = 'one';
li2.textContent = 'two';
li3.textContent = 'three';
myList.appendChild(li1);
myList.appendChild(li2);
myList.appendChild(li3);

// put that list into the above wrapper
// myDiv.insertAdjacentElement('afterbegin', myList);
myDiv.appendChild(myList);
// myDiv.innerHTML = myList; // wes but he constructed it differently

// create an image
const myImg = document.createElement('img');

// set the source to an image
myImg.src = 'https://source.unsplash.com/random/100x100';

// set the width to 250
myImg.width = 250;
myImg.height = myImg.width;
myImg.src = `https://source.unsplash.com/random/${myImg.width}x${myImg.width}`;

// add a class of cute
myImg.classList.add('cute');

// add an alt of Cute Puppy
myImg.alt = 'Cute Puppy';

// Append that image to the wrapper
myDiv.appendChild(myImg);

// with HTML string, make a div, with two paragraphs inside of it
myHTML = `
<div class='top-div'>
    <p>${myImg.alt}</p>
    <p>Is a way of life</p>
</div>
`;

// put this div before the unordered list from above
myDiv.insertAdjacentHTML('afterbegin', myHTML);

// add a class to the second paragraph called warning
const topDivP = document.querySelector('.top-div');
// const p2 = topDivP.children[1];
// p2.classList.add('warning');
topDivP.children[1].classList.add('warning'); // wes

// remove the first paragraph
topDivP.children[0].remove();

// create a function called generatePlayerCard that takes in three arguments: name, age, and height
function generatePlayerCard(playerName, playerAge, playerHeight) {
        const dogYears = playerAge * 7;
        const htmlOutput = `
        <div class="playerCard wrapper">
            <h2>${playerName} — ${playerAge}</h2>
            <p>There height is ${playerHeight}cm and they are ${playerAge} years old. In Dog years this person would be ${dogYears}. That would be a tall dog!</p>
        </div>        
        `;
        return htmlOutput;
}

// have that function return html that looks like this:
// {
/* <div class="playerCard">
  <h2>NAME — AGE</h2>
  <p>They are HEIGHT and AGE years old. In Dog years this person would be AGEINDOGYEARS. That would be a tall dog!</p>
</div> */
// }

// make a new div with a class of cards
const cardDiv = document.createElement('div');
cardDiv.classList.add('cards');

// make 4 player cards using generatePlayerCard
const card1 = generatePlayerCard('cdog', 49, 181);
const card2 = generatePlayerCard('katti', 49, 151);
const card3 = generatePlayerCard('jorge', 25, 20);
const card4 = generatePlayerCard('moxie', 25, 18);

// append those cards to the div
cardDiv.insertAdjacentHTML('afterbegin', card1);
cardDiv.insertAdjacentHTML('afterbegin', card2);
cardDiv.insertAdjacentHTML('afterbegin', card3);
cardDiv.insertAdjacentHTML('afterbegin', card4);

// put the div into the DOM just before the wrapper element
myDiv.insertAdjacentElement('beforebegin', cardDiv);

// Bonus, put a delete Button on each card so when you click it, the whole card is removed
const cards = document.querySelectorAll('.playerCard');
cards.forEach((card) => {
        const delButton = `
        <button class='delete' type='button'>DEL X</button>
    `;
        card.insertAdjacentHTML('afterbegin', delButton);
});

// select all the buttons!
const buttons = document.querySelectorAll('.delete');

// make out delete function
function deleteCard() {
        // this.parentElement.remove();
        this.closest('.playerCard').remove(); // wes
}

// loop over them and attach a listener
buttons.forEach((button) => {
        button.addEventListener('click', deleteCard);
});
