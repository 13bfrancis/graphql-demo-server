import { ApolloServer, gql } from "apollo-server";

const typeDefs = gql`
  type Query {
    helloWorld: test!
  }
  type test {
    testMessage: String!
  }
`;

const resolvers = {
  Query: {
    helloWorld: () => {
      return {
        testMessage: "Hello World!",
      };
    },
  },
};

(async () => {
  const server = new ApolloServer({
    typeDefs,
    resolvers,
    playground: true,
    introspection: true,
  });

  try {
    const app = await server.listen(process.env.PORT || 4000);
    console.log(`Server ready on ${app.url}`);
  } catch (error) {
    console.error(error);
  }
})();
