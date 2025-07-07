import React from "react";

interface Props {
  answeredCount: number;
  totalCount: number;
}

export const ProgressIndicator: React.FC<Props> = ({
  answeredCount,
  totalCount,
}) => {
  const percentage = totalCount === 0 ? 0 : (answeredCount / totalCount) * 100;

  return (
    <div className="max-w-4xl mx-auto mb-6">
      <p className="text-center text-sm text-gray-700 mb-2">
        {answeredCount} dari {totalCount} pertanyaan telah dijawab
      </p>
      <div className="bg-gray-300 rounded-full h-3">
        <div
          className="bg-blue-600 h-3 rounded-full transition-all duration-300"
          style={{ width: `${percentage}%` }}
        />
      </div>
    </div>
  );
};
