import { takeLatest, call, put } from 'redux-saga/effects';

import { shortenLink } from '@domain/api';
import { showPopup, setLoading } from '@containers/App/actions';
import { SET_SHORTENURL } from './constants';
import { getShortURL } from './actions';

function* doSetShortenLink({ url }) {
  yield put(setLoading(true));
  try {
    const response = yield call(shortenLink, url);
    if (response.message) {
      yield put(showPopup('URL Already Shortened', response.message));
    } else {
      yield put(getShortURL(response));
    }
  } catch (error) {
    yield put(showPopup());
  }
  yield put(setLoading(false));
}

export default function* homeSaga() {
  yield takeLatest(SET_SHORTENURL, doSetShortenLink);
}
