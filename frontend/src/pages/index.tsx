import Navbar from '@/components/Navbar';
import Landing from '@/components/Landing';
import Sponsors from '@/components/Sponsors/index';
import AboutHomePage from '@/components/About/AboutHomepage';
import EventsBrief from '@/components/Event/EventsBrief';
import TabTitle from 'next/head';

export default function HomePage() {
  return (
    <>
      <TabTitle>
        <title>CSESoc UNSW</title>
      </TabTitle>

      <section>
        <Navbar />

        <div className="-mt-36">
          <Landing />
        </div>

        <AboutHomePage />
        <EventsBrief />
        <Sponsors />
      </section>
    </>
  );
}
