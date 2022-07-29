import * as functions from "firebase-functions";
import {knex, Knex} from "knex";
// import {google} from "googleapis";
// // eslint-disable-next-line @typescript-eslint/no-var-requires
// const credentials = require("./config/credentials.json");

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
  // const createUnixSocketPool = async (config: Knex.Config) => {
  //   return Knex({
  //     client: "pg",
  //     connection: {
  //       user: process.env.DB_USER, // e.g. 'my-user'
  //       password: process.env.DB_PASS, // e.g. 'my-user-password'
  //       database: process.env.DB_NAME, // e.g. 'my-database'
  //       host: process.env.INSTANCE_UNIX_SOCKET,
  //     },
  //     // ... Specify additional properties here.
  //     ...config,
  //   });
  // };
  // const config: Knex.Config = {pool: {
  //   max: 5,
  //   min: 5,
  //   acquireTimeoutMillis: 60000,
  //   createTimeoutMillis: 30000,
  //   idleTimeoutMillis: 600000,
  //   createRetryIntervalMillis: 200,
  // }};
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
  // responseMessage.push("1");
  // createUnixSocketPool(config)
  //     .then(async (pool) => {
  //       responseMessage.push("2");
  //       return await pool.schema.hasTable("metadata");
  //     }).then((hasM) => responseMessage.push(hasM))
  //     .catch((error) => {
  //       responseMessage.push(error);
  //     });
  response.send({responseMessage});
  // knexInstance.select().table("metadata");
});
