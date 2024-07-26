# Clean architecture with TypeScript

Basic example of a database-dependant server app exposing a GraphQL HTTP API, following [clean architecture](https://blog.cleancoder.com/uncle-bob/2012/08/13/the-clean-architecture.html).

Uses:

- type-graphql
- Apollo Server
- TypeORM

<figure>
    <img src="./Clean-Architecture-Diagram-Asp-Net.png"
         alt="Clean architecture diagram with the outer layer split in two: infrastructure and UI">
    <figcaption>https://blog.ndepend.com/clean-architecture-for-asp-net-core-solution/</figcaption>
</figure>

## Start database

With Docker:

```
docker run --name postgres -e POSTGRES_PASSWORD=mysecretpassword -p 5433:5432 -d postgres
```

## Start server

```
npm run build && npm run start
```
