import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { createStore } from 'redux'
import { Provider, useSelector, useDispatch } from 'react-redux'
import rootReducer from './reducers/rootReducers'

const store = createStore(rootReducer)

ReactDOM.render(
<Provider store={store}><App /></Provider>,
  document.getElementById('root')
);

serviceWorker.unregister();
