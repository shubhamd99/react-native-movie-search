
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { persistStore, persistCombineReducers } from 'redux-persist'
import AsyncStorage from '@react-native-community/async-storage';
import reducer from './reducers';
import promise from './promise';

const persistConfig = {
  key: 'root', // key to refer in AsyncStorage Object
  storage: AsyncStorage,
  whitelist: [
    'mainStore', // only mainStore will be persisted
  ],
}

const persistedReducer = persistCombineReducers(persistConfig, reducer)

export default function configureStore() {

  // Composes functions from right to left.
  const enhancer = compose(
    applyMiddleware(thunk, promise),
  );

  // Creates a Redux store that holds the complete state tree of your app. 
  // createStore(reducer, [preloadedState], [enhancer])
  const store = createStore(persistedReducer, undefined, enhancer);

  // persistStore(store, [config, callback])
  let persistor = persistStore(store)

  return { store, persistor } ;
}