import Layout from '@/components/Layout';
import { useState } from 'react';
import { diamondLinks, goldLinks, silverLinks, sponsorInfo } from '@/../public/data/sponsorInfos';
import SponsorModal from '@/components/Sponsors/SponsorModal';
import PageTitle from '@/components/PageTitle';

export default function SponsorsPage() {
  const logostyle = 'grow-on-hover cursor-pointer transform transition-transform duration-300 hover:scale-105';
  const logodiv = 'block gap-y-8 h-14';
  const background = 'rgba(57, 119, 248, 0.6)';

  const [showModal, setShowModal] = useState(false);
  const [information, setInformation] = useState<sponsorInfo | null>(null);

  return (
    <Layout>
      <PageTitle title="SPONSORS" />
      
      <section className="py-8">
        <div className="flex justify-center items-center mb-20">
          <div className="w-100 flex flex-col gap-16">
            {showModal && (
              <SponsorModal
                sponsorInfo={information}
                setFalse={() => {
                  setShowModal(false);
                }}
              />
            )}
            <div
              style={{ backgroundColor: `${background}` }}
              className="flex flex-wrap rounded-[1rem] pl-14 py-14 gap-16 items-center"
            >
              <h2 className="text-4xl font-black">Diamond Sponsors</h2>
              {diamondLinks.map((item, index) => {
                return (
                  <div
                    key={index}
                    className={`${logodiv}`}
                    onClick={() => {
                      setInformation(item);
                      setShowModal(true);
                    }}
                  >
                    <img className={`h-14 ${logostyle}`} src={item.svg} alt={item.alt} />
                  </div>
                );
              })}
            </div>
            <div
              style={{ backgroundColor: `${background}` }}
              className="flex flex-wrap rounded-[1rem] px-14 py-14 gap-16 items-center"
            >
              <h2 className="text-4xl font-black">Gold Sponsors</h2>
              {goldLinks.map((item, index) => {
                return (
                  <div
                    key={index}
                    className=""
                    onClick={() => {
                      setInformation(item);
                      setShowModal(true);
                    }}
                  >
                    <img className={`h-6 ${logostyle}`} src={item.svg} alt={item.alt} />
                  </div>
                );
              })}
            </div>
            <div
              style={{ backgroundColor: `${background}` }}
              className="flex flex-wrap rounded-[1rem] px-14 py-14 gap-16 items-center"
            >
              <h2 className="text-4xl font-black">Silver Sponsors</h2>
              {silverLinks.map((item, index) => {
                return (
                  <div
                    key={index}
                    className="h-14"
                    onClick={() => {
                      setInformation(item);
                      setShowModal(true);
                    }}
                  >
                    <img className={`h-8 ${logostyle}`} src={item.svg} alt={item.alt} />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
