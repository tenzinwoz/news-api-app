import axios from 'axios';

const apiKey = "1249a8c542694ea184e2b971765647e3";

export const getAllNews = () => (dispatch) => {
    const url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${apiKey}`
    axios.get(url)
        .then(function (res) {
            dispatch({
                type: 'GET_ALL_NEWS',
                payload: res.data.articles
            })
        })
        .catch(function (err) {
            console.log(err);
        })
}

export const getNewsByType = (type) => (dispatch) => {
    const url = `https://newsapi.org/v2/top-headlines?q=${type}&apiKey=${apiKey}`
    axios.get(url)
        .then(function (res) {
            console.log(res)
            dispatch({
                type: 'GET_ALL_NEWS',
                payload: res.data.articles
            })
        })
        .catch(function (err) {
            console.log(err);
        })
}
