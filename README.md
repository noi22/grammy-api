# API-Project

## Introduction

This was created during my time as a student at Code Chrysalis.
This REST API provides features to create, read, update and delete Grammy Awards data.

## How data stored (JSON)

       {
        "category": "Best Vocal Performance, Female",
        "annualGrammy": 2,
        "awardType": "Work",
        "name": "Ella Fitzgerald",
        "awardFor": "But Not For Me"
       }


## API List

### Get all the awards

`GET /api/grammy/`

### Get award

`GET /api/grammy/:name`

### Add award

`POST /api/grammy/`

### Edit award

`PATCH /api/grammy/`

### Delete award

`DELETE /api/grammy/`

## Environment

### Postgres

You will need postgres installed. If you haven't installed it already, download and install the PostgresApp and verify its working by running the command psql in your terminal.
Create a database for this project by running:

```
echo "CREATE DATABASE grammy;" | psql
```
### Installing Dependencies and Startup

Example:

To install dependencies:

    yarn

To run migrations and set up the database:

    yarn migrate

To roll back migrations

    yarn rollback

To run seed:

    yarn seed

To run the app:

    yarn dev
