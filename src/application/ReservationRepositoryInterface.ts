import Reservation from "../domain/Reservation";

export interface ReservationRepositoryInterface {
  find(): Promise<Reservation[]>;
  save(reservation: Reservation): Promise<Reservation>;
}
