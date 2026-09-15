import Navbar from '@/components/Navbar';
import Landing from '@/components/Landing';
import Sponsors from '@/components/Sponsors/index';
import AboutHomePage from '@/components/About/AboutHomepage';
import EventsBrief from '@/components/Event/EventsBrief';
import Footer from '@/components/Footer';
import TabTitle from 'next/head';


export default function HomePage() {
  return (
    <>
      <TabTitle>
        <title>CSESoc UNSW</title>
      </TabTitle>

      <section>
        <div className="h-8"></div>
        
        <Navbar />

        <div className="-mt-36">
            <Landing />
        </div>

        <AboutHomePage />
        {/* <EventsBrief /> */}
        <Sponsors />
        <section
            className="flex flex-col py-8 xl:px-24 sm:px-10 px-8 relative mt-20"
        >
            <Footer />
        </section>
      </section>
    </>
    
  );
}
