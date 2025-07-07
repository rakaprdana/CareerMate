import { Link } from "react-router-dom";
import Logo from "../../../../public/image/logo-CM.png";
export const NavTop = () => {
  return (
    <nav className="fixed z-10 flex justify-between items-center pr-12 w-full bg-background px-4 py-2 rounded-b-2xl shadow-lg">
      <div className="flex items-center space-x-4">
        <img src={Logo} alt="CareerMate" className="w-12 md:w-16" />
        <h1 className="text-xl md:text-3xl font-bold text-textBold">
          CareerMate
        </h1>
      </div>
      <Link
        to={"/"}
        className="text-xl font-bold text-textBold text-center active:scale-90 transition-all duration-300"
      >
        Home
      </Link>
    </nav>
  );
};
