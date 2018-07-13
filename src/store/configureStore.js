import { createStore, applyMiddleware  } from 'redux';
import allReducers from '../reducers';
import thunk from 'redux-thunk';

export default function configureStore(initialState) {

    const store = createStore(
            allReducers,
            applyMiddleware(
                    thunk,
                    ),
            initialState
            )
    return store
}