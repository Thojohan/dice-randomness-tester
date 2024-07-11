import styled from "styled-components";
import PvalueNeedle from "./PvalueNeedle";
import AggregateBarChart from "./AggregateBarChart";
import AvgDataTable from "./AvgDataTable";
import { AvgPandChi, ChartData } from "./App";

const Div = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  font-family: "Roboto", sans-serif;
`;
const H3 = styled.h3`
  text-align: center;
`;

const P = styled.p`
  display: flex;
  justify-content: space-between;
  justify-self: center;
  width: 60%;
  margin-left: 20%;
  font-size: small;
  font-weight: 600;
`;

function SideSection({
  chartData,
  avgPandChi,
  expected,
  children,
}: {
  chartData: ChartData;
  avgPandChi: AvgPandChi;
  expected: number[];
  children: React.ReactNode;
}) {
  return (
    <Div>
      <H3>{children}</H3>
      <AvgDataTable chartData={chartData} />
      <AggregateBarChart chartData={chartData} expected={expected} />
      <PvalueNeedle avgPvalue={avgPandChi.pValue} />
      <Div>
        <P>
          <span>Chi square</span>
          <span>{avgPandChi.chiSquare}</span>
        </P>
      </Div>
    </Div>
  );
}

export default SideSection;
