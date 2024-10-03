import { updateChart } from './chart.js';
import { wholeData, wholeProfileData, wholeStocksValueProfitData} from './dataFetching.js';

export function processOrgPeriod(org, period) {
  let stockValue;
  let stockPeriod;

  console.log(org);
  console.log(wholeData);
  console.log(wholeData[org][period]);

  if (wholeData[org][period] !== undefined) {
    stockValue = wholeData[org][period].value;
    stockPeriod = wholeData[org][period].timeStamp;
  }

  let modifiedTimestamps = stockPeriod.map(timestamp => {
    return new Date(timestamp * 1000).toLocaleDateString();
  });

  updateChart(stockValue, modifiedTimestamps);
}
