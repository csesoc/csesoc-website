import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
// import axios from 'axios';
import Events from '@/components/Event';
import TabTitle from 'next/head';

export default function EventsPage() {
  return (
    <>
      <TabTitle>
        <title>Events | CSESoc UNSW</title>
      </TabTitle>

      <section className="flex flex-col min-h-screen justify-between pb-8 relative">
        <Navbar />

        <div className="xl:px-24 md:px-10 px-5 ">
          <Events />
          <Footer />
        </div>
      </section>
    </>
  );
}
