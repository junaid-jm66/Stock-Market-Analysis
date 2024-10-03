import { displaySummary, displayStockValueProfit, displayAllStockValueProfit, updateOrg, updatePeriod } from './stockDisplay.js';
import { processOrgPeriod } from './dataProcessing.js';

export let wholeData;
export let wholeProfileData;
export let wholeStocksValueProfitData;

export async function getStockData() {
  try {
    const response = await fetch("https://stocks3.onrender.com/api/stocks/getstocksdata");
    const data = await response.json();
    wholeData = data.stocksData[0];

    processOrgPeriod('AAPL', '5y');
  } catch (error) {
    console.error("some error", error);
  }
}

export async function getStockProfileData() {
  try {
    const response = await fetch("https://stocks3.onrender.com/api/stocks/getstocksprofiledata");
    const data = await response.json();
    wholeProfileData = data.stocksProfileData[0];

    displaySummary(wholeProfileData);
  } catch (error) {
    console.error("some error!", error);
  }
}

export async function getStockStatsData() {
  try {
    const response = await fetch("https://stocks3.onrender.com/api/stocks/getstockstatsdata");
    const data = await response.json();
    wholeStocksValueProfitData = data.stocksStatsData[0];

    displayStockValueProfit(wholeStocksValueProfitData);
    displayAllStockValueProfit(wholeStocksValueProfitData);
  } catch (error) {
    console.error("some error!", error);
  }
}
