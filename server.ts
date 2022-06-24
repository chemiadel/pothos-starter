// api/server.ts
import { ApolloServer } from "apollo-server";
import schema from "./src/";

export const server = new ApolloServer({ schema });

server.listen().then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`);
});
