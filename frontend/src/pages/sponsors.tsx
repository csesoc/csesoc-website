import Layout from '@/components/Layout';
import { useState } from 'react';
import { diamondLinks, goldLinks, silverLinks, sponsorInfo } from '@/../public/data/sponsorInfos';
import SponsorModal from '@/components/Sponsors/SponsorModal';

export default function SponsorsPage() {
  const logostyle =
    'grow-on-hover cursor-pointer transform transition-transform duration-300 hover:scale-105';

  const [showModal, setShowModal] = useState(false);
  const [information, setInformation] = useState<sponsorInfo | null>(null);

  return (
    <Layout>
      <section className="py-8">
        <h2 className="text-4xl font-black text-center font-bold">Diamond Sponsors</h2>
        <div>
          <div className="w-100 flex flex-col gap-16">
            {showModal && (
              <SponsorModal
                sponsorInfo={information}
                setFalse={() => {
                  setShowModal(false);
                }}
              />
            )}
            <div className="flex flex-wrap rounded-[1rem] px-14 py-10 mb-14 gap-16 justify-center rounded border-2 border-[#595F6D] my-10">
              {diamondLinks.map((item, index) => {
                return (
                  <div
                    key={index}
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
          </div>
        </div>
        <h2 className="text-4xl font-black text-center font-bold">Gold Sponsors</h2>
        <div>
          <div className="flex flex-wrap rounded-[1rem] px-14 py-10 mb-14 gap-16 justify-evenly rounded border-2 border-[#595F6D] my-10">
            {goldLinks.map((item, index) => {
              return (
                <div
                  key={index}
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
        </div>
        <h2 className="text-4xl font-black text-center font-bold">Silver Sponsors</h2>
        <div>
          <div className="flex flex-wrap rounded-[1rem] px-14 py-10 mb-14 gap-16 justify-evenly rounded border-2 border-[#595F6D] mt-10">
            {silverLinks.map((item, index) => {
              return (
                <div
                  key={index}
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
        </div>
      </section>
    </Layout>
  );
}
