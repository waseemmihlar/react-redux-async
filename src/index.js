import React from "react";
import ReactDOM  from "react-dom/client";
import App from './App'
import {createStore,applyMiddleware} from 'redux'
import {Provider} from 'react-redux'
import postreducer from "./reducer";
import thunk from 'redux-thunk';
import { composeWithDevTools } from "redux-devtools-extension";


const store=createStore(postreducer,composeWithDevTools(applyMiddleware(thunk)));

const root=ReactDOM.createRoot(document.getElementById('root'))
root.render(
    <Provider store={store}>
    <App />
    </Provider>
)





