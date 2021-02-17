export const APP_ID = '41b5cd53-2d1d-41a4-a766-b64e1334ab02';

export const saveToken = (token) =>
  window.localStorage.setItem(`token-${APP_ID}`, token);

export const getToken = () =>
  window.localStorage.getItem(`token-${APP_ID}`) || '';

export const removeToken = () => {
  window.localStorage.removeItem(`token-${APP_ID}`);
  window.localStorage.removeItem('user');
};
