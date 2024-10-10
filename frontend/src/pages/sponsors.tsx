import Layout from '@/components/Layout';
import { useState } from 'react';
import { diamondLinks, goldLinks, silverLinks, sponsorInfo } from '@/../public/data/sponsorInfos';
import SponsorModal from '@/components/Sponsors/SponsorModal';

export default function SponsorsPage() {
  const logostyle =
    'grow-on-hover cursor-pointer transform transition-transform duration-300 hover:scale-105';

  const [showModal, setShowModal] = useState(false);
  const [information, setInformation] = useState<sponsorInfo | null>(null);
  const [currentCategory, setCurrentCategory] = useState<'Diamond' | 'Gold' | 'Silver'>('Diamond');  

  const sponsors = {
    Diamond: diamondLinks,
    Gold: goldLinks,
    Silver: silverLinks
  }

  const handleClick = (info: sponsorInfo) => {
    setInformation(info);
    setShowModal(true);
  };

  const handleCategoryChange = (category: 'Diamond' | 'Gold' | 'Silver') => {
    setCurrentCategory(category);
  };

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
    exit: { opacity: 0, y: 20, transition: { duration: 0.3 } },
  };

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
            <div className="flex flex-wrap rounded-[1rem] px-14 py-10 gap-16 justify-center rounded border border-[#595F6D] my-10">
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
          <div className="flex flex-wrap rounded-[1rem] px-14 py-10 gap-16 justify-evenly rounded border border-[#595F6D] my-10">
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
          <div className="flex flex-wrap rounded-[1rem] px-14 py-10 gap-16 justify-evenly rounded border border-[#595F6D] mt-10">
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
