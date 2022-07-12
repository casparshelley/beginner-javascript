const cdog = document.querySelector('.cdog');

// console.log(cdog.children);
// console.log(cdog.firstElementChild);
// console.log(cdog.lastElementChild);
// console.log(cdog.previousElementSibling);
// console.log(cdog.nextElementSibling);
// console.log(cdog.parentElement);

const p = document.createElement('p');
p.textContent = 'I will be vanquished';
document.body.appendChild(p);
p.remove();
console.log(p);
