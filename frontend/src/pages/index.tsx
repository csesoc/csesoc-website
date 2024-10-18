import Landing from '@/components/Landing';
import Sponsors from '@/components/Sponsors/index';
import AboutHomePage from '@/components/About/AboutHomepage';
import EventsBrief from '@/components/Event/EventsBrief';

export default function HomePage() {
  return (
    <section>
      <Landing />
      <AboutHomePage />
      <EventsBrief />
      <Sponsors />
    </section>
  );
}
