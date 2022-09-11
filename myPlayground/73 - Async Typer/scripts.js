function wait(ms = 0) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}

function getRandomBetween(min = 20, max = 150, randomNumber = Math.random()) {
  return Math.floor(randomNumber * (max - min) + min);
}

// // Method 1 async for of loop
// async function draw(el) {
//   const text = el.textContent;
//   let soFar = '';
//   for (const letter of text) {
//     soFar += letter;
//     el.textContent = soFar;

//     // wait for some time
//     console.log(el.dataset);
//     const { typeMin, typeMax } = el.dataset;
//     const timeToWait = getRandomBetween(typeMin, typeMax);
//     await wait(timeToWait);
//   }
// }

// Method 2 recursion
function draw(el) {
  let index = 1;
  const text = el.textContent;
  const { typeMin, typeMax } = el.dataset;
  async function drawLetter() {
    el.textContent = text.slice(0, index);
    index += 1;
    // wait for some time
    const timeToWait = getRandomBetween(typeMin, typeMax);
    await wait(timeToWait);
    // exit condition
    if (index <= text.length) {
      drawLetter();
    }
  }
  // when this function draw runs, kick off draw letter
  drawLetter();
}

document.querySelectorAll('[data-type]').forEach(draw);
