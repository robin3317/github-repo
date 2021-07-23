/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/require-default-props */
import PropTypes from 'prop-types';
import styles from './FormInput.module.scss';

const FormInput = ({ handleChange, label, id, ...props }) => (
  <div className={styles.inputContainer}>
    {label ? (
      <label className={styles.label} htmlFor={id}>
        {label}
      </label>
    ) : null}
    <input id={id} className={styles.input} {...props} onChange={handleChange} />
  </div>
);

FormInput.propTypes = {
  handleChange: PropTypes.func.isRequired,
  label: PropTypes.string,
  id: PropTypes.string.isRequired,
};

export default FormInput;
