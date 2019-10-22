import { movies, deleteMovie } from "./dbMovie"

// import { people } from "./dbPerson"

// const resolvers = {
//     Query: {
//         people: () => people,
//         person: (_, { id }) => { 
//             console.log(id);
//             // {id} 부분을 args로 교체하면 args.id 형태로 써야해서 번거로움
//             return people.filter(person =>  person.id === String(id))[0];
//         }
//     }
// };

const resolvers = {
    Query: {
        movies: () => movies,
        movie: (_, { id }) =>  movies.filter(movie => id === movie.id)[0]
    },
    Mutation: {
        addMovie: (_, {name, score}) => {
            const movieItem = {
                id: movies.length,
                name,
                score
            }
            movies.push(movieItem);
            return movieItem;
        },
        deleteMovie: (_, { id }) => deleteMovie(id)
    }
};

export default resolvers;