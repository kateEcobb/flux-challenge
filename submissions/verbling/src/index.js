import ReactDOM from 'react-dom';
import React from 'react';
import App from './views/App';
import reducer from './reducers/reducer';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import {getMaster, getApprentice, changePlanet} from './actions/appActions';

const store = createStore(reducer);

const ws = new WebSocket('ws://localhost:4000');
ws.onmessage = function(event){ 
  let data = JSON.parse(event.data);
  store.dispatch(changePlanet(data));
}

ReactDOM.render(
  <Provider store={store}>
    <App/>
  </Provider>, 
  document.getElementById('app')
);
