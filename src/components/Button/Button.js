const Button = ({ onClick, type, className, children }) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`py-3 px-6 text-white rounded font-bold uppercase tracking-wide transition-colors ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
