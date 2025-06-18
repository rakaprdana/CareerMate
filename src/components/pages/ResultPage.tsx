import React from "react";
import type { HollandType } from "../../types/hollandcode";
import { careerSuggestions } from "../../data/carier";
import { descriptions } from "../../data/descriptions";

interface Props {
  scores: Record<HollandType, number>;
}

export const ResultPage: React.FC<Props> = ({ scores }) => {
  const sorted = Object.entries(scores).sort((a, b) => b[1] - a[1]);
  const topThree = sorted.slice(0, 3) as [HollandType, number][];
  const [topType] = topThree;

  const recommendedCareer = careerSuggestions[topType[0]].slice(0, 3);

  return (
    <div className="space-y-4">
      <h2 className="text-xl font-semibold">Hasil Rekomendasi Kepribadian</h2>
      <ul className="list-disc ml-6">
        {topThree.map(([type, score]) => (
          <li key={type}>
            <strong>{type}</strong> ({score}) – {descriptions[type]}
          </li>
        ))}
      </ul>
      <div className="mt-4 p-4 bg-gray-100 rounded-xl">
        <h3 className="font-medium">Interpretasi:</h3>
        <p>
          Kode Holland Anda adalah:{" "}
          <strong>{topThree.map(([t]) => t).join(" ")}</strong>. Ini menunjukkan
          kecenderungan Anda terhadap karier yang melibatkan aspek{" "}
          {topThree.map(([t]) => t.toLowerCase()).join(", ")}.
        </p>
      </div>

      <div className="mt-4 p-4 bg-green-100 rounded-xl">
        <h3 className="font-medium">Rekomendasi Karier Utama:</h3>
        <p>
          Berdasarkan hasil tertinggi Anda (<strong>{topType[0]}</strong>),
          karier yang direkomendasikan adalah:{" "}
          <strong>{recommendedCareer}</strong>.
        </p>
      </div>
    </div>
  );
};
