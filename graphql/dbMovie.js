export let movies = [
    {
        id: 1, 
        name: "Act of Killing",
        score: 4
    },
    {
        id: 2,
        name: "It 2",
        score: 2.9
    },
    {
        id: 3,
        name: "Shining",
        score: 4
    }
];

export const deleteMovie = (id) => {
    const appliedMovie = movies.filter(movie => id !== movie.id);
    if(movies.length > appliedMovie.length) {
        // 내가 보낸 id가 아닌 것의 개수가 전체 배열보다 적다
        // => id가 일치하는 것이 한 개 이상 있다
        console.log(appliedMovie);
        movies = appliedMovie;
        return true;
    } else {
        return false;
    }
}