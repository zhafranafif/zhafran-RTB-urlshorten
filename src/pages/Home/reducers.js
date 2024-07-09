import { produce } from 'immer';
import { GET_SHORTENURL } from './constants';

export const initialState = {
  data: [],
};

export const storedKey = ['data'];

const homeReducer = (state = initialState, action) =>
  produce(state, (draft) => {
    switch (action.type) {
      case GET_SHORTENURL:
        draft.data = [...draft.data, action.data];
        break;
    }
  });

export default homeReducer;
