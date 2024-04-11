import { EVENTS_SHEET } from "../constants";
import { getGoogleSheetsData } from "../google-sheets/google-sheets"

export const fetchEvents = async () => {
  const range = `${EVENTS_SHEET}!A:H`;
  const events = await getGoogleSheetsData(range);

  console.log(events);

  return events;
}