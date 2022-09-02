import { Provider } from 'react-redux';
import Home from './src/screens/Home';
import { store } from "./src/redux/store"
import React from 'react';
 
export default function App() {
  return (
    <Provider store={store}>
      <Home />
    </Provider>
  );
}