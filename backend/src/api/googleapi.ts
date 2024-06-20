import { google } from "googleapis";

const GAPI_KEY_FILE_PATH = ".credentials.json";
const GAPI_SCOPES = "https://www.googleapis.com/auth/spreadsheets.readonly";
const GAPI_VERSION = "v4";

export const getGoogleSheetsClient = async () => {
  const authClient = new google.auth.GoogleAuth({ 
    keyFile: GAPI_KEY_FILE_PATH,
    scopes: GAPI_SCOPES,
  });

  const googleSheetsClient = google.sheets({
    version: GAPI_VERSION,
    auth: authClient,
  });

  return googleSheetsClient;
};