import { PropTypes } from 'prop-types';

const Button = ({
  title, handleClick, className,
}) => (
  <button type="submit" className={className} onClick={handleClick}>
    {title}
  </button>
);

Button.propTypes = {
  className: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  handleClick: PropTypes.func.isRequired,
};

export default Button;
