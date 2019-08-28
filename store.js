import {createStore, applyMiddleware} from 'redux';
//import {syncHistoryWithStore} from 'react-router-redux';
import {BrowserRouter} from 'react-router-dom';
import data from './data';

import reducers from './reducers';

const store = createStore(reducers);

export default store;

