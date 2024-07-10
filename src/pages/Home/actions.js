import { GET_SHORTENURL, SET_SHORTENURL, SET_SHORTENURL_ERROR } from './constants';

export const setShortURL = (url) => ({
  type: SET_SHORTENURL,
  url,
});
export const getShortURL = (data) => ({
  type: GET_SHORTENURL,
  data,
});
export const setShortURLError = (status, message) => ({
  type: SET_SHORTENURL_ERROR,
  status,
  message,
});
