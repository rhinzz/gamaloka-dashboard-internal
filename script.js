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
    "#FFD54F",
    "#B36600",
    "#FF8B13",
    "#FFE5CC",
    "#C62828",
    "#EF9A9A"
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
        legend: {
            display: false
        },
        responsive: false,
    }
});

