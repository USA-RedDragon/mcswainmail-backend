# McSwainMail REST API

[![CircleCI](https://circleci.com/gh/USA-RedDragon/mcswainmail-backend/tree/master.svg?style=svg)](https://circleci.com/gh/USA-RedDragon/mcswainmail-backend/tree/master)

## Environment Variables

| Environment Variable |                   Details                   |                  Example                   |
| -------------------- | ------------------------------------------- | ------------------------------------------ |
| DB_HOST              | The hostname for the database               | `localhost`                                |
| DB_USERNAME          | The username for the database               | `username`                                 |
| DB_PASSWORD          | The password for the database               | `password`                                 |
| DB_DATABASE          | The name of the database to use             | `data`                                     |
| DB_DIALECT           | The type of database to use                 | `mariadb`                                  |
| PORT                 | The port to run the app on                  | `3000`                                     |
| HOST                 | The host the app is on                      | `http://localhost:3000`                    |
| SECRET               | The signing secret for sessions and cookies | `secret`                                   |
| FRONTEND_HOST        | The host of the frontend                    | `https://frontend.com`                     |

## Database

Any database system compatible with Sequelize will work with this

We're using MariaDB locally

See <http://docs.sequelizejs.com/manual/dialects.html> for a list

Make sure to persist the database and take backups
