import { ApolloServer } from '@apollo/server';

const typeDefs = `#graphql
 type Book {
   title: String
   author: String
 }

 type Query {
   books: [Book]
 }
`
module.exports = typeDefs;
