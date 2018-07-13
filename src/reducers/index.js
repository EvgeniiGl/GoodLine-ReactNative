import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

//import {news_list} from './news_page';
import SignIn from './sign_in';
import { newsListReducer } from './news_screen';

const allReducers = combineReducers({
    newsListReducer: newsListReducer,
    sign_in: SignIn,
    form: formReducer
})

export default allReducers;