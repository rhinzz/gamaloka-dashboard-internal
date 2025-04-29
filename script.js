const collapseElement = document.getElementById('settings');
const arrow = collapseElement
    .closest('li')
    .querySelector('.dropdown-arrow');

collapseElement.addEventListener('show.bs.collapse', () => {
    arrow.classList.add('rotate');
});

collapseElement.addEventListener('hide.bs.collapse', () => {
    arrow.classList.remove('rotate');
});