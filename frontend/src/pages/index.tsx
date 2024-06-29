import Landing from '@/components/Landing';
import Sponsors from '@/components/Sponsors/index';
import About from '@/components/About';
import Event from '@/components/Event';
import Resources from '@/components/Resources';

export default function Home() {
  return (
    <section>
      <Landing/>
      <About/>
      <Event/>
      <Resources />
      <Sponsors />
    </section>
  );
}
