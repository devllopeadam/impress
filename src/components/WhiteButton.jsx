import { Link } from "react-router-dom";

/* eslint-disable react/prop-types */
const WhiteButton = ({ text, href }) => {
  return (
    <Link
      to={href}
      className="font-semibold rounded-radius py-3 px-5 sm:py-4 sm:px-6 transition-all duration-200 text-dark-primary bg-white hover:bg-stroke text-center">
      {text}
    </Link>
  );
};

export default WhiteButton;
