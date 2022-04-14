import {createSelector} from 'reselect';

const selectTurn = (state) => state.turn;

export const turn = createSelector(selectTurn, (state) => state.turn);
