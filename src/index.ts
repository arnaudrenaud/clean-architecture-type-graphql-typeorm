import "reflect-metadata";
import { getDataSource } from "./adapters/typeorm";
import { startStandaloneServer } from "@apollo/server/standalone";
import { getApolloServer } from "./adapters/apollo-server";
import ReservationUseCases from "./application/ReservationUseCases";
import TypeORMReservationRepository from "./infrastructure/repositories/typeorm/TypeORMReservationRepository";
import { TypeGraphQLReservationResolver } from "./presentation/resolvers/TypeGraphQLReservationResolver";

async function start() {
  const dataSource = await getDataSource();
  console.log(`💾 Connected to database.`);

  const typeORMreservationRepository = dataSource.getRepository(
    TypeORMReservationRepository
  );
  const reservationUseCases = new ReservationUseCases(
    typeORMreservationRepository
  );
  const typeGraphQLReservationResolver = new TypeGraphQLReservationResolver(
    reservationUseCases
  );

  const server = await getApolloServer({
    reservationResolver: typeGraphQLReservationResolver,
  });

  await startStandaloneServer(server, { listen: { port: 4003 } });
  console.log(`🚀 GraphQL server ready.`);
}

start();
