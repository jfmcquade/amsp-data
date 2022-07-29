import * as functions from "firebase-functions";
import {Knex, knex} from "knex";

const config: Knex.Config = {
  client: "pg",
  connection: {
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,
    host: process.env.INSTANCE_UNIX_SOCKET,
  },
};

export const connect = functions.https.onRequest((request, response) => {
  const knexInstance = knex(config);
  response.send(knexInstance);
  // knexInstance.select().table("metadata");
});
