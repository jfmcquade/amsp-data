import * as functions from "firebase-functions";
import {knex, Knex} from "knex";

const config = {
  client: "pg",
  connection: {
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,
    host: process.env.INSTANCE_UNIX_SOCKET,
  },
};

export const connect = functions.https.onRequest(async (request, response) => {
  const responseMessage = [];
  responseMessage.push("Starting");
  const db: Knex = knex(config as Knex.Config);
  const tableNames = await db
      .select()
      .from("pg_catalog.pg_tables");
  await db.destroy();
  responseMessage.push({tableNames});
  response.send({responseMessage});
});
