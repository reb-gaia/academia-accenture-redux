import React from 'react';
import { Provider } from 'react-redux';
import ListProducts from './components/listProducts';
import Product from './components/product';
import store from './store/index';

const App = () => {
  return (
    <div className="App">
      <h1>React Redux</h1>
      <Provider store={store}>
        <ListProducts></ListProducts>
        <Product></Product>
      </Provider>
    </div>
  );
}

export default App;
