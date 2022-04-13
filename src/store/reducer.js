import {handleActions} from 'redux-actions';
import {makeTurn, turnToggle} from './actions';

const defaultState = {
  turn: 'x',
}

const handleTurnToggle = (state) => (state.turn === 'x') 
  ? {...state, turn: 'o'}
  : {...state, turn: 'x'};

const handleTurn = (state, {payload}) => ({
  ...state,
  turn: payload
});

export default handleActions(
  {
    [makeTurn]: handleTurn,
    [turnToggle]: handleTurnToggle,
  },
  defaultState
);
