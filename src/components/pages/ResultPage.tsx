import React from "react";
import type { HollandType } from "../../types/hollandcode";
import { ResultChart } from "../elements/chart/result-chart";
import { TopTypesList } from "../elements/chart/top-type";
import { InterpretationBox } from "../elements/chart/interpretation";
import { CareerSuggestionBox } from "../elements/chart/carier-result";

interface Props {
  scores: Record<HollandType, number>;
}

export const ResultPage: React.FC<Props> = ({ scores }) => {
  const sorted = Object.entries(scores).sort((a, b) => b[1] - a[1]);
  const topThree = sorted.slice(0, 3) as [HollandType, number][];
  const [topType] = topThree;

  return (
    <div className="flex flex-col lg:flex-row items-center justify-between gap-8 px-4 lg:px-8">
      <section className="w-full lg:w-1/2 space-y-6">
        <h2 className="text-2xl font-bold text-textMedium">
          Hasil Rekomendasi Kepribadian
        </h2>
        <ResultChart scores={scores} />
      </section>
      <section className="md:pt-16 w-full lg:w-1/2 space-y-6">
        <TopTypesList topThree={topThree} />
        <InterpretationBox topThree={topThree} />
        <CareerSuggestionBox topType={topType[0]} />
      </section>
    </div>
  );
};
