import { RequestHandler } from "express";

const GAPI_SHEET_ID = "1FUx2KMa5LDGjd8Khm1MMIL101MMkFwcfHGw2ei-3zTo";
const GAPI_SHEET_NAME = "EventsSheet";
const GAPI_SHEET_RANGE = "A:H";

type GetEventsResponse = {
  title: string;
  description: string;
  imageURL: string;
  location: string;
  datetime: Date;
}

export const GetEventsHandler: RequestHandler = async (req, res) => {
  const googleSheetsClient = req.app.get("googleSheetsClient");

  const getSheetResp = await googleSheetsClient.spreadsheets.values.get({
    spreadsheetId: GAPI_SHEET_ID,
    range: `${GAPI_SHEET_NAME}!${GAPI_SHEET_RANGE}`,
  }).catch((error: any) => res.status(500).json({ error }));

  console.log(getSheetResp.data.values);

  res.status(200).json(JSON.stringify(getSheetResp.data.values));
}