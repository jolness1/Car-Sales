import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import App from './App';
import { featureReducer } from './reducers/modifyFeatureReducer'

import 'bulma/css/bulma.css';
import './styles.scss';

const store = createStore(featureReducer);

const rootElement = document.getElementById('root');
ReactDOM.render(<Provider store={store}><App /></Provider>, rootElement);
