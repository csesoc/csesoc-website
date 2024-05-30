import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import axios from 'axios';

export default function EventsPage() {
  const pingBackend = async () => {
    axios
      .get(
        `http://${process.env.NEXT_PUBLIC_BACKEND_HOST}:${process.env.NEXT_PUBLIC_BACKEND_PORT}/ping`
      )
      .then((resp) => console.log(resp.data))
      .catch((error) => console.log(error.message));
  };

  return (
    <section className="flex flex-col min-h-screen justify-between py-8 xl:px-24 md:px-10 px-5 relative overflow-hidden">
      <Navbar />
      <button onClick={() => pingBackend()}>Ping backend</button>
      <Footer />
    </section>
  );
}
