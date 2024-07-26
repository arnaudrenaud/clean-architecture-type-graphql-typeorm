import { ApolloServer } from "@apollo/server";
import { buildSchema } from "type-graphql";
import { TypeGraphQLReservationResolver } from "../presentation/type-graphql/resolvers/TypeGraphQLReservationResolver";

export async function getApolloServer({
  reservationResolver,
}: {
  reservationResolver: TypeGraphQLReservationResolver;
}) {
  const ClassContainer = {
    get(ResolverClass: any) {
      if (ResolverClass === TypeGraphQLReservationResolver) {
        return reservationResolver;
      }
      return new ResolverClass();
    },
  };

  const schema = await buildSchema({
    resolvers: [TypeGraphQLReservationResolver],
    validate: true,
    container: ClassContainer,
  });

  const server = new ApolloServer({ schema });
  return server;
}
