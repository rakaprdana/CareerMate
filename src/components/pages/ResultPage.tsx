import React from "react";
import type { HollandType } from "../../types/hollandcode";

interface Props {
  scores: Record<HollandType, number>;
}

const descriptions: Record<HollandType, string> = {
  Realistic:
    "Anda menyukai aktivitas fisik, bekerja dengan tangan, dan alat mekanis.",
  Investigative: "Anda senang berpikir, meneliti, dan memecahkan masalah.",
  Artistic: "Anda suka mengekspresikan diri melalui seni dan ide kreatif.",
  Social:
    "Anda peduli terhadap orang lain dan menikmati membantu serta mengajar.",
  Enterprising:
    "Anda suka memimpin, memengaruhi, dan mengambil risiko dalam bisnis.",
  Conventional: "Anda menyukai keteraturan, data, dan prosedur sistematis.",
};

export const ResultPage: React.FC<Props> = ({ scores }) => {
  const sorted = Object.entries(scores).sort((a, b) => b[1] - a[1]);
  const topThree = sorted.slice(0, 3) as [HollandType, number][];

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
          <strong>{topThree.map(([t]) => t[0]).join("")}</strong>. Ini
          menunjukkan kecenderungan Anda terhadap karier yang melibatkan aspek{" "}
          {topThree.map(([t]) => t.toLowerCase()).join(", ")}.
        </p>
      </div>
    </div>
  );
};
