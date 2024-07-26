import { DataSource } from "typeorm";
import TypeORMReservationRepository from "../infrastructure/repositories/typeorm/TypeORMReservationRepository";

let dataSource: DataSource;

export const getDataSource = async () => {
  if (!dataSource) {
    dataSource = new DataSource({
      type: "postgres",
      url: "postgres://postgres:mysecretpassword@localhost:5433/postgres",
      entities: [TypeORMReservationRepository],
      synchronize: true,
    });
    await dataSource.initialize();
  }
  return dataSource;
};
