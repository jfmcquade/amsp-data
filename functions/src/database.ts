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

/** ********************
 * http callable functions
 * (can be called programmatically from app code)
 *********************/

export const addMetaDataRow = functions.https.onCall((data, context) => {
  functions.logger.info("Hello logs!", {structuredData: true});
  // TODO: logic to connect to database and add a row of metadata
  // ...
  // For now, return data object
  return {
    message: "addMetaDataRow() function called",
    data,
  };
});


/** ********************
 * http requestable functions
 * (can be called with a http request to the endpoint)
 *********************/

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

