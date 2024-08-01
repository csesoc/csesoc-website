import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import axios from 'axios';
import Image from 'next/image';
import Link from 'next/link';

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
      <div className="my-10">
        <h2 className="font-bold text-6xl">EVENTS</h2>
        <div className="my-1">Upcoming</div>
        <div className="flex justify-between">
          <div className="rounded border border-[#595F6D] p-5 h-auto m-2 w-1/3">
            <div className="flex">
              <div className="flex text-[#3A76F8]">
                <Image
                  src="/assets/book_icon.svg"
                  alt="Book"
                  width={20}
                  height={20}
                  className="mr-2"
                />
                <Link
                  href="https://www.facebook.com/events/488426810541966"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="font-semibold hover:underline">1511 Revision Session</span>
                </Link>
              </div>
              <div className="ml-2 px-2 py-1 border border-gray-300 rounded-full text-gray-500 text-xs">
                Public
              </div>
            </div>
            <a
              href="https://www.facebook.com/events/488426810541966"
              target="_blank"
              rel="noopener noreferrer"
            >
              {' '}
              <img
                src="https://scontent.fcbr1-1.fna.fbcdn.net/v/t39.30808-6/452071711_988753003034311_8639445454618177791_n.jpg?stp=dst-jpg_p180x540&_nc_cat=106&ccb=1-7&_nc_sid=75d36f&_nc_ohc=XKzUgPvaqoIQ7kNvgFjF1KQ&_nc_ht=scontent.fcbr1-1.fna&oh=00_AYD8k7HJ8TJTd8JvbCi4aUKdnZ3aH9b2c7xSMtAuSygpcA&oe=66A7DB7A"
                alt="exampleCp"
                className="mr-2 mt-4 mb-4 grow-on-hover cursor-pointer transform transition-transform duration-300 hover:scale-105"
              />
            </a>

            <div className="flex items-center">
              <div className="rounded-full bg-[#CC5421] w-3 h-3" />
              <div className="ml-3 text-gray-500">Media</div>
              <div className="ml-3 text-gray-500">In 1 week</div>
            </div>
          </div>
        </div>
        <div className="flex">
          <Image src="/assets/book_icon.svg" alt="Book" width={20} height={20} className="mr-2" />
          <div className="my-1">Previous</div>
        </div>
        <div className="rounded border border-[#595F6D] h-auto m-2 divide-y divide-[#595F6D]">
          <div>event1</div>
          <div>event2</div>
          <div className="h-auto">
            <div className="m-2">
              {' '}
              <div className="flex m-2">
                <div className="flex text-[#3A76F8]">
                  <Image
                    src="/assets/book_icon.svg"
                    alt="Book"
                    width={20}
                    height={20}
                    className="mr-2"
                  />
                  <Link
                    href="https://www.facebook.com/events/488426810541966"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span className="font-semibold hover:underline">1511 Revision Session</span>
                  </Link>
                </div>
                <div className="ml-2 px-2 py-1 border border-gray-300 rounded-full text-gray-500 text-xs">
                  Public
                </div>
              </div>
              <a
                href="https://www.facebook.com/events/488426810541966"
                target="_blank"
                rel="noopener noreferrer"
              >
                {' '}
              </a>
              <div className="flex items-center">
                <div className="rounded-full bg-[#CC5421] w-3 h-3" />
                <div className="ml-3 text-gray-500">Media</div>
                <div className="ml-3 text-gray-500">2 weeks ago</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <button onClick={() => pingBackend()}>Ping backend</button>

      <Footer />
    </section>
  );
}
