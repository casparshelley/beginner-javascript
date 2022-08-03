const { info } = require('console');

const shoppingForm = document.querySelector('.shopping');
const list = document.querySelector('.list');

// Array for all items (state)
let items = [];

function handleSubmit(e) {
  e.preventDefault();
  const name = e.currentTarget.item.value;

  // if empty then don't submit
  if (!name) return;

  // create the item object
  const item = {
    name,
    id: Date.now(),
    complete: false,
  };

  // save the item
  items.push(item);

  // clear the form
  e.currentTarget.reset();
  // e.target.reset(); // also works

  // fire custom event for updated items
  list.dispatchEvent(new CustomEvent('itemsUpdated'));
}

function displayItems() {
  // display the item
  // console.log(items);
  const html = items
    .map(
      (item) => `<li class="shopping-item">
      <input 
        type="checkbox" 
        value="${item.id}"
        ${item.complete ? 'checked' : ''}
        >
      <span class="itemName">${item.name}</span>
      <button 
      aria-label="Remove ${item.name}"
      value="${item.id}"
      >&times;</button>
    </li>`
    )
    .join('');
  // console.log(html);
  list.innerHTML = html;
}

function mirrorToLocalStorage() {
  localStorage.setItem('items', JSON.stringify(items));
}

function restoreFromLocalStorage() {
  const lsItems = JSON.parse(localStorage.getItem('items'));
  if (lsItems.length) {
    items = lsItems;
    list.dispatchEvent(new CustomEvent('itemsUpdated'));
  }
}

function deleteItem(id) {
  // remove this item from items array
  items = items.filter((item) => item.id !== id);
  list.dispatchEvent(new CustomEvent('itemsUpdated'));
}

function markAsComplete(id) {
  // console.log('Marking as complete', id);
  const itemRef = items.find((item) => item.id === id);
  itemRef.complete = !itemRef.complete;
  list.dispatchEvent(new CustomEvent('itemsUpdated'));
}

/// ///////////////
// Event listeners
/// ///////////////

shoppingForm.addEventListener('submit', handleSubmit);

// custom event
list.addEventListener('itemsUpdated', displayItems);
list.addEventListener('itemsUpdated', mirrorToLocalStorage);

// event delegation
// we listen for the click on the list but then delegate the click over to the button if that is what was clicked
list.addEventListener('click', (e) => {
  const id = parseInt(e.target.value);
  // see the difference between target and currentTarget
  // console.log(e.target, e.currentTarget);
  if (e.target.matches('button')) {
    deleteItem(id);
  }
  if (e.target.matches('input[type="checkbox"]')) {
    markAsComplete(id);
  }
});
restoreFromLocalStorage();
