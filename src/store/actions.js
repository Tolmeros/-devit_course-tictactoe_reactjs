import {createAction} from 'redux-actions';

export const turnToggle = createAction('TURN_TOGGLE');

export const makeTurn = createAction(
  'TURN', 
  (player) => player
);
