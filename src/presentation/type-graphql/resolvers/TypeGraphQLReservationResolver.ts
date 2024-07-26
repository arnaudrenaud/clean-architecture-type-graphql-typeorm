import { Args, ArgsType, Field, Mutation, Query, Resolver } from "type-graphql";
import ReservationUseCases from "../../../application/ReservationUseCases";
import TypeGraphQLReservationObjectType from "../object-types/TypeGraphQLReservationObjectType";

@ArgsType()
export class CreateReservationArgs {
  @Field()
  startDate!: Date;

  @Field()
  endDate!: Date;
}

@Resolver(TypeGraphQLReservationObjectType)
export class TypeGraphQLReservationResolver {
  reservationUseCases: ReservationUseCases;

  constructor(reservationUseCases: ReservationUseCases) {
    this.reservationUseCases = reservationUseCases;
  }

  @Query(() => [TypeGraphQLReservationObjectType])
  getReservations() {
    return this.reservationUseCases.getReservations();
  }

  @Mutation(() => TypeGraphQLReservationObjectType)
  createReservation(@Args() args: CreateReservationArgs) {
    return this.reservationUseCases.createReservation(args);
  }
}
