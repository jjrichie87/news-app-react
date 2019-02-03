import axios from 'axios';
import * as constants from '../constants';

//Fetch news, update state by dispatch
export const fetchNews = (categoryName) => dispatch => {
    dispatch(fetchNewsBegin());
    //On API Call success
    const onSuccess = response => {
        setTimeout(function () {
            const json = response;
            //console.log(json);
            dispatch(fetchNewsSuccess(json.data));
        }, 2000);
    };
    //On API Call Error
    const onError = error => {
        console.log('fetchNews.onError: ', error);
        if (!axios.isCancel(error)) {
            dispatch(fetchNewsError(error));
        }
    };

   const newsResp = () => { 
    //Actual api call, accepts category to be dynamic   
    axios
        .get("http://api.nytimes.com/svc/search/v2/articlesearch.json?q=" + categoryName + "&api-key=b75da00e12d54774a2d362adddcc9bef")
        .then(onSuccess)
        .catch(onError);
   }
   newsResp();
};
//Fired when API is invoked.
export const fetchNewsBegin = () => ({
    type: constants.FETCH_NEWS_BEGIN
});
//Fired when API is success.
export const fetchNewsSuccess = summaryResp => ({
    type: constants.FETCH_NEWS_SUCCESS,
    payload: summaryResp
});
//Fired when API is failed.
export const fetchNewsError = err => ({
    type: constants.FETCH_NEWS_ERROR,
    payload: err
});


