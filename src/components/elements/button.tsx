import { Link } from "react-router-dom";

interface ButtonProps {
  children: string;
  to: string;
  onClick: () => void;
}

export const Button = ({ children, to, onClick }: ButtonProps) => {
  return (
    <Link to={to}>
      <button
        onClick={onClick}
        className="w-1/2 md:w-1/3 border-2 border-borderColor font-medium my-4 px-4 py-2 rounded-xl hover:bg-buttonPri hover:text-white active:bg-buttonPri active:text-white transform duration-300"
      >
        {children}
      </button>
    </Link>
  );
};
