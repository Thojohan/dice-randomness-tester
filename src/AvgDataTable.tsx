import styled from "styled-components";
import { ChartData } from "./App";

const Table = styled.table`
  align-self: center;
  width: 100%;
  font-size: 0.9rem;
  margin-bottom: 10px;
`;

const Tbody = styled.tbody`
  text-align: center;
`;

function AvgDataTable({ chartData }: { chartData: ChartData }) {
  return (
    <Table>
      <thead>
        <tr>
          <th>Value</th>
          <th>Number</th>
          <th>Percentage</th>
        </tr>
      </thead>
      <Tbody>
        {chartData?.map((res, i) => (
          <tr key={i}>
            <td>{i + 1}</td>
            <td>{Math.round(res.absolute * 1e4) / 1e4}</td>
            <td>{Math.round(res.percent * 1e4) / 1e4}</td>
          </tr>
        ))}
      </Tbody>
    </Table>
  );
}

export default AvgDataTable;
