import PropTypes from "prop-types";

export const Input = ({ type, placeholder }) => {
  return <input type={type} placeholder={placeholder} />;
};
Input.propTypes = {
  type: PropTypes.string,
  placeholder: PropTypes.string,
};
