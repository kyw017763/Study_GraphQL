import { GraphQLServer } from "graphql-yoga";
import resolvers from "./graphql/resolver"
// import serveStatic from "serve-static";

const server = new GraphQLServer({
    typeDefs: "graphql/schemaApi.graphql",
    resolvers
});

server.start(() => { console.log('Hello World!')});