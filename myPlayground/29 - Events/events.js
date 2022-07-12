const butts = document.querySelector('.butts');
const coolButts = document.querySelector('.coolButts');

function handleClick() {
        console.log('🐛 It got clicked!!');
}

butts.addEventListener('click', handleClick);
coolButts.addEventListener('click', handleClick);

// butts.removeEventListener('click', handleClick);

// Listen on multiple items

const buyButtons = document.querySelectorAll('button.buy');

function handleBuyButtonClick(e) {
        console.log('you clicked a buttoon');
        // e = event
        // const button = e.target; // wes
        // console.log(`Purchase!! ${this.textContent}`);
        // console.log(parseFloat(e.target.dataset.price));
        console.log(e.target); // element that got clicked
        console.log(e.currentTarget); // element that fired the e
        console.log(e.target === e.currentTarget); // often the same
        // stop e from bubbling up.
        e.stopPropagation();
}

buyButtons.forEach((buyButton) => {
        buyButton.addEventListener('click', handleBuyButtonClick);
});

// propagation is when multiple events are triggered by the same interaction
window.addEventListener(
        'click',
        (event) => {
                console.log('You clicked the window');
                console.log(event.target);
        },
        { capture: true }
);

const photoEl = document.querySelector('.photo');

photoEl.addEventListener('mouseenter', (e) => {
        console.count(e.currentTarget);
        console.log(this); // wes don't use for event listeners
});
