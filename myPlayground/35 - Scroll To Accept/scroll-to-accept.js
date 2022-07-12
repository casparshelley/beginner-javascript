/* eslint-disable no-console */
function scrollToAccept() {
  // good practice to use a function that breaks if selector is not present

  const terms = document.querySelector('.terms-and-conditions');
  const watch = document.querySelector('.watch');
  const button = document.querySelector('.accept');

  if (!terms) {
    return;
  }

  function obCallBack(payload) {
    // console.log(payload[0].intersectionRatio);
    if (payload[0].intersectionRatio === 1) {
      button.disabled = false;

      // stop observing the button
      ob.unobserve(terms.lastElementChild);
    }
  }

  const ob = new IntersectionObserver(obCallBack, {
    root: terms,
    threshold: 1,
  });

  ob.observe(terms.lastElementChild);

  terms.addEventListener('scroll', (e) => {
    // console.log(e.currentTarget.scrollTop);
    // console.log(e.currentTarget.scrollHeight);
  });
}

scrollToAccept();
