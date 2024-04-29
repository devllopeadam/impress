/* eslint-disable react/prop-types */
const WhiteButton = ({ text, href }) => {
  return (
    <a
      href={href}
      className="font-semibold rounded-radius py-4 px-6 transition-all duration-200 text-dark-primary bg-white hover:bg-stroke text-center">
      {text}
    </a>
  );
};

export default WhiteButton;
