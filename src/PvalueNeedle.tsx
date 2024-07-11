import { Pie, PieChart, Cell, Label } from "recharts";
import styled from "styled-components";

type DataType = {
  name: string;
  value: number;
  color: string;
  shadowColor: string;
};

const Div = styled.div`
  margin: 0 auto;
  margin-top: -45px;
`;

function PvalueNeedle({ avgPvalue }: { avgPvalue: number }) {
  const RADIAN: number = Math.PI / 180;
  const data: DataType[] = [
    { name: "A", value: 5, color: "#db1d1d", shadowColor: "#750505" },
    { name: "B", value: 95, color: "#0cc20c", shadowColor: "#036503" },
  ];
  const cx: number = 150;
  const cy: number = 200;
  const iR: number = 50;
  const oR: number = 100;

  const needle = (
    value: number,
    data: DataType[],
    cx: number,
    cy: number,
    iR: number,
    oR: number,
    color: string
  ) => {
    let total = 0;

    data.forEach((v: DataType) => {
      total += v.value;
    });

    const ang = 180.0 * (1 - value / total);
    const length = (iR + 2 * oR) / 3;
    const sin = Math.sin(-RADIAN * ang);
    const cos = Math.cos(-RADIAN * ang);
    const r = 5;
    const x0 = cx + 5;
    const y0 = cy + 5;
    const xba = x0 + r * sin;
    const yba = y0 - r * cos;
    const xbb = x0 - r * sin;
    const ybb = y0 + r * cos;
    const xp = x0 + length * cos;
    const yp = y0 + length * sin;

    return [
      <circle cx={x0} cy={y0} r={r} fill={color} stroke="none" key={value} />,
      <path
        d={`M${xba} ${yba}L${xbb} ${ybb} L${xp} ${yp} L${xba} ${yba}`}
        stroke="#none"
        fill={color}
        style={{
          filter: `drop-shadow(2px 2px 2px black)`,
        }}
        key={value * 2}
      />,
    ];
  };
  return (
    <Div>
      <PieChart width={320} height={210}>
        <Pie
          dataKey="value"
          key={Math.random()}
          startAngle={180}
          endAngle={0}
          data={data}
          cx={cx}
          cy={cy}
          innerRadius={iR}
          outerRadius={oR}
          fill="#8884d8"
          stroke="none"
        >
          {data.map((entry, index) => (
            <Cell
              key={`cell-${index}`}
              fill={entry.color}
              style={{
                filter: `drop-shadow(2px 2px 2px ${entry.shadowColor})`,
              }}
            />
          ))}
          <Label
            value={`Average P-value: ${avgPvalue}`}
            position="center"
            dy={-130}
            fill="black"
            fontStyle="bold"
            fontSize={16}
          />
        </Pie>
        {needle(avgPvalue * 100, data, cx, cy, iR, oR, "#0c0c02")}
      </PieChart>
    </Div>
  );
}

export default PvalueNeedle;
