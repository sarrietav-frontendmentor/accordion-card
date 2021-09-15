const accordions = document.querySelectorAll('.accordion');
accordions.forEach((element) => {
  element.addEventListener('click', () => {
    if (element.classList.contains('accordion--open')) {
      element.classList.remove('accordion--open');
    } else {
      element.classList.add('accordion--open');
    }
  });
});
