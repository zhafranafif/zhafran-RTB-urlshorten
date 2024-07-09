import { createSelector } from 'reselect';
import { initialState } from './reducers';

const selectClientState = (state) => state.url || initialState;

export const selectURL = createSelector(selectClientState, (state) => state.data);
