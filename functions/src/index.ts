import {applicationDefault, initializeApp} from "firebase-admin/app";

initializeApp({credential: applicationDefault()});
export {addMetaDataRow, connect} from "./database";
export {uploadToStorageBucket} from "./storage-bucket";

