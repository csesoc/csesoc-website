import Layout from '@/components/Layout';
import Image from 'next/image';
import { resourceCards, stage1, stage2, stage3 } from '@/../public/data/resourceCards';
import PageTitle from '@/components/PageTitle';
import TabTitle from 'next/head';
import FadeInAnimation from '@/components/Animations/FadeInAnimation';

export default function ResourcesPage() {

  const animationSequence = {
    title: 0,
    mainContent: 0.2,
  };

  const boxStyling =
    'border border-[#595F6D] rounded-lg hover:border-[#788093] hover:bg-[#070034] hover:bg-opacity-75 transition-all duration-300';

  return (
    <Layout>
      <TabTitle>
        <title>Resources | CSESoc UNSW</title>
      </TabTitle>

      <FadeInAnimation delay={animationSequence.title}>
        <PageTitle title="RESOURCES" />
      </FadeInAnimation>
      
      <section className="bg-no-repeat bg-center py-8 px-15 min-h-screen flex justify-center items-center">
        <div className="2xl:w-[90rem] xl:w-[75rem] w-[90%]">
          <FadeInAnimation delay={animationSequence.mainContent} className="relative">
            <Image src="assets/resources_bg.svg" alt="Background" className="-z-50 absolute" fill />

            <div className="flex">
              <span className="text-lg">Made by</span>
              <Image
                src="/assets/csesoc_logo.svg"
                alt="CSESoc Logo"
                width={100}
                height={100}
                className="pl-2 transform transition-transform duration-300 hover:scale-105"
              />
            </div>

            <div className="py-8 bg-no-repeat bg-center">
              <div className="grid grid-cols-4 1 gap-x-9 gap-y-5">
                {stage3.map((item: resourceCards) => {
                  return (
                    <a
                      key={item.id}
                      href={item.href}
                      target="_blank"
                      className={`md:col-span-2 col-span-4 p-5 ${boxStyling} flex`}
                    >
                      <div className="flex align-middle items-center pt-2 pb-4 pr-10">
                        <Image
                          src={item.svg}
                          alt={item.alt}
                          draggable="false"
                          width={item.width}
                          height={item.height}
                          className="rounded-md"
                        />
                      </div>
                      <div>
                        <h2 className="mt-5 text-3xl font-extrabold">{item.title}</h2>
                        <p className="mt-7 text-lg mb-5">{item.desc}</p>
                      </div>
                    </a>
                  );
                })}
              </div>
            </div>

            <a href="https://devsoc.app/" target="_blank" rel="noopener noreferrer">
              <div className="flex">
                <span className="text-lg">Made by</span>
                <Image
                  src="/assets/devsoc_logo.svg"
                  alt="DevSoc Logo"
                  width={110}
                  height={110}
                  className="pl-1 transform transition-transform duration-300 hover:scale-105"
                />
              </div>
            </a>
            <div className="py-8 bg-no-repeat bg-center">
              <div className="grid grid-cols-4 1 gap-x-9 gap-y-5">
                {stage1.map((item: resourceCards) => {
                  return (
                    <a
                      key={item.id}
                      href={item.href}
                      target="_blank"
                      className={`col-span-4 p-5 ${boxStyling} flex`}
                    >
                      <div className="flex justify-center align-middle items-center pl-2 pr-10">
                        <Image
                          src={item.svg}
                          alt={item.alt}
                          draggable="false"
                          width={item.width}
                          height={item.height}
                        />
                      </div>
                      <div>
                        <h2 className="mt-5 text-3xl font-extrabold">{item.title}</h2>
                        <p className="mt-7 text-lg mb-5">{item.desc}</p>
                      </div>
                    </a>
                  );
                })}

                {stage2.map((item: resourceCards) => {
                  return (
                    <a
                      key={item.id}
                      href={item.href}
                      target="_blank"
                      className={`xl:col-span-1 col-span-4 p-5 ${boxStyling}`}
                    >
                      <div className="flex align-middle items-center pt-2 pb-4">
                        <Image
                          src={item.svg}
                          alt={item.alt}
                          draggable="false"
                          width={item.width}
                          height={item.height}
                        />
                      </div>
                      <div>
                        <h2 className="mt-5 text-3xl font-extrabold">{item.title}</h2>
                        <p className="mt-7 text-lg mb-5">{item.desc}</p>
                      </div>
                    </a>
                  );
                })}
              </div>
            </div>
          </FadeInAnimation>
        </div>
      </section>
    </Layout>
  );
}
