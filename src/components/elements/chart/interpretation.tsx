import React from "react";
import type { HollandType } from "../../../types/hollandcode";

interface Props {
  topThree: [HollandType, number][];
}

export const InterpretationBox: React.FC<Props> = ({ topThree }) => (
  <div className="bg-background p-4 rounded-2xl border border-borderColor shadow-sm">
    <h3 className="font-semibold text-textMedium mb-2">Interpretasi</h3>
    <p className="text-textSemiBold">
      Kode Holland Anda adalah:{" "}
      <strong>{topThree.map(([t]) => t).join(" ")}</strong>. Ini menunjukkan
      kecenderungan Anda terhadap karier yang melibatkan aspek{" "}
      {topThree.map(([t]) => t.toLowerCase()).join(", ")}.
    </p>
  </div>
);
