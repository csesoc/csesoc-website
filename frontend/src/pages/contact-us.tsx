import Contacts from '@/components/Contacts';
import Layout from '@/components/Layout';
import PageBody from '@/components/PageBody';
import PageTitle from '@/components/PageTitle';

export default function ContactUsPage() {
  return (
    <Layout>
      <PageTitle title="CONTACT US" />
      
      <PageBody>
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
      </PageBody>
    </Layout>
  );
}
