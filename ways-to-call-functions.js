/* eslint-disable */

function multiplyByFive(a) {
    const total = a * 5;
    return total
}

const multiplyByFiveArrow = a => a * 5;

// console.log(multiplyByFive(3));
// console.log(multiplyByFiveArrow(3));

// arrow function with a default value

function add(a, b = 3) {
    const total = a + b;
    return total
}

const addArrow = (a, b = 3) => a + b;

// console.log(add(3, 2));
// console.log(addArrow(3, 2));

// arrow function with an object in it

function makeABaby(first, last) {
    const baby = {
        name: `${first} ${last}`,
        age: 0
    }
    return baby;
}

const makeABabyArrow = (first, last) => baby = { name: `${first} ${last}`, age: 0 };

// console.log(makeABaby('Katti', 'June'));
// console.log(makeABabyArrow('Caspar', 'John'));

// Method

// Object
const cdog = {
    name: 'Caspar John Shelley',
    // Method is a function inside an object
    sayHi: function(nameTarget = this.name) {
        console.log(`Hey ${nameTarget}`);
    },
    // Shorthand Method
    yellHi(nameTarget = this.name) {
        console.log(`HEY ${nameTarget}!!!`);
    },
    // arrow function
    squeakHi: (nameTarget) => { // arrow functions don't access this in the same way
        console.log(`Psss ${nameTarget} I'm a little quiet mouse...`);
    }
}

// console.log(cdog);
// cdog.sayHi();
// cdog.sayHi('Katti');
// cdog.yellHi('Achoo')
// cdog.squeakHi(); 
// cdog.squeakHi('Jorge');

// Callback functions
// Click callback

const button = document.querySelector('.click-me');
// console.log(button);

function handleClick() {
    console.log('I like the way you click.');
}
button.addEventListener('click', handleClick);

// Timer callback
// can use anonymouse or arrow functions too.
setTimeout(cdog.yellHi, 1000);