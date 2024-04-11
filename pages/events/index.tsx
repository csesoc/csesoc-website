import { EVENTS_SHEET } from "@/api/constants";
import { getGoogleSheetsData } from "@/api/google-sheets/google-sheets";
import Navbar from "@/components/Navbar";
import React, { useEffect, useState } from "react";

export const EventsPage = () => {
  const [events, setEvents] = useState<any[][]>([]);

  const fetchEvents = async () => {
    const range = `${EVENTS_SHEET}!A:H`;
    const events = await getGoogleSheetsData(range);

    if (events) {
      setEvents(events);
    }

    console.log(events);
  }

  useEffect(() => {
    fetchEvents();
  })

  return (
    <section className="flex flex-col min-h-screen justify-between py-8 xl:px-24 md:px-10 px-5 relative overflow-hidden">
      <Navbar />
      <p>hello</p>
    </section>
  );
}

export default EventsPage;