import Image from 'next/image';
import { resourceCards, stage1, stage2, stage3 } from '../../../public/data/resourceCards';

const boxStyling =
  'border border-[#595F6D] rounded-lg hover:border-[#788093] hover:bg-[#070034] hover:bg-opacity-75 transition-all duration-300';
const socialsBoxStyling =
  'xl:col-span-1 col-span-3 flex justify-center pt-2 pb-2 border border-[#595F6D] hover:border-[#788093] rounded-lg hover:bg-[#070034] hover:bg-opacity-75 transition-all duration-300';

const Resources = () => {
  return (
    <section className="bg-no-repeat bg-center py-8 px-15 min-h-screen flex justify-center items-center">
      <div className="2xl:w-[90rem] xl:w-[75rem] w-[90%]">
        <div className="relative">
          <Image src="assets/resources_bg.svg" alt="Background" className="-z-50 absolute" fill />

          <div className="text-center my-10">
            <h2 className="font-bold text-6xl">RESOURCES</h2>
          </div>

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
                      <Image src={item.svg} alt={item.alt} draggable="false" width={item.width} height={item.height}/>
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
                    <div className='flex align-middle items-center pt-2 pb-4'>
                      <Image src={item.svg} alt={item.alt} draggable="false" width={item.width} height={item.height}/>
                    </div>
                    <div>
                      <h2 className="mt-5 text-3xl font-extrabold">{item.title}</h2>
                      <p className="mt-7 text-lg mb-5">{item.desc}</p>
                    </div>
                  </a>
                );
              })}

              {stage3.map((item: resourceCards) => {
                return (
                  <a
                    key={item.id}
                    href={item.href}
                    target="_blank"
                    className={`md:col-span-2 col-span-4 p-5 ${boxStyling} flex`}
                  >
                    <div className='flex align-middle items-center pt-2 pb-4 pr-10'>
                      <Image src={item.svg} alt={item.alt} draggable="false" width={item.width} height={item.height} className='rounded-md'/>
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
        </div>
      </div>
    </section>
  );
};

export default Resources;
