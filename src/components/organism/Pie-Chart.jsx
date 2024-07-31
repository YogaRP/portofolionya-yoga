import React from "react";
import { Cell, Pie, PieChart, ResponsiveContainer } from "recharts";
import { kemampuanPieChart } from "../../data/data";

export const PieCharts = () => {
  const data = kemampuanPieChart;
  const valueData = data.map((item, index) => item.value);
  let valueSum = 0;
  for (const i in valueData) {
    valueSum = valueSum + valueData[i];
  }

  const colorsData = data.map((item, index) => item.color);
  const COLORS = [];
  COLORS.push(...colorsData);

  //KALAU MAU WARNA PIECHART NYA RANDOM BISA PAKE INI
  //   let usedColors = new Set();
  //   let dynamicColors = function () {
  //     let r = Math.floor(Math.random() * 255);
  //     let g = Math.floor(Math.random() * 255);
  //     let b = Math.floor(Math.random() * 255);
  //     let color = "rgb(" + r + "," + g + "," + b + ")";
  //     if (!usedColors.has(color)) {
  //       usedColors.add(color);
  //       return color;
  //     } else {
  //       return dynamicColors();
  //     }
  //   };
  //   for (let i in data) {
  //     COLORS.push(dynamicColors());
  //   }

  const RADIAN = Math.PI / 180;
  const renderCustomizedLabel = ({
    cx,
    cy,
    midAngle,
    innerRadius,
    outerRadius,
    percent,
    index,
  }) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.7;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);
    return (
      <text
        x={x}
        y={y}
        fill="white"
        textAnchor="middle"
        // textAnchor={x > cx ? "start" : "end"}
        dominantBaseline="central"
      >
        {`${(percent * 100).toFixed(0)}%`}
        {/* {data[index].name} */}
      </text>
    );
  };
  return (
    <div className="flex flex-col w-full mx-auto  h-full p-4">
      <ResponsiveContainer width={"100%"} height={200}>
        <PieChart width={400} height={400}>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            labelLine={false}
            label={renderCustomizedLabel}
            outerRadius={100}
            fill="#8884d8"
            dataKey="value"
          >
            {data.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={COLORS[index % COLORS.length]}
              />
            ))}
          </Pie>
        </PieChart>
      </ResponsiveContainer>
      <div>
        <ul className="mt-8 list-inside px-3 grid grid-cols-2 ">
          {data.map((item, index) => (
            <li
              key={index}
              className={`font-semibold text-lg text-center`}
              style={{ color: `${item.color}` }}
            >
              {item.name} - {((item.value / valueSum) * 100).toFixed(0)}%
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
