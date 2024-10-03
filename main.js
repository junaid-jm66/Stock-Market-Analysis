import { getStockData, getStockProfileData, getStockStatsData } from './dataFetching.js';
import { updatePeriod } from './stockDisplay.js';

document.addEventListener("DOMContentLoaded", function() {
  getStockData();
  getStockProfileData();
  getStockStatsData();
});

window.updatePeriod = updatePeriod;
