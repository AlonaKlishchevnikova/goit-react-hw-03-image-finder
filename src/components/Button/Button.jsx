import styled from './button.module.css';
import PropTypes from 'prop-types';

export const Button = ({ onClick }) => (
  <button onClick={onClick} type="button" className={styled.Button}>
    Load more
  </button>
);

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default Button;