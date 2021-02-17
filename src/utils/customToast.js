import { toast } from 'react-toastify';
import { css } from 'glamor';

const customToast = {
  success(msg, options = {}) {
    return toast.success(msg, {
      ...options,
      className: 'toast-success-container toast-success-container-after',
      progressClassName: css({
        background: '#34A853',
      }),
    });
  },
  error(msg, options = {}) {
    return toast.error(msg, {
      ...options,
      className: 'toast-error-container toast-error-container-after',
      progressClassName: css({
        background: '#ffb8b8',
      }),
    });
  },
  info(msg, options = {}) {
    return toast.error(msg, {
      ...options,
      className: 'toast-info-container toast-info-container-after',
      progressClassName: css({
        background: '#07F',
      }),
    });
  },
};

export default customToast;
