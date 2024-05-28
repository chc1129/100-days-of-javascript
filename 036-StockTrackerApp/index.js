const symbolInput = document.querySelector('#symbol');
const stockList = document.querySelector('#stock-list');

// Function to fetch and display the top 10 stocks
function fetchTopStocks() {
    // Fetch data from api
    fetch('https://www.alphavantage.co/query?function=SECTOR&apikey=YOUR_API_KEY').then(response => response.json()).then(data => {
        const sotcks = data['Rank A: Real-Time Performance'];
        let html = '';
        // Loop through the stocks and generate html for each stock
        for (let i = 0; i < 10; i++) {
            const symbol = Object.keys(stocks)[i];
            const change = sotcks[symbol];
            const changeColor = parseFloat(change) >= 0 ? 'green' : 'red';
            html += `
            <li>
                <span class="symble">${symbol}</span>
                <span class="change" style="color: ${changeColor}">${change}</span>
            </li>
            `;
        }

        // Update stock list container
        stockList.innerHTML = html;
    }).catch(error => console.error(error));
}






