import Contacts from '@/components/Contacts';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';

export default function ContactUs() {
  return (
    <section className="flex flex-col min-h-screen justify-between py-8 xl:px-24 md:px-10 px-5 relative overflow-hidden">
      <Navbar />
      <section>
        <p className="text-xl pt-10">
          CSESoc is the official representative body of computing students at UNSW. We are here to
          fulfil the social, personal and professional needs of CSE students, and promote computing
          through a variety of forms.
        </p>
        <ul>
          <li>
            <h3 className="text-2xl font-bold pt-5">
              For general enquiries or feedback on our society
            </h3>
            <p className="text-xl">
              Please email{' '}
              <a className="underline" href="mailto:info@csesoc.org.au">
                info@csesoc.org.au
              </a>
            </p>
          </li>
          <li>
            <h3 className="text-2xl font-bold pt-5">For feedback on CSESoc Media</h3>
            <p className="text-xl">
              Please email{' '}
              <a className="underline" href="mailto:media@csesoc.org.au">
                media@csesoc.org.au
              </a>
            </p>
          </li>
          <li>
            <h3 className="text-2xl font-bold pt-5">For enquiries about sponsorship</h3>
            <p className="text-xl">
              Please email{' '}
              <a className="underline" href="mailto:sponsorship@csesoc.org.au">
                sponsorship@csesoc.org.au
              </a>
            </p>
          </li>
          <li>
            <h3 className="text-2xl font-bold pt-5">For sharing opportunities with our members</h3>
            <p className="text-xl">
              Please fill out{' '}
              <a className="underline" href="https://forms.gle/7kk3RRBJbXo3Sip86">
                this form
              </a>
            </p>
            <iframe
              className="w-1/2 h-[80vh] self-center"
              src="https://forms.gle/7kk3RRBJbXo3Sip86"
            ></iframe>
          </li>
        </ul>
      </section>
      <section className="py-5">
        <p className="text-xl">
          And be sure to follow us on social media to be notified of upcoming events and
          opportunities!
        </p>
        <div className='pb-28'>
          <Contacts />
        </div>
      </section>

      <Footer />
    </section>
  );
}
