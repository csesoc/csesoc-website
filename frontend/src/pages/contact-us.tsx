import FadeInAnimation from '@/components/Animations/FadeInAnimation';
import Contacts from '@/components/Contacts';
import Layout from '@/components/Layout';
import PageBody from '@/components/PageBody';
import PageTitle from '@/components/PageTitle';
import TabTitle from 'next/head';

export default function ContactUsPage() {

  const animationSequence = {
    title: 0,
    mainContent: 0.2,
  }

  return (
    <Layout>
      <TabTitle>
        <title>Contact Us | CSESoc UNSW</title>
      </TabTitle>
      
      <FadeInAnimation delay={animationSequence.title}>
        <PageTitle title="CONTACT US" />
      </FadeInAnimation>

      <FadeInAnimation delay={animationSequence.mainContent}>
        <PageBody>
          <ul>
            <li>
              <h3 className="text-2xl font-semibold pt-5">
                For general enquiries or feedback on our society
              </h3>
              <p className="text-xl my-2">
                <span>Please email </span>
                <a className="underline" href="mailto:info@csesoc.org.au">
                  info@csesoc.org.au
                </a>
                <span>.</span>
              </p>
            </li>
            <li>
              <h3 className="text-2xl font-semibold pt-5">For feedback on CSESoc Media</h3>
              <p className="text-xl my-2">
                <span>Please email </span>
                <a className="underline" href="mailto:media@csesoc.org.au">
                  media@csesoc.org.au
                </a>
                <span>.</span>
              </p>
            </li>
            <li>
              <h3 className="text-2xl font-semibold pt-5">For enquiries about sponsorship</h3>
              <p className="text-xl my-2">
                <span>Please email </span>
                <a className="underline" href="mailto:sponsorship@csesoc.org.au">
                  sponsorship@csesoc.org.au
                </a>
                <span>.</span>
              </p>
            </li>
            {/* <li>
              <h3 className="text-2xl font-semibold pt-5">For sharing opportunities with our members</h3>
              <p className="text-xl my-2">
                <span>Please fill out </span>
                <a className="underline" href="https://forms.gle/7kk3RRBJbXo3Sip86" target="_blank">
                  this form
                </a>
                <span>.</span>
              </p>
            </li> */}
          </ul>

          <div className="my-10">
            <p className="text-2xl font-semibold pt-5">
              And be sure to follow us on social media to be notified of upcoming events and
              opportunities!
            </p>
            <Contacts />
          </div>
        </PageBody>
      </FadeInAnimation>
    </Layout>
  );
}
