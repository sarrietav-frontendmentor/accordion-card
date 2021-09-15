const accordions = document.querySelectorAll('.accordion');

accordions.forEach((element) => {
  element.addEventListener('click', () => {
    if (element.classList.contains('accordion--open')) {
      closeAccordion(element);
    } else {
      closeAccordions();
      openAccordion(element);
    }
  });
});

function openAccordion(accordion) {
  accordion.classList.add('accordion--open');
}

function closeAccordion(accordion) {
  accordion.classList.remove('accordion--open');
}

function closeAccordions() {
  accordions.forEach((element) => {
    closeAccordion(element);
  });
}
