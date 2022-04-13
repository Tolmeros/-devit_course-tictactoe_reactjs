import {createSelector} from 'reselect';

const state = (state) => state;

export const turn = createSelector(state, (state) => state.turn);
