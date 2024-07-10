import { merge } from 'lodash';

import request from '@utils/request';
import config from '@config/index';

const urls = {
  json: 'http://localhost:3000/api/data.json',
  shortenLink: 'https://shrtlnk.dev/api/v2/link',
};

export const callAPI = async (endpoint, method, header = {}, params = {}, data = {}) => {
  const defaultHeader = {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  };

  const headers = merge(defaultHeader, header);
  const options = {
    baseURL: endpoint,
    url: endpoint,
    method,
    headers,
    data,
    params,
  };

  return request(options).then((response) => {
    const responseAPI = response.data;
    return responseAPI;
  });
};

export const getData = () => callAPI(urls.json, 'get');

export const getCountryList = () => callAPI(urls.countryGetAllKist, 'get', {}, {});

export const shortenLink = (url) => {
  console.log(process.env);
  const header = {
    'api-key': config.key.host,
  };
  const payload = {
    url,
  };
  return callAPI(urls.shortenLink, 'post', header, {}, payload);
};
