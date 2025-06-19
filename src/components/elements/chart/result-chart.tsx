import React from "react";
import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import type { HollandType } from "../../../types/hollandcode";

const COLORS = [
  "#8884d8",
  "#82ca9d",
  "#ffc658",
  "#ff8042",
  "#00C49F",
  "#FFBB28",
];

interface Props {
  scores: Record<HollandType, number>;
}

export const ResultChart: React.FC<Props> = ({ scores }) => {
  const data = Object.entries(scores).map(([type, value]) => ({
    name: type,
    value,
  }));

  return (
    <section className="bg-white border border-borderColor shadow-sm rounded-2xl p-4 w-full">
      <h3 className="text-lg font-semibold text-textMedium mb-4">
        Skor Holland Code
      </h3>

      <div className="w-full h-80 sm:h-96 md:h-[28rem]">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={data}
              dataKey="value"
              nameKey="name"
              cx="50%"
              cy="50%"
              outerRadius="70%" // persentase agar fleksibel
              label
            >
              {data.map((_, index) => (
                <Cell key={index} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip />
            {/* Responsif Legend: stack di bawah untuk layar kecil */}
            <Legend
              layout="horizontal"
              verticalAlign="bottom"
              align="center"
              wrapperStyle={{ fontSize: "0.875rem" }} //text-sm
            />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </section>
  );
};
