export default gql `
#graphql
type Book {
  title: String
  author: String
}

type Query {
  books: [Book]
}
`;
