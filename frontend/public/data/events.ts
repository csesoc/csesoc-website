export type eventInfo = {
  title: string;
  startTime: string;
  endTime: string;
  location: string;
  // description: string;
  image: string;
  link: string;
};

export const events: eventInfo[] = [
  {
    title: "CSESoc Annual General Meeting",
    startTime: "Wednesday, 30 September 2026 17:00:00",
    endTime: "Wednesday, 30 September 2026 19:00:00",
    location: "Colombo Theatre A",
    image: "/images/events/agm_2026.png",
    link: "https://www.facebook.com/events/28214795838201529"
  },
  {
    title: "Terraria-rium",
    startTime: "Thursday, 1 October 2026 12:00:00",
    endTime: "Thursday, 1 October 2026 14:00:00",
    location: "UNSW Quad",
    image: "/images/events/terraria-rium.png",
    link: "https://www.facebook.com/events/911195228490836"
  }
  // {
  //   title: "CSESoc x BoulderSoc Bouldering Night",
  //   startTime: "Thursday, 29 October 2026 17:00:00",
  //   endTime: "Thursday, 29 October 2026 20:00:00",
  //   location: "9 Degrees Waterloo",
  //   image: "/images/events/bouldering_night.png",
  //   link: "LINK_MISSING"
  // }
];

export const previousEvents: eventInfo[] = [
  {
    title: "Brawl Stars Tournament",
    startTime: "Thursday, 29 May 2025 20:00:00",
    endTime: "Thursday, 29 May 2025 22:30:00",
    location: "Online via Discord",
    image: "/images/events/brawl_stars.jpg",
    link: "https://www.facebook.com/events/1251081513377441"
  },
  {
    title: "Flower Exchange",
    startTime: "Wednesday, 23 Apr 2025 13:00:00",
    endTime: "Wednesday, 23 Apr 2025 15:00:00",
    location: "The Quad, UNSW",
    image: "/images/events/flower_exchange.jpg",
    link: "https://www.facebook.com/events/623535984011063"
  },
  {
    title: "All the Stars Pubcrawl",
    startTime: "Friday, 28 Mar 2025 19:00:00",
    endTime: "Friday, 28 Mar 2025 23:30:00",
    location: "Meet at Hyde Park",
    image: "/images/events/all_the_stars.jpg",
    link: "https://www.facebook.com/events/1171496917957222"
  },
  {
    title: "Wheelchair Basketball Tournament",
    startTime: "Sunday, 13 Apr 2025 13:00:00",
    endTime: "Sunday, 13 Apr 2025 16:00:00",
    location: "UNSW Village Green (Multi-purpose caged courts near Sam Cracknell Pavilion)",
    image: "/images/events/wheelchair_basketball.jpg",
    link: "https://www.facebook.com/events/3852672894949394"
  }
];
