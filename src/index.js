import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import store from "./redux/store/index";
import './index.css';

let rerenderEntireTree = (state) => {
    ReactDOM.render(
        <App state={state} dispatch={store.dispatch.bind(store)} />,
         document.querySelector('#myTest'));
}


rerenderEntireTree(store.getState());
store.subscribe(() => {
    let state = store.getState();
    rerenderEntireTree(state);
});