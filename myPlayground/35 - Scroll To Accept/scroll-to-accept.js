function scrollToAccept() {
  // good practice to use a function that breaks if selector is not present
  const terms = document.querySelector('.terms-and-conditions');

  if (!terms) {
    return;
  }

  terms.addEventListener('scroll', (e) => {
    console.log(e.currentTarget.scrollTop);
    console.log(e.currentTarget.scrollHeight);
  });
}

scrollToAccept();
