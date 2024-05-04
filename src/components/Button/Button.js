const Button = ({ onClick, type, className, children }) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`rounded font-bold uppercase tracking-wide transition-colors ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
