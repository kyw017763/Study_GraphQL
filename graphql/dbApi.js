import fetch from 'node-fetch';
let API_URL = "https://yts.lt/api/v2/list_movies.json?";

export const getMovies = () => 
    fetch(`${API_URL}`)
    .then(res => res.json())
    .then(json => json.data.movies);

export const getMoviesBy = (limit, minimumRating) => {
    let REQUEST_URL = API_URL;
    let flag = 0;
    if(limit > 0) {
        REQUEST_URL += `limit=${limit}`;
        flag = 1;
    }
    if(flag === 1) REQUEST_URL += '&';
    if(minimumRating > 0) {
        REQUEST_URL += `minimum_rating=${minimumRating}`;
    }
    console.log(REQUEST_URL);

    return fetch(`${REQUEST_URL}`)
    .then(res => res.json())
    .then(json => json.data.movies);
}