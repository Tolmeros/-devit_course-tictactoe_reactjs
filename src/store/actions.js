import {createAction} from 'redux-actions';

export const turnToggle = createAction('TURN_TOGGLE');

export const nextTurn = createAction(
  'TURN', 
  (player) => player
);
