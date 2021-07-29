import { createStore } from 'redux';
import rootReducer from './reducers';

const store = createStore(rootReducer);

export type RootStore = ReturnType<typeof rootReducer>;

export default store;