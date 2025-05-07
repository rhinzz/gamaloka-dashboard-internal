const subscribe = {
    labels: ["Jabodetabek", "Bandung", "Medan", "Jateng & DIY", "Jatim", "Bali"],
    data: [34000, 34000, 34000, 34000, 34000, 34000]
}

const unsubscribe = {
    labels: ["Jabodetabek", "Bandung", "Medan", "Jateng & DIY", "Jatim", "Bali"],
    data: [50, 20, 20, 30, 30, 50]
}

const premium = {
    labels: ["Jabodetabek", "Bandung", "Medan", "Jateng & DIY", "Jatim", "Bali"],
    data: [10, 5, 0, 0, 5, 10]
}

const userBehavior = {
    labels: ["Step 1", "Step 2", "Step 3", "Step 4", "Step  5"],
    data: [425225, 400000, 380000, 350000, 345000]
}

var barColors = [
    "#FFD54F",
    "#B36600",
    "#FF8B13",
    "#FFE5CC",
    "#C62828",
    "#EF9A9A"
];

const totalValueSubscribe = subscribe.data.reduce((a, b) => a + b, 0);
const totalValueUnsubscribe = unsubscribe.data.reduce((a, b) => a + b, 0);
const totalValuePremium = premium.data.reduce((a, b) => a + b, 0);


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
        ctx.fillText('Total', width / 2, height / 2 - 10);

        ctx.font = 'bold 24px "Plus Jakarta Sans"';
        ctx.fillStyle = '#000';
        ctx.fillText(options.value, width / 2, height / 2 + 20);

        ctx.restore();
    }
};

const firstChart = document.getElementById("firstChart");
const ulSubscribe = document.getElementById("subscribeChartValue");

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
                value: totalValueSubscribe
            }
        },
        responsive: false
    },
    plugins: [centerTextPlugin]
});

const populateSubscribeUl = () => {
    subscribe.labels.forEach((l, i) => {
        let li = document.createElement("li");
        const labelWrap = document.createElement("span");
        labelWrap.className = "labelWrap";

        const indicator = document.createElement("span");
        indicator.className = "indicator";
        indicator.style.backgroundColor = barColors[i];

        const labelText = document.createTextNode(l);

        labelWrap.appendChild(indicator);
        labelWrap.appendChild(labelText);

        const valueSpan = document.createElement("span");
        valueSpan.className = "value";
        valueSpan.textContent = subscribe.data[i];

        li.appendChild(labelWrap);
        li.appendChild(valueSpan);

        ulSubscribe.appendChild(li);
    })
}

populateSubscribeUl();

const secondChart = document.getElementById("secondChart");
const ulUnsubscribe = document.getElementById("unsubscribeChartValue");

new Chart(secondChart, {
    type: "doughnut",
    data: {
        labels: unsubscribe.labels,
        datasets: [{
            backgroundColor: barColors,
            data: unsubscribe.data
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
                value: totalValueUnsubscribe
            }
        },
        responsive: false
    },
    plugins: [centerTextPlugin]
});

const populateUnsubscribeUl = () => {
    unsubscribe.labels.forEach((l, i) => {
        let li = document.createElement("li");
        const labelWrap = document.createElement("span");
        labelWrap.className = "labelWrap";

        const indicator = document.createElement("span");
        indicator.className = "indicator";
        indicator.style.backgroundColor = barColors[i];

        const labelText = document.createTextNode(l);

        labelWrap.appendChild(indicator);
        labelWrap.appendChild(labelText);

        const valueSpan = document.createElement("span");
        valueSpan.className = "value";
        valueSpan.textContent = unsubscribe.data[i];

        li.appendChild(labelWrap);
        li.appendChild(valueSpan);

        ulUnsubscribe.appendChild(li);
    })
}

populateUnsubscribeUl();

const xValues = ["01/01", "02/01", "03/01", "04/01", "05/01", "06/01", "07/01"];

new Chart("thirdChart", {
    type: "line",
    data: {
        labels: xValues,
        datasets: [{
            data: [567, 438, 321, 789, 654, 210, 980],
            borderColor: "#697586",
            fill: false
        }, {
            data: [234, 789, 120, 456, 890, 321, 678],
            borderColor: "#EF9600",
            fill: false
        }, {
            data: [789, 654, 432, 210, 678, 345, 123],
            borderColor: "#0F6AF5",
            fill: false
        }, {
            data: [432, 210, 876, 543, 321, 987, 654],
            borderColor: "#804C00",
            fill: false
        }, {
            data: [123, 456, 789, 987, 654, 321, 234],
            borderColor: "#EC3D27",
            fill: false
        }, {
            data: [345, 678, 901, 234, 567, 890, 123],
            borderColor: "#15B79E",
            fill: false
        }]
    },
    options: {
        scales: {
            x: {
                ticks: {
                    font: {
                        family: "Plus Jakarta Sans",
                        size: 12
                    }
                }
            },
            y: {
                ticks: {
                    font: {
                        family: "Plus Jakarta Sans",
                        size: 12
                    }
                }
            }
        },
        plugins: {
            legend: {
                display: false
            }
        }
    }
});

const fourthChart = document.getElementById("fourthChart");
const ulPremium = document.getElementById("premiumChartValue");

new Chart(fourthChart, {
    type: "doughnut",
    data: {
        labels: premium.labels,
        datasets: [{
            backgroundColor: barColors,
            data: premium.data
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
                value: totalValuePremium
            }
        },
        responsive: false
    },
    plugins: [centerTextPlugin]
});

const populatePremiumUl = () => {
    premium.labels.forEach((l, i) => {
        let li = document.createElement("li");
        const labelWrap = document.createElement("span");
        labelWrap.className = "labelWrap";

        const indicator = document.createElement("span");
        indicator.className = "indicator";
        indicator.style.backgroundColor = barColors[i];

        const labelText = document.createTextNode(l);

        labelWrap.appendChild(indicator);
        labelWrap.appendChild(labelText);

        const valueSpan = document.createElement("span");
        valueSpan.className = "value";
        valueSpan.textContent = premium.data[i];

        li.appendChild(labelWrap);
        li.appendChild(valueSpan);

        ulPremium.appendChild(li);
    })
}

populatePremiumUl();

const data = {
    labels: userBehavior.labels,
    datasets: [{
        label: 'Users',
        data: userBehavior.data,
        backgroundColor: [
            '#B36600',
            '#E68000',
            '#FF9742',
            '#FFCB99',
            '#FFF4E9'
        ],
        align: 'left',
        borderColor: 'transparent',
        borderWidth: 0
    }]
};

// config 
const config = {
    type: 'funnel',
    data,
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
};

// render init block
const userBehaviorChart = new Chart(
    document.getElementById('userBehaviorChart'),
    config
);
