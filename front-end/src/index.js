import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import './index.css';
import Navigation from './navigation';
import store from './redux/store';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Navigation />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
