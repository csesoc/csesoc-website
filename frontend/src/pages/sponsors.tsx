import Layout from '@/components/Layout';
import { useState } from 'react';
import { diamondLinks, goldLinks, silverLinks, sponsorInfo } from '@/../public/data/sponsorInfos';
import SponsorModal from '@/components/Sponsors/SponsorModal';
import PageTitle from '@/components/PageTitle';
import Carousel from '@/components/Carousel';
import { motion, AnimatePresence } from 'framer-motion';

export default function SponsorsPage() {
  const background = 'rgba(57, 119, 248, 0.6)';

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
      <PageTitle title="Our Sponsors" />

      <section className="py-8">
        <div className="flex justify-center items-center mb-20">
          <div className="w-full flex flex-col gap-16">
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
              className="relative flex flex-col items-center rounded-[1rem] p-14 gap-16 justify-center"
            >

              <div className="absolute top-4 left-8 py-8 px-12 w-full flex justify-around">
                {['Diamond', 'Gold', 'Silver'].map(category => (
                  <h2
                    key={category}
                    className={`text-2xl mb-4 cursor-pointer transform transition-transform duration-300 ease-in-out ${
                      currentCategory === category ? 'text-green-500 scale-110' : 'text-white'
                    } hover:scale-105`}
                    onClick={() => handleCategoryChange(category as 'Diamond' | 'Gold' | 'Silver')}
                  >
                    // {category.toLowerCase()}
                  </h2>
                ))}
              </div>

              <div className="mt-16 w-full flex justify-center flex-wrap gap-24">
                <AnimatePresence mode='wait'>
                  <motion.div
                    key={currentCategory}
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    className="w-full flex justify-center"
                  >
                    <Carousel
                      images={sponsors[currentCategory].map(item => ({
                        ...item,
                        category: currentCategory,
                      }))}
                      onImageClick={handleClick}
                    />
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
