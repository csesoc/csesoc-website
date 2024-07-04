import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Resources from '@/components/Resources';

export default function ResourcesPage() {
  return (
    <section className="flex flex-col min-h-screen justify-between py-8 xl:px-24 md:px-10 px-5 relative overflow-hidden">
      <Navbar />
      <Resources/>
      <Footer />
    </section>
  );
}
