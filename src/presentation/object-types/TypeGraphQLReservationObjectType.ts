import { Field, ID, ObjectType } from "type-graphql";

@ObjectType("Reservation")
export default class TypeGraphQLReservationObjectType {
  @Field(() => ID)
  id!: string;

  @Field()
  startDate!: Date;

  @Field()
  endDate!: Date;
}
