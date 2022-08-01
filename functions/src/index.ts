import {applicationDefault, initializeApp} from "firebase-admin/app";
// import * as functions from "firebase-functions";
// initializeApp(functions.config().firebase);

initializeApp({credential: applicationDefault()});
export {cloudSqlFunctions} from "./database";
