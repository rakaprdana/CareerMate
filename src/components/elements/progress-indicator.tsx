import React from "react";

interface Props {
  answeredCount: number;
  totalCount: number;
}

export const ProgressIndicator: React.FC<Props> = ({
  answeredCount,
  totalCount,
}) => {
  const percentage = (answeredCount / totalCount) * 100;

  return (
    <div className="w-full max-w-5xl mb-6">
      <p className="text-sm text-textMedium text-center mb-2">
        {answeredCount} dari {totalCount} pertanyaan telah dijawab
      </p>
      <div className="bg-gray-200 rounded-full h-4 w-full">
        <div
          className="bg-blue-500 h-4 rounded-full transition-all duration-300"
          style={{ width: `${percentage}%` }}
        />
      </div>
    </div>
  );
};
