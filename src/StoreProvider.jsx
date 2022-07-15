import React from 'react';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';
import App from './App'


export const store = configureStore();
store.subscribe(()=>{ });

const StoreProvider=()=>{
    <Provider store={store}>
        <App />
    </Provider>
}

export default StoreProvider;