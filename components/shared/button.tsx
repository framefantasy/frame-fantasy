const Button = ({
  children,
  className = "",
  ...props
}: React.DetailedHTMLProps<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>) => (
  <button
    {...props}
    className={`bg-primary text-secondary py-2 px-8 font-medium ${className}`}
  >
    {children}
  </button>
);

export default Button;
