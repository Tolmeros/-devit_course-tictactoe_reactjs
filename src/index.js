import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import {createStore} from 'redux';
import {Provider} from 'react-redux';

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

const store = createStore(reducer);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>,
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
