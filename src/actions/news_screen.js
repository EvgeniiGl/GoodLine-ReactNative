import * as rssParser from 'react-native-rss-parser';

import {
        GOTO_NEWS,
        FETCH_NEWS_LIST_BEGIN,
        FETCH_NEWS_LIST_SUCCESS,
        FETCH_NEWS_LIST_FAILURE
        } from '../constants/actionTypes';
import { URL_NEWS  } from '../constants/properties';

export const  gotoNews = (index) => {
    return {
        type: GOTO_NEWS,
        index: index
    };

};

export const fetchNewsList = () => dispatch => {
        dispatch(fetchNewsListBegin());
        return fetch(URL_NEWS).then((response) => response.text())
                .then((responseData) => rssParser.parse(responseData))
                .then((rss) => {
                    dispatch(fetchNewsListSuccess(rss.items));
                })
                .catch(error => dispatch(fetchNewsListFailure(error)));
    }

function handleErrors(response) {
    if (!response.ok) {
        throw Error(response.statusText);
    }
    return response;
}

export const fetchNewsListBegin = () => ({
        type: FETCH_NEWS_LIST_BEGIN
    });

export const fetchNewsListSuccess = news_list => ({
        type: FETCH_NEWS_LIST_SUCCESS,
        payload: {news_list}
    });

export const fetchNewsListFailure = error => ({
        type: FETCH_NEWS_LIST_FAILURE,
        payload: {error}
    });