
## Running the app locally

In one terminal run docker:
```
> docker-compose up
```

In another terminal, run the following line copy the .env file, run migrations and seed the database:

```
> cp .env.example .env && npx knex migrate:latest && npx knex seed:run
```

And then, run the app:

```
> yarn dev
```

## Migrations

Creating a new migration:

```
> npx knex migrate:make __name_of_migration__
```

Running to latest:

```
> npx knex migrate:latest
```

Running next migration that hasn't run:

```
> npx knex migrate:up
```

Rollback last migration:

**Once in production, avoid running this. Better to move forward**
```
> npx knex migrate:rollback
```

Rollback all migrations:

**Once in production, avoid running this. Better to move forward**
```
> npx knex migrate:rollback --all
```


## Seeds

Creating a seed:

**You should design your seed files to reset tables as needed before inserting data.**
```
> npx knex seed:make seed_name
```

Running seed files:

**You should design your seed files to reset tables as needed before inserting data.**
```
> npx knex seed:run
```