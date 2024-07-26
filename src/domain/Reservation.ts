export type NewReservationArgs = {
  startDate: Date;
  endDate: Date;
};

export default class Reservation {
  id!: string;
  startDate!: Date;
  endDate!: Date;

  constructor(args: NewReservationArgs) {
    this.startDate = args.startDate;
    this.endDate = args.endDate;
  }
}
