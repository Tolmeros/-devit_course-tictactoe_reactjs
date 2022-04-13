import {createStore} from 'redux';

const defaultState = {
  turn: 'x',
}

const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case 'TURN_X':
      return {...state, turn: 'x'};
    case 'TURN_O':
      return {...state, turn: 'o'};
    case 'TURN_TOGGLE':
      return (state.turn === 'x') ? {...state, turn: 'o'} :
        {...state, turn: 'x'};
    default:
      return state;
  }

}

export const store = createStore(reducer);