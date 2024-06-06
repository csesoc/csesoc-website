import Footer from '@/components/Footer';
import Hamburger from '@/components/Hamburger';
import Navbar from '@/components/Navbar';

export default function ContactUs() {
  return (
    <section className="flex flex-col min-h-screen justify-between py-8 xl:px-24 md:px-10 px-5 relative overflow-hidden">
      <Navbar />
      <section>
        <p>
          Follow us on social media to be notified of upcoming events and opportunities' or
          something like that
        </p>
      </section>
      <Footer />
    </section>
  );
}
