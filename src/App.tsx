import { Provider } from 'react-redux';
import store from './store';
import './App.css'

// import React from 'react';
import Body from './components/Body';
import Header from './components/Header';

function App() {
  return (
    <Provider store={store}>
      <div>
        <Header />
        <Body />
      </div>
    </Provider>
  );
}

export default App;