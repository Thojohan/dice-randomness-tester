import gammainc from "@stdlib/math-base-special-gammainc";

export function pValueGenerator(results: number[][], expected: number[]) {
  console.log("in pValueGenerator");
  const pValues = results.map((obs) => {
    function chiSquareTest(obs: number[], exp: number[]): number {
      let chiSquare = 0;
      for (let i = 0; i < obs.length; i++) {
        if (exp[i] === 0) {
          throw new Error("Expected frequency cannot be zero.");
        }
        chiSquare += Math.pow(obs[i] - exp[i], 2) / exp[i];
      }
      return chiSquare;
    }

    const chiSquare = chiSquareTest(obs, expected);

    function pValue(chiSquare: number, df: number): number {
      const k = df / 2;
      const x = chiSquare / 2;
      const gammaInc = gammainc(x, k, true);
      return 1 - gammaInc;
    }
    const df = obs.length - 1;
    const p = pValue(chiSquare, df);
    return { pValue: p, chiSquare: chiSquare };
  });
  return pValues;
}

export function getRandomIntInclusive(min: number, max: number) {
  const randomBuffer = new Uint32Array(1);
  23;
  crypto.getRandomValues(randomBuffer);

  const randomNumber = randomBuffer[0] / (0xffffffff + 1);

  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(randomNumber * (max - min + 1)) + min;
}

export function averaging(resArray: number[][], numberOfTests: number) {
  return resArray.reduce((acc, el) => {
    return [
      ...el.map((el, i) => {
        const avgNumb: number = +el / numberOfTests;
        if (acc[i]) return acc[i] + avgNumb;
        return avgNumb;
      }),
    ];
  }, [] as number[]);
}

export function generateChartData(averageThrows: number[], inputDice: number) {
  const averagePercent = averageThrows.map((el) => (el / inputDice) * 100);
  return averageThrows.map((el, i) => {
    return { absolute: el, percent: averagePercent[i], dataName: i + 1 };
  }, []);
}

export function avgPvalueRounded(
  pValueArray: { pValue: number; chiSquare: number }[]
) {
  const avg = Number(
    (
      pValueArray.reduce((acc, el) => acc + el.pValue, 0) / pValueArray.length
    ).toFixed(15)
  );
  const pValue = Math.round(avg * 1e8) / 1e8;
  const chiSquare =
    pValueArray.reduce((acc, el) => acc + el.chiSquare, 0) / pValueArray.length;

  return { pValue, chiSquare };
}

export function colourPicker(avgValue: number, Value: number) {
  if (Math.abs(avgValue - Value) > (avgValue / 100) * 25) return "red";
  if (
    Math.abs(avgValue - Value) < (avgValue / 100) * 25 &&
    Math.abs(avgValue - Value) > (avgValue / 100) * 10
  )
    return "orange";
  if (
    Math.abs(avgValue - Value) < (avgValue / 100) * 10 &&
    Math.abs(avgValue - Value) > (avgValue / 100) * 5
  )
    return "yellow";
  if (
    Math.abs(avgValue - Value) < (avgValue / 100) * 5 &&
    Math.abs(avgValue - Value) > (avgValue / 100) * 1
  )
    return "lightgreen";
  return "green";
}

export function randomResults(
  batchCount: number,
  rollCount: number,
  rangeCount: number,
  cheatDice: number = 0,
  method: string = ""
) {
  console.log("beginning randomResult");
  const resArray = new Array(batchCount).fill(undefined).map((_el) => {
    const inputArray = new Array(rollCount).fill(null).map((_el) => {
      if (method === "crypto") return getRandomIntInclusive(1, rangeCount);
      return Math.floor(Math.random() * rangeCount + 1);
    });

    const cheatModifiedArray = inputArray.map((el) => {
      if (cheatDice === 0) return el;
      const random = Math.random() * 100;
      if (el === rangeCount) return el;
      if (random > 100 - cheatDice) return rangeCount;
      return el;
    });

    const absolute = new Array(rangeCount)
      .fill(undefined)
      .map(
        (_el, i) => cheatModifiedArray.filter((value) => value === i + 1).length
      );
    return absolute;
  });
  return resArray;
}
