document.addEventListener('DOMContentLoaded', (event) => {
    var ctx1 = document.getElementById('invoicesChart').getContext('2d');
    var invoicesChart = new Chart(ctx1, {
        type: 'line',
        data: {
            labels: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
            datasets: [{
                label: 'This week',
                backgroundColor: 'rgba(0, 123, 255, 0.1)',
                borderColor: '#007bff',
                data: [12000, 15000, 8000, 18000, 25000, 22000, 30000]
            }, {
                label: 'Last week',
                backgroundColor: 'rgba(255, 99, 132, 0.1)',
                borderColor: '#ff6384',
                data: [10000, 14000, 12000, 16000, 20000, 18000, 25000]
            }]
        },
        options: {}
    });

    var ctx2 = document.getElementById('salesForecastChart').getContext('2d');
    var salesForecastChart = new Chart(ctx2, {
        type: 'bar',
        data: {
            labels: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
            datasets: [{
                label: 'Weighted',
                backgroundColor: '#6f42c1',
                data: [5000, 7000, 8000, 10000, 11000, 9000, 12000]
            }, {
                label: 'Won',
                backgroundColor: '#28a745',
                data: [3000, 4000, 5000, 6000, 7000, 5000, 8000]
            }]
        },
        options: {}
    });
});
