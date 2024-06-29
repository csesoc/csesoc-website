import Contacts from '@/components/Contacts';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';

export default function ContactUs() {
  return (
    <section className="flex flex-col min-h-screen justify-between py-8 xl:px-24 md:px-10 px-5 relative overflow-hidden">
      <Navbar />
      <section className="py-8 xl:px-24 sm:px-10 px-5" id="contact-us">
        <div className="text-center my-10">
          <p className="text-[#3977F8] font-game text-xl">05</p>
          <h1 className="font-bold text-6xl">CONTACT US</h1>
        </div>

        <ul>
          <li>
            <h3 className="text-2xl font-semibold pt-5">
              For general enquiries or feedback on our society
            </h3>
            <p className="text-xl my-2">
              Please email{' '}
              <a className="underline" href="mailto:info@csesoc.org.au">
                info@csesoc.org.au
              </a>
              .
            </p>
          </li>
          <li>
            <h3 className="text-2xl font-semibold pt-5">For feedback on CSESoc Media</h3>
            <p className="text-xl my-2">
              Please email{' '}
              <a className="underline" href="mailto:media@csesoc.org.au">
                media@csesoc.org.au
              </a>
              .
            </p>
          </li>
          <li>
            <h3 className="text-2xl font-semibold pt-5">For enquiries about sponsorship</h3>
            <p className="text-xl my-2">
              Please email{' '}
              <a className="underline" href="mailto:sponsorship@csesoc.org.au">
                sponsorship@csesoc.org.au
              </a>
              .
            </p>
          </li>
          <li>
            <h3 className="text-2xl font-semibold pt-5">For sharing opportunities with our members</h3>
            <p className="text-xl my-2">
              Please fill out{' '}
              <a className="underline" href="https://forms.gle/7kk3RRBJbXo3Sip86">
                this form
              </a>
              .
            </p>
            {/* <iframe
              className="w-1/2 h-[80vh] self-center"
              src="https://forms.gle/7kk3RRBJbXo3Sip86"
            ></iframe> */}
          </li>
        </ul>

        <div className="my-10">
          <p className="text-2xl font-semibold pt-5">
            And be sure to follow us on social media to be notified of upcoming events and
            opportunities!
          </p>
          <div className='pb-28'>
            <Contacts />
          </div>
        </div>
      </section>
      <Footer />
    </section>
  );
}
