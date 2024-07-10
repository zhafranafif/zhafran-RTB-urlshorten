import { takeLatest, call, put } from 'redux-saga/effects';

import { shortenLink } from '@domain/api';
import { setLoading } from '@containers/App/actions';
import { SET_SHORTENURL } from './constants';
import { getShortURL, setShortURLError } from './actions';

function* doSetShortenLink({ url }) {
  yield put(setLoading(true));
  try {
    const response = yield call(shortenLink, url);
    if (response.message) {
      yield put(setShortURLError(true, response.message));
    } else {
      yield put(getShortURL(response));
    }
  } catch (error) {
    yield put(setShortURLError(error));
  }
  yield put(setLoading(false));
}

export default function* homeSaga() {
  yield takeLatest(SET_SHORTENURL, doSetShortenLink);
}
