import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import './index.css';
import App from './App';
import Home from './containers/Home';
import registerServiceWorker from './registerServiceWorker';
import configureStore from './store/configureStore'

const store = configureStore();

ReactDOM.render(<Provider store={store}>
  <Home />
</Provider>, 
  document.getElementById('root'));
registerServiceWorker();
