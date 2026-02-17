import { Mutex } from "async-mutex";
import { inspect } from "util";
import { FacebookError, Result, ResultType } from "../util";

class EventInfo {
  // god forbid a class have public members
  public id: string;
  public title: string;
  public startTime: string;
  public endTime?: string;
  public location: string;
  public imageUrl: string;
  public link: string;

  constructor(
    id: string,
    title: string,
    startTime: string,
    endTime: string | undefined,
    location: string,
    imageUrl: string
  ) {
    this.id = id;
    this.title = title;
    this.startTime = startTime;
    this.endTime = endTime;
    this.location = location;
    this.imageUrl = imageUrl;
    // would use link as getter but getters are not enumerable so it doesn't appear in JSON.stringify :skull:
    // maybe a cursed fix would be to use Object.defineProperty LOL
    this.link = `https://www.facebook.com/events/${id}`;
  }
}

interface FacebookEvent {
  id: string;
  name: string;
  cover?: { source: string };
  place?: { name: string };
  start_time: string;
  end_time?: string;
}

interface FacebookEventsResponse {
  data: FacebookEvent[];
}

// this isn't in .env for different module compatiblity
const FB_API_VERSION = "v23.0";
const DEFAULT_EVENT_LOCATION = "Everything everywhere all at once!!!";
const DEFAULT_EVENT_IMAGE = "/images/events/default_event.jpg";

// we LOVE global variables
export const eventInfoMutex = new Mutex();
export const eventInfo: EventInfo[] = [];

export async function fetchEvents() {
  const response = await fetch(
    `https://graph.facebook.com/${FB_API_VERSION}/${process.env.FB_EVENT_PAGE_ID}/events?access_token=${process.env.FB_ACCESS_TOKEN}&fields=id,name,cover,place,start_time,end_time`
  );

  if (!response.ok) {
    throw new Error(JSON.stringify(response.json()));

  }
  const res: FacebookEventsResponse = await response.json();

  const processed = res.data.map(
    (e) =>
      new EventInfo(
        e.id,
        e.name,
        e.start_time,
        e.end_time,
        e.place?.name ?? DEFAULT_EVENT_LOCATION,
        e.cover?.source ?? DEFAULT_EVENT_IMAGE
      )
  );

  return processed;
}

export async function fetchEvent(id: string) {
  const response = await fetch(
    `https://graph.facebook.com/${FB_API_VERSION}/${id}?access_token=${process.env.FB_ACCESS_TOKEN}&fields=id,name,cover,place,start_time,end_time`
  );

  if (!response.ok) {
    throw new Error(`Couldn't fetch details for event ${id}\n${JSON.stringify(response.json())}`);
  }
  const res: FacebookEvent = await response.json();

  return new EventInfo(
    res.id,
    res.name,
    res.start_time,
    res.end_time,
    res.place?.name ?? DEFAULT_EVENT_LOCATION,
    res.cover?.source ?? DEFAULT_EVENT_IMAGE
  );
}
