import { info } from "../../../data/riasec";
import Photo from "../../../../public/image/john.L.Holland.jpg";

export const DefineRIASEC = () => {
  return (
    <section className="py-10 px-4 md:px-12 bg-white">
      <div className="max-w-5xl mx-auto">
        <h3 className="text-3xl font-bold text-textBold mb-10 text-center">
          Apa itu <span className="text-primary">RIASEC</span>?
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div className="flex flex-col space-y-6 text-base text-gray-700 leading-relaxed">
            <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-4 space-y-4 sm:space-y-0">
              <img
                src={Photo}
                alt="John Lewis Holland"
                className="w-full sm:w-40 rounded-2xl shadow-md"
              />
              <div>
                <h4 className="text-3xl md:text-6xl font-bold text-textBold">
                  John Lewis Holland
                </h4>
                <p className="text-sm italic text-gray-500">
                  American psychologist
                </p>
              </div>
            </div>
            <p>
              <strong>RIASEC</strong> adalah model kepribadian yang dikembangkan
              oleh psikolog <strong>John Lewis Holland</strong> untuk membantu
              seseorang memahami minat dan kecocokan karier berdasarkan enam
              tipe kepribadian utama.
            </p>
            <p>
              Model ini dikenal sebagai <strong>Holland Code</strong> dan sering
              digunakan dalam tes minat karier. Setiap huruf dalam{" "}
              <strong>RIASEC</strong> mewakili tipe kepribadian yang berbeda,
              dan kombinasi dari tipe-tipe ini dapat mencerminkan preferensi
              seseorang terhadap lingkungan kerja tertentu.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {info.map((item, index) => (
              <div
                key={index}
                className="bg-foreBackground p-5 rounded-xl border border-borderColor shadow-sm hover:shadow-md transition-all"
              >
                <h4 className="text-lg font-semibold text-textBold mb-2">
                  {item.name}
                </h4>
                <p className="text-sm text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
