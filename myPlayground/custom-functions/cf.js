// Function definition
function calculateBill(billTotal = 100, taxRate = 0.13, tipRate = 0.2) {
        // Function body
        console.log('Running calculate billTotal');
        console.log(billTotal, taxRate);
        const total = billTotal + billTotal * taxRate + billTotal * tipRate;
        console.log(total);
        return Math.ceil(total);
}

// Function Call
// console.log(`The function says you need to pay $${calculateBill()}`);
// console.log(`You need to pay $${calculateBill(200, 0.13)} for the second meal`);
// console.log(`In Ireland it would cost $${calculateBill(200, 0.21)} for the same meal`);

function sayHiTo(firstName = `You`) {
        return `Hello ${firstName}`;
}

// const greeting = sayHiTo('Cdog');
// console.log(greeting);

// const myTotal3 = calculateBill(20 + 25 + 13, 0.15);

function doctorize(name = 'Doom') {
        return `Dr. ${name}`;
}

function yell(name = 'Silly Goose') {
        return `HEY ${name.toUpperCase()}!!!`;
}

// console.log(yell(doctorize('Caspar')));
console.log(`${yell(doctorize('Caspar'))} You need to pay ${calculateBill(100)}`);
