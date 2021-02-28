var ctx = document.getElementById('myChartSpaceShuttle').getContext('2d');
var myChartSpaceShuttle = new Chart(ctx, {
    type: 'doughnut',
    data: {
        labels: [],
        datasets: [{
            label: ' ',
            data: [50,30,20],
            backgroundColor: [
                '#E56C45',
                '#E45D63',
                '#E3507E',
            ],
            borderColor: [
                '#341D5C',
                '#341D5C',
                '#341D5C'
        ],
            borderWidth: 10
        }]
    },
});

var ctx = document.getElementById('myChartSurroundings').getContext('2d');
var myChartSurroundings = new Chart(ctx, {
    type: 'doughnut',
    data: {
        labels: [],
        datasets: [{
            label: ' ',
            data: [75,25],
            backgroundColor: [
                '#E56C45',
                '#341D5C'
            ],
            borderColor: [
                '#341D5C',
                '#341D5C'
        ],
            borderWidth: 10
        }]
    },
});

var ctx = document.getElementById('myChartStocks').getContext('2d');
var myChartStocks = new Chart(ctx, {
    type: 'doughnut',
    data: {
        labels: [],
        datasets: [{
            label: ' ',
            data: [30,55, 15],
            backgroundColor: [
                '#E56C45',
                '#E45D63',
                '#341D5C'
            ],
            borderColor: [
                '#341D5C',
                '#341D5C',
                '#341D5C'
        ],
            borderWidth: 10
        }]
    },
});