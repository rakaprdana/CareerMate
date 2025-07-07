import React from "react";

interface Props {
  currentPage: number;
  totalPages: number;
  onNext: () => void;
  onPrev: () => void;
  onSubmit: () => void;
}

export const QuestionNavigation: React.FC<Props> = ({
  currentPage,
  totalPages,
  onNext,
  onPrev,
  onSubmit,
}) => {
  return (
    <div className="flex justify-between mt-8 w-full max-w-5xl">
      <button
        onClick={onPrev}
        disabled={currentPage === 0}
        className="px-4 py-2 rounded-md bg-gray-300 hover:bg-gray-400 disabled:opacity-50"
      >
        Sebelumnya
      </button>

      {currentPage < totalPages - 1 ? (
        <button
          onClick={onNext}
          className="px-4 py-2 rounded-md bg-blue-500 text-white hover:bg-blue-600"
        >
          Selanjutnya
        </button>
      ) : (
        <button
          onClick={onSubmit}
          className="px-4 py-2 rounded-md bg-green-500 text-white hover:bg-green-600"
        >
          Selesai
        </button>
      )}
    </div>
  );
};
