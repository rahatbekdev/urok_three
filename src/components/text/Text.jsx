import PropTypes from "prop-types";

export const Text = ({ text, className }) => {
  return <h1 className={className}>{text}</h1>;
};
Text.propTypes = {
  text: PropTypes.string,
  className: PropTypes.string,
};
