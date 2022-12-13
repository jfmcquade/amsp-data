import * as functions from "firebase-functions";

/** ********************
 * http callable functions
 * (can be called programmatically from app code)
 *********************/

export const uploadToStorageBucket = functions.https.onCall((data, context) => {
  // TODO: logic to connect to storage bucket and upload file(s)
  // Should probably save the file with a randomly generated UUID as its name,
  // and return this value
  // ...
  // For now, return a dummy UID
  return {
    message: "uploadToStorageBucket() function called successfully",
    fileUid: "935e6212-7a2b-11ed-a1eb-0242ac120002",
  };
});
