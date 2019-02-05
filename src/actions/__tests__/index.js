import * as actions from "../index";
import axios from 'axios';
//Should have been better case.
jest.mock('axios');
it('should fetch a list of news', () => {
    const getSpy = jest.spyOn(axios, 'get');
    const result = axios.get("http://api.nytimes.com/svc/search/v2/articlesearch.json?q=amsterdam&api-key=b75da00e12d54774a2d362adddcc9bef");
    expect(result).toBeTruthy();
    expect(getSpy).toBeCalled();
});
