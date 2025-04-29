// Arrow Rotate
const collapseElement = document.getElementById('settings');
const arrow = collapseElement.closest('li').querySelector('.dropdown-arrow');

collapseElement.addEventListener('show.bs.collapse', () => {
    arrow.classList.add('rotate');
});

collapseElement.addEventListener('hide.bs.collapse', () => {
    arrow.classList.remove('rotate');
});

// Sample Donut Chart
var yValues = [55, 49, 44, 24, 15];
var barColors = [
    "#b91d47",
    "#00aba9",
    "#2b5797",
    "#e8c3b9",
    "#1e7145"
];

new Chart("myChart", {
    type: "doughnut",
    data: {
        labels: xValues,
        datasets: [{
            backgroundColor: barColors,
            data: yValues
        }]
    },
    options: {
        title: {
            display: true,
            text: "World Wide Wine Production 2018"
        }
    }
});