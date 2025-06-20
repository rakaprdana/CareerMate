export const About = () => {
  return (
    <section className="bg-gray-50 py-16 px-4 md:px-20 text-center md:text-left">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
          Tentang <span className="font-bold text-textBold">CareerMate</span>
        </h2>
        <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
          <span className="text-2xl font-bold text-textMedium">CareerMate</span>{" "}
          adalah sistem pakar berbasis <strong>Holland Code (RIASEC)</strong>{" "}
          yang dirancang untuk membantu siswa dan mahasiswa menemukan jalur
          karier terbaik sesuai dengan kepribadian dan minat mereka. Dengan
          memahami enam tipe kepribadian—Realistic, Investigative, Artistic,
          Social, Enterprising, dan Conventional—CareerMate membimbing Anda
          mengenali potensi unik dan mencocokkannya dengan pilihan karier yang
          paling sesuai.
        </p>
      </div>
    </section>
  );
};
