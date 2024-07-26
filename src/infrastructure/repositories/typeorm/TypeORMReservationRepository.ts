import { PrimaryGeneratedColumn, Column, Entity } from "typeorm";

@Entity("Reservation")
export default class TypeORMReservationRepository {
  @PrimaryGeneratedColumn("uuid")
  id!: string;

  @Column()
  startDate!: Date;

  @Column()
  endDate!: Date;
}
