export type resourceCards = {
  id: string;
  href: string;
  svg: string;
  alt: string;
  title: string;
  desc: string;
  width: number;
  height: number;
};

export const stage1: resourceCards[] = [
  {
    id: 's1-1',
    href: 'https://circles.devsoc.app/',
    svg: '/assets/circles_logo.svg',
    alt: 'Circles',
    title: 'Circles',
    desc: 'A UNSW degree planner where you can explore and validate your degree structure.',
    width: 60,
    height: 60
  }
];

export const stage2: resourceCards[] = [
  {
    id: 's2-1',
    href: 'https://structs.sh/',
    svg: '/assets/structs_logo.svg',
    alt: 'Structs.sh',
    title: 'Structs.sh',
    desc: 'An educational data structures and algorithms platform.',
    width: 70,
    height: 70
  },
  {
    id: 's2-2',
    href: 'https://freerooms.devsoc.app/',
    svg: '/assets/freerooms_logo.svg',
    alt: 'Freerooms',
    title: 'Freerooms',
    desc: 'A tool for browsing rooms and timetable schedules on campus.',
    width: 70,
    height: 70
  },
  {
    id: 's2-3',
    href: 'https://notangles.devsoc.app/',
    svg: '/assets/notangles_logo.svg',
    alt: 'Notangles',
    title: 'Notangles',
    desc: 'Trimester timetabling tool - no more timetable tangles!',
    width: 70,
    height: 70
  },
  {
    id: 's2-4',
    href: 'https://unilectives.devsoc.app/',
    svg: '/assets/unilectives_logo.svg',
    alt: 'unilectives',
    title: 'unilectives',
    desc: 'Read course electives to help you pick your electives or even write your own!',
    width: 70,
    height: 70
  }
];

export const stage3: resourceCards[] = [
  {
    id: 's3-1',
    href: 'https://learn.csesoc.org.au/',
    svg: '/assets/csesoclearn_logo.svg',
    alt: 'CSESoc Learn',
    title: 'CSESoc Learn',
    desc: 'Your learning outside the classroom starts here',
    width: 50,
    height: 50
  },
  {
    id: 's3-2',
    href: 'https://media.csesoc.org.au/',
    svg: '/assets/csesocmedia_logo.svg',
    alt: 'CSESoc Media',
    title: 'CSESoc Media',
    desc: 'All things content',
    width: 60,
    height: 60
  },
  {
    id: 's3-3',
    href: 'https://media.csesoc.org.au/first-year-guide-2024/',
    svg: '/assets/firstyearguide.svg',
    alt: 'First Year Guide',
    title: 'First Year Guide',
    desc: 'The ultimate guide to conquering your first year at CSE',
    width: 60,
    height: 60
  },
  {
    id: 's3-4',
    href: 'https://media.csesoc.org.au/cse-enrol/',
    svg: '/assets/enrolmentguide.svg',
    alt: 'Enrolment Guide',
    title: 'Enrolment Guide',
    desc: 'Learn how to get a headstart on uni',
    width: 60,
    height: 60
  }
];
