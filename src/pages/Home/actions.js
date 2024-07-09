import { GET_SHORTENURL, SET_SHORTENURL } from './constants';

export const setShortURL = (url) => ({
  type: SET_SHORTENURL,
  url,
});
export const getShortURL = (data) => ({
  type: GET_SHORTENURL,
  data,
});
