const people = [
    {  
        id: "0",
        name: "Woni",
        age: 18,
        gender: "female"
    },
    { 
        id: "1",   
        name: "Jini",
        age: 20,
        gender: "female"
    }
];

const resolvers = {
    Query: {
        people: () => people
    }
};

export default resolvers;