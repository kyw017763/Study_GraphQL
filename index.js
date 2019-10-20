import { GraphQLServer } from "graphql-yoga";
import resolvers from "graphql/resolvers"
// import serveStatic from "serve-static";

const server = new GraphQLServer({
    typeDefs: "graphql/schema.graphql",
    resolvers
});

server.start(() => { console.log('Hello World!')});