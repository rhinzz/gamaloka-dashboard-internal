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
var xValues = ["Jabodetabek", "Bandung", "Medan", "Jateng & DIY", "Jatim", "Bali"];
var yValues = [34, 34, 34, 34, 34, 34];
var barColors = [
    "#b91d47",
    "#00aba9",
    "#2b5797",
    "#e8c3b9",
    "#1e7145"
];

new Chart("firstChart", {
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
            text: "Subscriber"
        },
        legend: {
            position: "right"
        }
    },
});

var xValues = ["Jabodetabek", "Bandung", "Medan", "Jateng & DIY", "Jatim", "Bali"];
var yValues = [34, 34, 34, 34, 34, 34];
var barColors = [
    "#b91d47",
    "#00aba9",
    "#2b5797",
    "#e8c3b9",
    "#1e7145"
];

new Chart("secondChart", {
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
            text: "Unsubscriber"
        },
        legend: {
            position: "right"
        }
    }
});