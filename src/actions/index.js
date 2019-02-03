import axios from 'axios';
import * as constants from '../constants';

export const sum = (a,b) => { 
    return a + b;
}
export const fetchNews = (categoryName) => dispatch => {
    dispatch(fetchNewsBegin());

    const onSuccess = response => {
        setTimeout(function () {
            const json = response;
            //console.log(json);
            dispatch(fetchNewsSuccess(json.data));
        }, 2000);
    };

    const onError = error => {
        console.log('fetchNews.onError: ', error);
        if (!axios.isCancel(error)) {
            dispatch(fetchNewsError(error));
        }
    };

   const newsResp = () => { axios
        .get("http://api.nytimes.com/svc/search/v2/articlesearch.json?q=" + categoryName + "&api-key=b75da00e12d54774a2d362adddcc9bef")
        .then(onSuccess)
        .catch(onError);
   }
   newsResp();
};
export const fetchNewsBegin = () => ({
    type: constants.FETCH_NEWS_BEGIN
});
export const fetchNewsSuccess = summaryResp => ({
    type: constants.FETCH_NEWS_SUCCESS,
    payload: summaryResp
});
export const fetchNewsError = err => ({
    type: constants.FETCH_NEWS_ERROR,
    payload: err
});


