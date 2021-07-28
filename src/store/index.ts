import { createStore } from 'redux';

const INITIAL_STATE = {
  product: {},
  products: [
    {
      id: 1,
      title: 'Curso de NodeJS',
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
    }
  ]
}

function reducer(state = INITIAL_STATE, action) {
  console.log('teste')
  if(action.type === 'TOGGLE_PRODUCT') {
    console.log('toggle', action)
    return {
      ...state,
      product: action.product
    }
  }
  return state;
}

const store = createStore(reducer);

export default store;