/* eslint-disable react/button-has-type */
/* eslint-disable react/require-default-props */
/* eslint-disable react/jsx-props-no-spreading */
import PropTypes from 'prop-types';
import styles from './CustomButton.module.scss';

const CustomButton = ({ children, type = 'button', className, ...props }) => (
  <button className={`${styles.button} ${className && styles[className]}`} {...props} type={type}>
    {children}
  </button>
);

CustomButton.propTypes = {
  children: PropTypes.node,
  type: PropTypes.string.isRequired,
  className: PropTypes.string,
};

export default CustomButton;
