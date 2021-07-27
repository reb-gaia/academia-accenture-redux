import React from 'react';
import { useState } from 'react';
import ListProducts from './components/listProducts';
import Product from './components/product';

const App = () => {
  const [products, setProducts] = useState([
    {
      id: 1,
      title: 'Curso de ReactJS',
      value: 1500,
      modules: [
        { id: 1, title: 'Modulo 1'},
        { id: 2, title: 'Modulo 2'},
        { id: 3, title: 'Modulo 3'},
      ]
    },
    {
      id: 2,
      title: 'Curso de React Native',
      value: 2150,
      modules: [
        { id: 1, title: 'Modulo 1'},
        { id: 2, title: 'Modulo 2'},
        { id: 3, title: 'Modulo 3'},
        { id: 4, title: 'Modulo 4'},
      ]
    },
    {
      id: 3,
      title: 'Curso de JavaScript',
      value: 3000,
      modules: [
        { id: 1, title: 'Modulo 1'},
        { id: 2, title: 'Modulo 2'},
        { id: 3, title: 'Modulo 3'},
        { id: 4, title: 'Modulo 4'},
        { id: 5, title: 'Modulo 5'},
      ]
    },
  ]);

  return (
    <div className="App">
      <h1>React Redux</h1>
      <ListProducts products={products}></ListProducts>
      <Product product={products}/>
    </div>
  );
}

export default App;
