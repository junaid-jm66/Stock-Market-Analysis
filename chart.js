let myChart;

export function updateChart(stockValue, stockPeriod) {
  const ctx = document.getElementById('myChart').getContext('2d');
  if (myChart) {
    myChart.destroy();
  }

  myChart = new Chart(ctx, {
    type: 'line',
    data: {
      labels: stockPeriod,
      datasets: [{
        label: 'Stock Prices',
        data: stockValue,
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1
      }]
    },
    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  });
}
