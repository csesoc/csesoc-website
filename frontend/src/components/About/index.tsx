import Image from 'next/image';
import Link from 'next/link';
import Github from '../Github';

const About = () => {
  return (
    <section className="py-8 xl:px-24 sm:px-10 px-5" id="about">
      <div className="text-center my-10">
        <p className="text-[#3977F8] font-game text-xl">01</p>
        <h2 className="font-bold text-6xl">ABOUT</h2>
      </div>
      <div className="flex justify-center items-center">
        <div className="lg:grid grid-cols-2 flex-1 max-w-[90rem]">
          {/* LEFT SIDE */}
          <div className="col-span-2">
            <Github/>
          </div>
          {/* RIGHT SIDE */}
          <div className="col-span-4 lg:mt-0 mt-10 pt-8">
            <div className="mt-10 mb-32">
              Pinned
              {/* TODO: refactor all of this */}
              <div className="sm:flex my-5">
                <div className="p-5 border border-[#595F6D] flex-1 rounded-lg mr-5 w-full sm:mb-0 mb-5">
                  <div className="flex text-[#3A76F8]">
                    <Image src="/assets/book_icon.svg" alt="Book" width={20} height={20} className="mr-2" />
                    <Link href="/about/execs-directors-subcommittees">
                      <span className="font-semibold hover:underline">execs-directors-subcoms</span>
                    </Link>
                  </div>
                  <div className="my-5">CSESoc&apos;s execs, directors, subcommittees</div>
                  <div className="rounded-full bg-[#CC5421] w-3 h-3" />
                </div>
                <div className="p-5 border border-[#595F6D] flex-1 rounded-lg w-full">
                  <div className="flex text-[#3A76F8]">
                    <Image src="/assets/book_icon.svg" alt="Book" width={20} height={20} className="mr-2" />
                    <Link href="/about/constitution">
                      <span className="font-semibold hover:underline">constitution</span>
                    </Link>
                  </div>
                  <div className="my-5">Current and past constitutions</div>
                  <div className="rounded-full bg-[#566ACE] w-3 h-3" />
                </div>
              </div>
              <div className="sm:flex my-5">
                <div className="p-5 border border-[#595F6D] flex-1 rounded-lg mr-5 w-full sm:mb-0 mb-5">
                  <div className="flex text-[#3A76F8]">
                    <Image src="/assets/book_icon.svg" alt="Book" width={20} height={20} className="mr-2" />
                    <Link href="/about/our-history">
                      <span className="font-semibold hover:underline">our-history</span>
                    </Link>
                  </div>
                  <div className="my-5">Dive into CSESoc&apos;s history</div>
                  <div className="rounded-full bg-[#E7E923] w-3 h-3" />
                </div>
                <div className="p-5 border border-[#595F6D] flex-1 rounded-lg w-full">
                  <div className="flex text-[#3A76F8]">
                    <Image src="/assets/book_icon.svg" alt="Book" width={20} height={20} className="mr-2" />
                    <Link href="/about/faqs">
                      <span className="font-semibold hover:underline">faqs</span>
                    </Link>
                  </div>
                  <div className="my-5">Frequently asked questions</div>
                  <div className="rounded-full bg-[#CC5421] w-3 h-3" />
                </div>
              </div>
              <div className="my-5">
                <div 
                  className="p-5 border border-[#595F6D] rounded-lg"
                  style={{ width: 'calc(50% - 0.5rem)' }}
                >
                  <div className="flex text-[#3A76F8]">
                    <Image src="/assets/book_icon.svg" alt="Book" width={20} height={20} className="mr-2" />
                    <Link href="/about/election-guide">
                      <span className="font-semibold hover:underline">election-guide</span>
                    </Link>
                  </div>
                  <div className="my-5"> Our election nomination guide</div>
                  <div className="rounded-full bg-[#E7E923] w-3 h-3" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
