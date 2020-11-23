import React from 'react';
import { Provider } from 'react-redux';
import store from './store';
import App from './App';

const ClothesWebStore = () => (
  <Provider store={store}>
    <App />
  </Provider>
);

export default ClothesWebStore;
