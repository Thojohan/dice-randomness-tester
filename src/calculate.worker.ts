import {
  averaging,
  generateChartData,
  randomResults,
} from "./utilityFunctions";

onmessage = function (event) {
  const { batchCount, rollCount, rangeCount, cheatDice } = event.data;
  const resArray = randomResults(batchCount, rollCount, rangeCount, cheatDice);
  const cryptographicResArray = randomResults(
    batchCount,
    rollCount,
    rangeCount,
    cheatDice,
    "crypto"
  );

  const averageThrows = averaging(resArray, batchCount);
  const chartData = generateChartData(averageThrows, rollCount);
  const cryptoAverageThrows = averaging(cryptographicResArray, batchCount);
  const cryptoChartData = generateChartData(cryptoAverageThrows, rollCount);
  const expected = averageThrows.map((_el) => rollCount / rangeCount);
  postMessage({
    resArray,
    cryptographicResArray,
    chartData,
    cryptoChartData,
    expected,
  });
};
