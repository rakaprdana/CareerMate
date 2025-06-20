import { Button } from "../elements/button";
import { NavTop } from "../elements/navbar/navtop";
import Career from "../../../public/image/undraw_career-progress_vfq5.svg";
import { About } from "./layout/landing/about";
import { useState } from "react";
import { AnnouncementModal } from "../elements/modal/announcement";

export const LandingPage = () => {
  const [showModal, setShowModal] = useState(false);
  return (
    <>
      <NavTop />
      <main className="flex flex-wrap justify-center md:justify-between items-center gap-8 px-4 md:px-8 pt-40">
        <section className="p-4 w-full md:w-[50%] text-center md:text-left">
          <div className="mb-4 space-y-4">
            <h1 className="text-4xl md:text-6xl font-bold text-textBold">
              CareerMate
            </h1>
            <p className="text-base md:text-lg">
              Karier hebat dimulai dari langkah pertama. Selamat datang di
              CareerMate
            </p>
          </div>
          <Button onClick={() => setShowModal(true)} to={""}>
            Coba Sekarang
          </Button>
        </section>
        <img
          src={Career}
          alt="Career Progress"
          className="w-full sm:w-2/3 md:w-[40%] max-w-md"
        />
      </main>
      {showModal && <AnnouncementModal onClose={() => setShowModal(false)} />}
      <About />
    </>
  );
};
