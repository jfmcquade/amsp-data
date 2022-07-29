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
  const instance: Knex = knex(config as Knex.Config);
  instance
      .raw("select 1")
      .then(() => {
        responseMessage.push("Connected to database - OK");
      })
      .catch((err) => {
        responseMessage.push(`Failed to connect to database: ${err}`);
        process.exit(1);
      });
  response.send({responseMessage});
});
