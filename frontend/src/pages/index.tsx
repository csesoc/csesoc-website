import Navbar from '@/components/Navbar';
import Landing from '@/components/Landing';
import Sponsors from '@/components/Sponsors/index';
import AboutHomePage from '@/components/About/AboutHomepage';
import EventsBrief from '@/components/Event/EventsBrief';

export default function HomePage() {
  return (
    <section className="flex flex-col min-h-screen justify-between py-8 xl:px-24 md:px-10 px-5 relative">
        <Navbar />
        <Landing />
        <AboutHomePage />
        <EventsBrief />
        <Sponsors />
    </section>
  );
}
