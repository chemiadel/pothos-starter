import storeType from "./types/store.type";
import queries from "./queries";
import { gql } from "apollo-server-express";

const typeDefs = [storeType, queries];

export default gql`
  ${typeDefs.join("\n")}
`;
