import customToast from './customToast';

export { default as Request } from './Request';

export const handleError = (error) => {
  // console.log('error = ', error);
  // console.log('error.message = ', error.message);
  // console.log('error.response = ', error.response);
  let errorMsg =
    error.response?.data?.error || error.response?.statusText || error.message;
  if (error.message.toLowerCase() === 'network error') {
    errorMsg =
      'The website is not reacheable. Please check your internet connection or try again later.';
  }
  customToast.error(errorMsg);
  return errorMsg;
};

export const delayInSeconds = (time) =>
  new Promise(function (res, rej) {
    setTimeout(() => {
      res(true);
    }, time * 1000);
  });
