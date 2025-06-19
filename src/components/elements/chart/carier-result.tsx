import React from "react";
import type { HollandType } from "../../../types/hollandcode";
import { careerSuggestions } from "../../../data/carier";

interface Props {
  topType: HollandType;
}

export const CareerSuggestionBox: React.FC<Props> = ({ topType }) => {
  const recommended = careerSuggestions[topType].slice(0, 3);

  return (
    <div className="bg-blue-200 p-4 rounded-2xl shadow-sm border border-blue-300">
      <h3 className="font-semibold text-textSemiBold mb-2">
        Rekomendasi Karier Utama
      </h3>
      <p className="text-textBold">
        Berdasarkan hasil tertinggi Anda (<strong>{topType}</strong>), karier
        yang direkomendasikan adalah: <strong>{recommended.join(", ")}</strong>.
      </p>
    </div>
  );
};
