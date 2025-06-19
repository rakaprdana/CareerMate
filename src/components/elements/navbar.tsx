import type { NavProps } from "../../interfaces/interface";

export const NavigationButtons: React.FC<NavProps> = ({
  currentPage,
  totalPages,
  onNext,
  onPrev,
  onSubmit,
}) => (
  <div className="flex justify-end space-x-4 mt-4">
    <button
      className="bg-blue-600 text-white px-4 py-2 rounded-xl"
      disabled={currentPage === 0}
      onClick={onPrev}
    >
      Sebelumnya
    </button>
    {currentPage < totalPages - 1 ? (
      <button
        onClick={onNext}
        className="bg-blue-600 text-white px-4 py-2 rounded-xl"
      >
        Berikutnya
      </button>
    ) : (
      <button
        onClick={onSubmit}
        className="bg-green-500 text-white px-4 py-2 rounded-xl"
      >
        Lihat Hasil
      </button>
    )}
  </div>
);
