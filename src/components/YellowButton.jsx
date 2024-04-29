/* eslint-disable react/prop-types */
const YellowButton = ({ text, href, children, className = "" }) => {
  return (
    <a
      href={href}
      style={{ boxShadow: "inset 0 0 0 1px rgba(51, 41, 36, .08)" }}
      className={`flex cursor-pointer font-semibold rounded-radius py-4 px-6 transition-all duration-200 text-dark-primary bg-accent-primary hover:bg-accent-hover items-center justify-center text-center gap-2 ${className}`}>
      {text}
      {children}
    </a>
  );
};

export default YellowButton;
