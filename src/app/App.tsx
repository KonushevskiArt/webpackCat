import React from 'react';
import Home from './pages/home/Home';
import store from './store';
import { Provider } from 'react-redux';

export const App = () => {
  return (
    <Provider store={store}>
      <Home />
    </Provider>
  );
};
