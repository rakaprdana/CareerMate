import React from "react";
import type { HollandType } from "../../../types/hollandcode";
import { descriptions } from "../../../data/descriptions";

interface Props {
  topThree: [HollandType, number][];
}

export const TopTypesList: React.FC<Props> = ({ topThree }) => (
  <div className="bg-foreBackground border border-borderColor p-4 rounded-2xl shadow-sm">
    <h3 className="font-semibold text-textMedium mb-2">
      Top 3 Tipe Kepribadian
    </h3>
    <ul className="list-disc list-inside space-y-1">
      {topThree.map(([type, score]) => (
        <li key={type} className="text-textSemiBold">
          <strong>{type}</strong> ({score}) – {descriptions[type]}
        </li>
      ))}
    </ul>
  </div>
);
