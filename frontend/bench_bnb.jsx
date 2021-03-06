import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root'
import configureStore from './store/store';
import {signup,login,logout} from './actions/session_action'

document.addEventListener("DOMContentLoaded",()=>{
    const store = configureStore();
    // window.store = store;
    window.getState=store.getState;
    window.signup= signup
    window.login= login
    window.logout=logout
    window.dispatch = store.dispatch;
    const root = document.getElementById("root");
    ReactDOM.render(<Root store={store} />,root)
})


