import { ButtonProps } from "../../utils/interfaces/shared";

const Button = ({ children, onClick }: ButtonProps) => (
  <button
    className="bg-primary text-secondary py-2 px-8 font-medium"
    onClick={onClick}
  >
    {children}
  </button>
);

export default Button;
