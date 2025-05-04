// Arrow Rotate
const collapseElement = document.getElementById('settings');
const arrow = collapseElement.closest('li').querySelector('.dropdown-arrow');

collapseElement.addEventListener('show.bs.collapse', () => {
    arrow.classList.add('rotate');
});

collapseElement.addEventListener('hide.bs.collapse', () => {
    arrow.classList.remove('rotate');
});

const subscribe = {
    labels: ["Jabodetabek", "Bandung", "Medan", "Jateng & DIY", "Jatim", "Bali"],
    data: [34000, 34000, 34000, 34000, 34000, 34000]
}

var barColors = [
    "#FFD54F",
    "#B36600",
    "#FF8B13",
    "#FFE5CC",
    "#C62828",
    "#EF9A9A"
];

const totalValue = subscribe.data.reduce((a, b) => a + b, 0);

// Custom plugin for center text with total and value
const centerTextPlugin = {
    id: 'centerText',
    beforeDraw(chart, args, options) {
        const { width, height, ctx } = chart;
        ctx.save();

        ctx.font = 'bold 17px "Plus Jakarta Sans"';
        ctx.fillStyle = '#5C5E63';
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.fillText('Total Subs', width / 2, height / 2 - 10);

        ctx.font = 'bold 24px "Plus Jakarta Sans"';
        ctx.fillStyle = '#000';
        ctx.fillText(options.value, width / 2, height / 2 + 20);

        ctx.restore();
    }
};

const firstChart = document.getElementById("firstChart");

new Chart(firstChart, {
    type: "doughnut",
    data: {
        labels: subscribe.labels,
        datasets: [{
            backgroundColor: barColors,
            data: subscribe.data
        }]
    },
    options: {
        borderWidth: 5,
        borderRadius: 10,
        cutout: '60%',
        plugins: {
            legend: {
                display: false
            },
            centerText: {
                value: totalValue
            }
        },
        responsive: false
    },
    plugins: [centerTextPlugin]
});
