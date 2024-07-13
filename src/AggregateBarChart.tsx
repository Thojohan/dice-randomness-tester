import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Cell,
  TooltipProps,
} from "recharts";
import {
  ValueType,
  NameType,
} from "recharts/types/component/DefaultTooltipContent";
import { ChartData } from "./App";
import styled from "styled-components";
import { colourPicker } from "./utilityFunctions";

const Div = styled.div`
  display: flex;
  justify-content: center;
  margin-right: 10px;
`;

const CustomTooltip = styled.div`
  width: fit-content;
  height: fit-content;
  padding-right: 5px;
  padding-left: 5px;
  padding-top: 2px;
  padding-bottom: 2px;
  border: solid 1px darkgray;
  border-radius: 5%;
  background-color: white;
  margin: 0;
`;

function AggregateBarChart({
  chartData,
  expected,
}: {
  chartData: ChartData;
  expected: number[];
}) {
  const CustomToolTip = ({
    active,
    payload,
  }: TooltipProps<ValueType, NameType>): JSX.Element | null => {
    if (active)
      return (
        <CustomTooltip>{`Average ${
          payload && payload[0].value
        }`}</CustomTooltip>
      );
    return null;
  };

  const renderBarChart = (
    <Div>
      <BarChart width={450} height={250} data={chartData}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="dataName" />
        <YAxis padding={{ bottom: 1 }} />
        <Tooltip content={<CustomToolTip />} offset={10} />
        <Bar dataKey="absolute">
          {chartData.map((_entry, index) => (
            <Cell
              key={`cell-${index}`}
              fill={colourPicker(expected[0], chartData[index].absolute)}
              style={{
                outline: "1px solid",
                outlineColor: "black",
                filter: `drop-shadow(3px 1px 3px ${colourPicker(
                  expected[0],
                  chartData[index].absolute
                )})`,
              }}
            />
          ))}
        </Bar>
      </BarChart>
    </Div>
  );

  return renderBarChart;
}

export default AggregateBarChart;
