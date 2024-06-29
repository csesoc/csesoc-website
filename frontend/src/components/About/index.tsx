import Image from 'next/image';
import Link from 'next/link';

const About = () => {
  return (
    <section className="py-8 xl:px-24 sm:px-10 px-5" id="about">
      <div className="text-center my-10">
        <h2 className="font-bold text-6xl">ABOUT</h2>
      </div>
      <div className="flex justify-center items-center">
        <div className="lg:grid grid-cols-6 flex-1 max-w-[90rem]">
          {/* LEFT SIDE */}
          <div className="col-span-2 md:mx-5">
            <div className="flex items-center justify-center">
              <Image src="/assets/csesoc_icon.svg" alt="CSESoc Icon" width={150} height={150} />
            </div>
            <h2 className="mt-10 text-3xl font-extrabold">CSESoc</h2>
            <p className="text-[#727B8C] font-medium">unsw-computer-science-engineering-society</p>
            <button className="bg-[#444F6F] w-full my-5 py-2 rounded">Follow</button>
            <p>
              CSESoc is the principal representative body for UNSW computing students.
            </p>
            <div className="my-4 flex gap-5">
              <Image src="/assets/people_icon.svg" alt="People" width={20} height={20} />
              <div>
                432 <span className="text-[#727B8C]">members</span> · 342{' '}
                <span className="text-[#727B8C]">subcom</span>
              </div>
            </div>
            <div className="my-4 flex gap-5">
              <Image src="/assets/location_icon.svg" alt="Location" width={20} height={20} />
              Sydney, Australia
            </div>
            <div className="flex gap-5">
              <Image src="/assets/mail_icon.svg" alt="Mail" width={20} height={20} />
              info@csesoc.org.au
            </div>
          </div>
          {/* RIGHT SIDE */}
          <div className="col-span-4 lg:mt-0 mt-10">
            <div className="rounded border border-[#595F6D] p-5 h-auto">
              <p className="text-xs">
                csesoc/README<span className="text-[#7A8192]">.md</span>
              </p>
              <p className="mt-5">
                CSESoc is one of the biggest and most active societies at UNSW, catering to over 3500 CSE
                students spanning across degrees in Computer Science, Software Engineering,
                Bioinformatics and Computer Engineering. 
                <br /><br />
                We are here to fulfil the social, personal and 
                professional needs of CSE students, and promote computing through a variety of forms.
              </p>
            </div>
            <div className="mt-10">
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
