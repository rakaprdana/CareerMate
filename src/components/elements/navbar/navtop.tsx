import Logo from "../../../../public/image/logo-CM.png";
export const NavTop = () => {
  return (
    <nav className="fixed w-full bg-foreBackground p-4 rounded-b-2xl shadow-background">
      <div className="flex items-center space-x-4">
        <img src={Logo} alt="CareerMate" className="w-16" />
        <h1 className="text-3xl font-bold text-textBold">CareerMate</h1>
      </div>
    </nav>
  );
};
