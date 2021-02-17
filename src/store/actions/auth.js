import customToast from '../../utils/customToast';
import Request from '../../utils/Request';

export const VALIDATE_PASSWORD_RESET_TOKEN_STARTED =
  'VALIDATE_PASSWORD_RESET_TOKEN_STARTED';
export const VALIDATE_PASSWORD_RESET_TOKEN_SUCCESS =
  'VALIDATE_PASSWORD_RESET_TOKEN_SUCCESS';
export const VALIDATE_PASSWORD_RESET_TOKEN_FAILURE =
  'VALIDATE_PASSWORD_RESET_TOKEN_FAILURE';
export const validatePasswordResetToken = (resetToken, history) => async (
  dispatch
) => {
  dispatch({ type: VALIDATE_PASSWORD_RESET_TOKEN_STARTED });

  const headers = { token: resetToken };
  Request.get('/auth/validate_password_reset_token', {
    headers,
  })
    .then((response) => {
      dispatch({
        type: VALIDATE_PASSWORD_RESET_TOKEN_SUCCESS,
      });
    })
    .catch((error) => {
      console.log(error.response);
      let payload = '';
      let errorMsg;
      if (error.response?.data?.errorCode === 'PRT003') {
        errorMsg =
          'your reset link has expired. Please re-initiate the request';
        payload = errorMsg;
        history.push('/password/forgot');
      } else if (error.response?.data?.errorCode?.match(/^PRT001$|^PRT002$/)) {
        history.push('/notfound');
      } else {
        errorMsg = error.response?.data?.error || error.message;
      }
      dispatch({
        type: VALIDATE_PASSWORD_RESET_TOKEN_FAILURE,
        payload,
      });
      customToast.error(errorMsg);
    });
};

export const CHANGE_PASSWORD_START = 'CHANGE_PASSWORD_START';
export const CHANGE_PASSWORD_SUCCESS = 'CHANGE_PASSWORD_SUCCESS';
export const CHANGE_PASSWORD_FAILURE = 'CHANGE_PASSWORD_FAILURE';
export const changePassword = ({ password, resetToken }, history) => async (
  dispatch
) => {
  try {
    dispatch({ type: CHANGE_PASSWORD_START });
    const response = await Request.patch(`/auth/password/${resetToken}`, {
      body: { password },
    });
    dispatch({ type: CHANGE_PASSWORD_SUCCESS });
    const { data } = response;
    customToast.success(data.message);
    history.push('/login');
  } catch (error) {
    const errorMsg = error.response?.data?.error || error.message;
    dispatch({ type: CHANGE_PASSWORD_FAILURE });
    customToast.error(errorMsg);
  }
};
