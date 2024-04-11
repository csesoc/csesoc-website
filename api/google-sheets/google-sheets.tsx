import { google } from "googleapis";

export const getGoogleSheetsData = async (range: string) => {
  const auth = await google.auth.getClient({
    projectId: process.env.GOOGLE_API_PROJECT_ID,
    credentials: {
      type: "service_account",
      private_key: process.env.GOOGLE_API_PRIVATE_KEY,
      client_email: process.env.GOOGLE_API_CLIENT_EMAIL,
      client_id: process.env.GOOGLE_API_CLIENT_ID,
      token_url: "https://oauth2.googleapis.com/token",
      universe_domain: "googleapis.com",
    },
    scopes: ["https://www.googleapis.com/auth/spreadsheets.readonly"],
  });

  const sheets = google.sheets({ version: "v4", auth });

  const data = await sheets.spreadsheets.values.get({
    spreadsheetId: process.env.GOOGLE_API_SPREADSHEET_ID,
    range: range,
  });

  return data.data.values;
}