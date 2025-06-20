import { Button } from "../button";

interface AnnouncementProps {
  onClose: () => void;
}

export const AnnouncementModal = ({ onClose }: AnnouncementProps) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-opacity-50 z-50">
      <div className="bg-white rounded-md shadow-sm p-6 max-w-md w-full">
        <h1 className="text-xl font-bold mb-4">Harap dibaca</h1>
        <p className="text-gray-700">
          Sebelum memulai, harap dijawab dengan jujur dan sesuai dengan diri
          Anda. Terdapat 77 pertanyaan yang dirancang untuk memahami kepribadian
          dan minat Anda secara akurat.
        </p>
        <Button onClick={onClose} to="/room">
          Coba
        </Button>
      </div>
    </div>
  );
};
