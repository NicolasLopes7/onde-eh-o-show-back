import 'reflect-metadata';
import { ApolloServer } from 'apollo-server';
import { buildGraphQLSchema } from './graphql/buildschema';
import { context } from './graphql/context';

(async () => {
  const schema = await buildGraphQLSchema();
  const server = new ApolloServer({
    schema,
    context,
  });

  server.listen(process.env.PORT || 4000).then(({ url }) => console.log(`🚀  Server ready at ${url}`));
})();
