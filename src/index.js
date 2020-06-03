import React from 'react';
import ReactDom from 'react-dom';

import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import App from './components/App';
import Reducers from './Reducers';

const store = createStore(Reducers, applyMiddleware(thunk));
ReactDom.render(
    <Provider store={store}>
        <App/>
    </Provider>,
    document.querySelector('#root')
);