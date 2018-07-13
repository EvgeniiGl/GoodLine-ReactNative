import {
        GOTO_NEWS,
        FETCH_NEWS_LIST_BEGIN,
        FETCH_NEWS_LIST_SUCCESS,
        FETCH_NEWS_LIST_FAILURE
} from '../constants/actionTypes';

const initialState = {
//    id_news: Number(window.location.pathname.substr(window.location.pathname.lastIndexOf("/") + 1)),
//    per_page: PER_PAGE,
//    list: {}
    news_list: [],
    loading: true,
    error: null,
    index:null
};

export const newsListReducer = (state = initialState, action) => {
    switch (action.type) {
        
        case FETCH_NEWS_LIST_BEGIN:
            return {
                ...state,
                loading: true,
                error: null,
                index: null
            };

        case FETCH_NEWS_LIST_SUCCESS:
            return {
                ...state,
                loading: false,
                news_list: action.payload.news_list
            };

        case FETCH_NEWS_LIST_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload.error,
                news_list: []
            };
            
        case GOTO_NEWS:
            return {...state, index: action.index};

        default:
            return state;
}
}