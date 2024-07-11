import { useState } from "react";
import styled from "styled-components";
import InputForm from "./InputForm";
import { avgPvalueRounded, pValueGenerator } from "./utilityFunctions";
import Spinner from "./Spinner";
import Footer from "./Footer";
import Heading from "./Heading";
import SideSection from "./SideSection";

const Div = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  font-family: "Roboto", sans-serif;
`;

const Section = styled.section`
  display: flex;
  justify-content: space-around;

  @media (max-width: 1000px) {
    flex-direction: column;
  }
`;

export type ChartData =
  | {
      absolute: number;
      percent: number;
      dataName: number;
    }[]
  | [];

export type Results = {
  regResults: number[][];
  cryptoResults: number[][];
};

export type AvgPandChi = { pValue: number; chiSquare: number };

function App() {
  const [results, setResults] = useState<Results>({
    regResults: [],
    cryptoResults: [],
  });
  const [chartData, setChartData] = useState<{
    regChartData: ChartData;
    cryptoChartData: ChartData;
  }>({
    regChartData: [],
    cryptoChartData: [],
  });

  console.dir(results);

  const [isRolling, setIsRolling] = useState<boolean>(false);
  const [expected, setExpected] = useState<number[]>([]);
  const pValuesRegular = pValueGenerator(results.regResults, expected);
  const pValuesCrypto = pValueGenerator(results.cryptoResults, expected);
  const avgPandChiRegular: AvgPandChi = avgPvalueRounded(pValuesRegular);
  const avgPandChiCrypto: AvgPandChi = avgPvalueRounded(pValuesCrypto);

  return (
    <Div>
      <Heading />
      <InputForm
        setResults={setResults}
        setChartData={setChartData}
        setExpected={setExpected}
        setIsRolling={setIsRolling}
        results={results}
        isRolling={isRolling}
      />
      {isRolling && <Spinner />}
      {!isRolling && results.regResults?.length > 0 && (
        <Section>
          <SideSection
            chartData={chartData.regChartData}
            avgPandChi={avgPandChiRegular}
            expected={expected}
          >
            Standard Random Method
          </SideSection>
          <SideSection
            chartData={chartData.cryptoChartData}
            avgPandChi={avgPandChiCrypto}
            expected={expected}
          >
            Cryptographicly Secure Method
          </SideSection>
        </Section>
      )}
      <Footer />
    </Div>
  );
}

export default App;
