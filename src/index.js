import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/App/App.jsx';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import { Provider } from 'react-redux';


const feeling = (state = 0, action) => {
    if (action.type === 'SET_FEELING') {
        return action.payload;
    } else if (action.type === 'CLEAR_FORM') {
        return 0;
    }
    return state;
}

const understanding = (state =0, action) =>{
    if ( action.type === 'SET_FEELING' ) {
        return action.payload;
    } else if (action.type === 'CLEAR_FORM') {
        return 0;
    }
    return state;
}





const storeInstance = createStore(
    combineReducers(
        {
            feeling,
            understanding
        }
    ),
    applyMiddleware(logger)
)




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <Provider store={storeInstance}>
        <App />
        </Provider>
    </React.StrictMode>
);
