import { processOrgPeriod } from './dataProcessing.js';
import { wholeData, wholeProfileData, wholeStocksValueProfitData} from './dataFetching.js';

export let currOrg = 'AAPL';
export let currPeriod = '5y';

export function displaySummary() {
  const summaryDetail = document.getElementById("stock-summary");
  summaryDetail.textContent = wholeProfileData[currOrg].summary;
}

export function displayStockValueProfit() {
  const PStockName = document.getElementById("stock-name");
  const PStockProfit = document.getElementById("stock-profit");
  const PStockValue = document.getElementById("stock-value");

  PStockName.textContent = currOrg;
  PStockProfit.textContent = wholeStocksValueProfitData[currOrg].profit + '%';
  PStockValue.textContent = wholeStocksValueProfitData[currOrg].bookValue + "$";

  if(PStockProfit.textContent===0)   PStockProfit.classList.add('display-red');
  else  PStockProfit.classList.add('display-green');
}

export function displayAllStockValueProfit() {
  const divStockList = document.querySelector(".stock-list");
  Object.keys(wholeStocksValueProfitData).forEach(key => {
    if (key === '_id') return;

    const stockData = wholeStocksValueProfitData[key];

    const divStockValueProfit = document.createElement('div');
    const BtnStockName = document.createElement('button');
    const PStockProfit = document.createElement('p');
    const PStockValue = document.createElement('p');

    divStockValueProfit.classList.add('all-stock-list');

    BtnStockName.textContent = key;
    PStockProfit.textContent = stockData.profit + '%';
    PStockValue.textContent = stockData.bookValue + '$';

    if (stockData.profit === 0) {
      PStockProfit.classList.add('display-red');
    } else {
      PStockProfit.classList.add('display-green');
    }

    BtnStockName.addEventListener('click', () => {
      updateOrg(key);
    })

    divStockValueProfit.appendChild(BtnStockName);
    divStockValueProfit.appendChild(PStockValue);
    divStockValueProfit.appendChild(PStockProfit);

    divStockList.appendChild(divStockValueProfit);
  });
}

export function updateOrg(org) {
  currOrg = org;
  displaySummary();
  displayStockValueProfit();
  processOrgPeriod(currOrg, currPeriod);
}

export function updatePeriod(period) {
  currPeriod = period;
  console.log(period);
  processOrgPeriod(currOrg, currPeriod);
}
