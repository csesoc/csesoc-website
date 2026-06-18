import Layout from '@/components/Layout';
import { useState } from 'react';
import { diamondLinks, goldLinks, silverLinks, sponsorInfo } from '@/../public/data/sponsorInfos';
import SponsorModal from '@/components/Sponsors/SponsorModal';
import { EmojiRain } from 'next-emoji-rain';
import TabTitle from 'next/head';
import FadeInAnimation from '@/components/Animations/FadeInAnimation';

export default function SponsorsPage() {
  const logostyle =
    'grow-on-hover cursor-pointer transform transition-transform duration-300 hover:scale-105';

  const [showModal, setShowModal] = useState(false);
  const [information, setInformation] = useState<sponsorInfo | null>(null);

  const handleSponsorClick = (info: sponsorInfo) => {
    setInformation(info);
    setShowModal(true);
  };

  const handleRainClick = (type: string) => {
    const rainElement = document.getElementById(`${type}Rain`);

    if (!rainElement) return;

    rainElement.classList.toggle('opacity-0', false);
    setTimeout(() => {
      rainElement.classList.toggle('opacity-0', true);
    }, 4000);
  };

  const animationSequence = {
    diamondSponsorsTitle: 0,
    diamondSponsors: 0.1,
    goldSponsorsTitle: 0.2,
    goldSponsors: 0.3,
    silverSponsorsTitle: 0.4,
    silverSponsors: 0.5,
  };

  return (
    <Layout>
      <TabTitle>
        <title>Sponsors | CSESoc UNSW</title>
      </TabTitle>

      <div id="diamondRain" className="opacity-0">
        <EmojiRain emoji="💎" />
      </div>
      <div id="goldRain" className="opacity-0">
        <EmojiRain emoji="🪙" />
      </div>
      <div id="silverRain" className="opacity-0">
        <EmojiRain emoji="🪩" />
      </div>
      <section className="py-8">
        <FadeInAnimation delay={animationSequence.diamondSponsorsTitle}>
        <h2 className="text-4xl font-black text-center font-bold"
          onClick={() => handleRainClick('diamond')}>
          DIAMOND SPONSORS</h2>
        </FadeInAnimation>
        <FadeInAnimation delay={animationSequence.diamondSponsors}>
          <div className="w-100 flex flex-col gap-16">
            {showModal && (
              <SponsorModal
                sponsorInfo={information}
                setFalse={() => setShowModal(false)}
              />
            )}
            <div className="flex flex-wrap rounded-[1rem] px-14 py-10 mb-14 gap-16 justify-center rounded border-2 border-[#595F6D] my-10">
              {diamondLinks.map((item, index) => {
                return (
                  <div key={index} onClick={() => handleSponsorClick(item)}>
                    <img className={`h-16 max-w-xs ${logostyle}`} src={item.svg} alt={item.alt} />
                  </div>
                );
              })}
            </div>
          </div>
        </FadeInAnimation>
        <FadeInAnimation delay={animationSequence.goldSponsorsTitle}>
        <h2
          className="text-4xl font-black text-center font-bold"
          onClick={() => handleRainClick('gold')}
          >GOLD SPONSORS</h2>
        </FadeInAnimation>
        <FadeInAnimation delay={animationSequence.goldSponsors}>
          <div className="flex flex-wrap rounded-[1rem] px-14 py-10 mb-14 gap-16 justify-evenly rounded border-2 border-[#595F6D] my-10">
            {goldLinks.map((item, index) => {
              return (
                <div key={index} onClick={() => handleSponsorClick(item)}>
                  <img className={`h-14 max-w-xs ${logostyle}`} src={item.svg} alt={item.alt} />
                </div>
              );
            })}
          </div>
        </FadeInAnimation>
        <FadeInAnimation delay={animationSequence.silverSponsorsTitle}>
          <h2
            className="text-4xl font-black text-center font-bold"
            onClick={() => handleRainClick('silver')}
            >SILVER SPONSORS</h2>
        </FadeInAnimation>
        <FadeInAnimation delay={animationSequence.silverSponsors}>
          <div className="flex flex-wrap rounded-[1rem] px-14 py-10 mb-14 gap-16 justify-evenly rounded border-2 border-[#595F6D] mt-10">
            {silverLinks.map((item, index) => {
              return (
                <div key={index} onClick={() => handleSponsorClick(item)}>
                  <img className={`h-14 max-w-xs ${logostyle}`} src={item.svg} alt={item.alt} />
                </div>
              );
            })}
          </div>
        </FadeInAnimation>
      </section>
    </Layout>
  );
}
