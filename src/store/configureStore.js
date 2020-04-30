import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from 'redux-thunk';
import authReducer from '../reducers/auth';
import countdownsReducer from '../reducers/countdowns';
import filtersReducer from '../reducers/filters';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
export default () => {
    const store = createStore(
        combineReducers({
            auth: authReducer,
            countdowns: countdownsReducer,
            filters: filtersReducer
        }),
        composeEnhancers(applyMiddleware(thunk))
    );
    return store;
}

