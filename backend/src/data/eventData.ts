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

// We are altering the array in place, pray we do not alter it from another thread
// I don't even know if concurrent modification exception is a thing in JS
// Maybe this is a single threaded moment :icant:
export function filterInPlace<T>(
  arr: T[],
  predicate: (value: T, index: number, array: T[]) => boolean
): T[] {
  let write = 0;
  for (let read = 0; read < arr.length; read++) {
    const val = arr[read];
    if (predicate(val, read, arr)) {
      arr[write++] = val;
    }
  }
  arr.length = write;
  return arr;
}

// This one is definitely not thread safe lmao
// TODO fix with a mutex probably
export function replaceInPlace<T>(
  arr: T[],
  predicate: (value: T, index: number, array: T[]) => boolean,
  replacement: T
): number {
  const idx = arr.findIndex(predicate);
  if (idx !== -1) arr[idx] = replacement;
  return idx;
}

// we LOVE global variables
export let eventInfo: EventInfo[] = [];

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

export async function fetchEvents() {
  const response = await fetch(
    `https://graph.facebook.com/${FB_API_VERSION}/${process.env.FB_EVENT_PAGE_ID}/events?access_token=${process.env.FB_ACCESS_TOKEN}&fields=id,name,cover,place,start_time,end_time`
  );

  const res: FacebookEventsResponse = await response.json();

  if (!res || !res.data) {
    console.log("No events found...");
    return;
  }

  const processed = res.data.map(
    (e) =>
      new EventInfo(
        e.id,
        e.name,
        e.start_time,
        e.end_time,
        e.place?.name ?? "Everything everywhere all at once!!!",
        e.cover?.source || "/images/events/default_event.jpg"
      )
  );

  eventInfo = processed;
}

export async function fetchEvent(id: string) {
  const response = await fetch(
    `https://graph.facebook.com/${FB_API_VERSION}/${id}?access_token=${process.env.FB_ACCESS_TOKEN}&fields=id,name,cover,place,start_time,end_time`
  );

  const res: FacebookEvent = await response.json();

  if (!res) {
    throw new Error(`Couldn't get details for event ${id}`);
  }

  return new EventInfo(
    res.id,
    res.name,
    res.start_time,
    res.end_time,
    res.place?.name ?? "Everything everywhere all at once!!!",
    res.cover?.source || "/images/events/default_event.jpg"
  );
}
