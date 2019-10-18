import { GraphQLServer } from "graphql-yoga";
import serveStatic from "serve-static";

const server = new GraphQLServer({

});

server.start(() => { console.log('Hello World!')});