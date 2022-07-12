const myParagraph = document.createElement('p');
myParagraph.textContent = 'I am a paragraph';
myParagraph.classList.add('special');
console.log(myParagraph);

const myImage = document.createElement('img');
myImage.src = 'https://source.unsplash.com/random/100x100';
myImage.alt = 'a randomly inserted image created by JS';
console.log(myImage);

const myDiv = document.createElement('div');
myDiv.classList.add('wrapper');
console.log(myDiv);

myDiv.appendChild(myParagraph);
myDiv.appendChild(myImage);
document.body.appendChild(myDiv);

// We need to add a heading.
const heading = document.createElement('h2');
heading.textContent = 'this is cool';
myDiv.insertAdjacentElement('afterbegin', heading);

// exercise
const myList = document.createElement('ul');
const myListItem1 = document.createElement('li');
const myListItem2 = document.createElement('li');
const myListItem3 = document.createElement('li');
const myListItem4 = document.createElement('li');
const myListItem5 = document.createElement('li');
myListItem1.textContent = 'One';
myList.appendChild(myListItem1);
myListItem2.textContent = 'Two';
myList.appendChild(myListItem2);
myListItem3.textContent = 'Three';
myList.appendChild(myListItem3);
myListItem4.textContent = 'Four';
myList.appendChild(myListItem4);
myListItem5.textContent = 'Five';
myList.appendChild(myListItem5);
myDiv.insertAdjacentElement('beforebegin', myList);
