import { produce } from 'immer';
import { GET_SHORTENURL, SET_SHORTENURL_ERROR } from './constants';

export const initialState = {
  data: [],
  errorURL: {
    status: false,
    message: '',
  },
};

export const storedKey = ['data', 'errorURL'];

const homeReducer = (state = initialState, action) =>
  produce(state, (draft) => {
    switch (action.type) {
      case GET_SHORTENURL:
        draft.data = [...draft.data, action.data];
        break;
      case SET_SHORTENURL_ERROR:
        draft.errorURL.status = action.status;
        draft.errorURL.message = action.message;
        break;
    }
  });

export default homeReducer;
