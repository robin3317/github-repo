import PropTypes from 'prop-types';
import toastr from 'toastr';
import 'toastr/build/toastr.min.css';
import './Alert.scss';

const Alert = ({
  type,
  message,
  closeButton,
  progressBar,
  position,
  newestOnTop,
  preventDuplicates,
  timeOut,
}) => {
  toastr.options = {
    closeButton: closeButton || false,
    debug: false,
    newestOnTop: newestOnTop || false,
    progressBar: progressBar || true,

    // toast-top-right, toast-bottom-right, toast-bottom-left, toast-top-left, toast-top-full-width,
    // toast-bottom-full-width, toast-top-center, toast-bottom-center
    positionClass: position || 'toast-top-right',
    preventDuplicates: preventDuplicates || false,
    onclick: null,
    showDuration: '300',
    hideDuration: '1000',
    timeOut: timeOut || '5000',
    extendedTimeOut: '1000',
    showEasing: 'swing',
    hideEasing: 'linear',
    showMethod: 'fadeIn',
    hideMethod: 'fadeOut',
  };
  toastr.clear();

  if (type === 'success') {
    toastr.success(message || 'Success');
  } else if (type === 'info') {
    toastr.info(message || 'Info message');
  } else if (type === 'warning') {
    toastr.warning(message || 'Warning!');
  } else if (type === 'error') {
    toastr.error(message || 'Error!');
  }
};

Alert.propTypes = {
  type: PropTypes.string.isRequired,
};

export default Alert;
