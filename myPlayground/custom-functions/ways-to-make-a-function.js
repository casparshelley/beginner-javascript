// function doctorize(firstName) {
//         return `Dr. ${firstName}`;
// }

// Anon function
// function (firstName) {
//         return `Dr. ${firstName}`;
// }

// Function expression
// doesn't get hoisted
// const doctorize = function (firstName) {
//         return `Dr. ${firstName}`;
// };

// Arrow Functions
const inchToCM = (inches) => (cm = inches * 2.54);

const add = (a, b = 3) => (total = a + b);

// function makeABaby(firstName, lastName) {
//         const baby = {
//                 name: `${firstName} ${lastName}`,
//                 age: 0,
//         };
//         return baby;
// }

const makeABaby = (firstName, lastName) => ({ name: `${firstName} ${lastName}`, age: 0 });

// IIFE
// Immediately Invoked Function Expression
(function (age) {
        // console.log('Running Anon Function');
        return `You are cool and aged: ${age}`;
})(49);

// Methods

const cdog = {
        name: 'Caspar Shelley',
        // Methods here
        sayHi() {
                console.log(`Hi ${this.name}`);
                return `Hi ${this.name}`;
        },
        yellHi() {
                console.log(`HI ${this.name.toUpperCase()}!!!`);
                return `HI ${this.name.toUpperCase()}!!!`;
        },
        // arrow function
        // different scope for this
        whisperHi: () => {
                console.log(`....heyyyy ${this.name}...`);
                return 'I whispered';
        },
};

// Callback Functions
// Click Callback
const button = document.querySelector('.clickMe');

function handleClick() {
        console.log('Great clicking!');
}

// button.addEventListener('click', handleClick);
button.addEventListener('click', () => {
        console.log('Excellent clicking Paduan!');
});
