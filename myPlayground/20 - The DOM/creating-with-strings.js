const item = document.querySelector('.item');
const width = 200;
const src = `https://source.unsplash.com/random/${width}x${width}`;
const alt = 'It better be showing you a puppy!!!';
const myHTML = `
<div class="wrapper">
    <h2>Cute Puppy Dog</h2>
    <img src="${src}" alt="${alt}">
    <p>${alt}</p>
</div>
`;

// turn a string into a DOM element

const myFragment = document.createRange().createContextualFragment(myHTML);
// console.log(myFragment.querySelector('img'));
// console.log(myFragment);

document.body.appendChild(myFragment);
