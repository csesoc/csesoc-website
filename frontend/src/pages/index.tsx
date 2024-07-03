import Landing from '@/components/Landing';
import Sponsors from '@/components/Sponsors/index';
import Event from '@/components/Event';
import AboutHomePage from '@/components/About/AboutHomepage';

export default function Home() {
  return (
    <section>
      <Landing />
      <AboutHomePage />
      <Event />
      <Sponsors />
    </section>
  );
}
