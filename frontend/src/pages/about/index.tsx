import Layout from "@/components/Layout";
import PageTitle from "@/components/PageTitle";
import Image from 'next/image';
import Link from 'next/link';
import TabTitle from 'next/head';

export default function AboutPage() {
  return (
    <Layout>
      <TabTitle>
        <title>About Us | CSESoc UNSW</title>
      </TabTitle>

      <PageTitle title="ABOUT US" />
      <section className="py-8 xl:px-24 sm:px-10 px-5">
        <div className="flex justify-center items-center">
          <div className="lg:grid grid-cols-6 flex-1 max-w-[90rem]">
            {/* LEFT SIDE */}
            <div className="col-span-2 md:mx-5">
              <div className="flex items-center justify-center">
                <Image src="/assets/csesoc_icon.svg" alt="CSESoc Icon" width={150} height={150} />
              </div>
              <h2 className="mt-10 text-3xl font-extrabold">CSESoc</h2>
              <p className="text-[#727B8C] font-medium">unsw-computer-science-engineering-society</p>
              <a href="https://github.com/csesoc/" target="_blank">
                <button className="bg-[#444F6F] w-full my-5 py-2 rounded hover-animate">Follow</button>
              </a>
              <p>
                CSESoc is the principal representative body for UNSW computing students.
              </p>
              <div className="my-4 flex gap-5">
                <Image src="/assets/people_icon.svg" alt="People" width={20} height={20} />
                <div>
                  16k <span className="text-[#727B8C]">members</span> · 146{' '}
                  <span className="text-[#727B8C]">internal members</span>
                </div>
              </div>
              <div className="my-4 flex gap-5">
                <Image src="/assets/location_icon.svg" alt="Location" width={20} height={20} />
                Sydney, Australia
              </div>
              <div className="flex gap-5">
                <Image src="/assets/mail_icon.svg" alt="Mail" width={20} height={20} />
                <a href="mailto:info@csesoc.org.au" className="hover:underline">info@csesoc.org.au</a>
              </div>
            </div>
            {/* RIGHT SIDE */}
            <div className="col-span-4 lg:mt-0 mt-10">
              <div className="rounded border border-[#595F6D] p-5 h-auto">
                <p className="text-xs">
                  csesoc/README<span className="text-[#7A8192]">.md</span>
                </p>
                <div className="mt-5">
                  <p>
                    CSESoc is the official representative body of computing students at UNSW. We are one of the 
                    largest and most active societies at UNSW, and the largest computing society in the southern hemisphere. 
                    CSESoc comprises over 16k members spanning across various degrees including Computer Science, Software Engineering, 
                    Bioinformatics and Computer Engineering. We are here to fulfil the social, personal and professional 
                    needs of CSE students, and promote computing through a variety of forms.
                  </p>
                  <br />
                  <p>
                    We are a society for the students, by the students. Here’s an overview of what we do:
                  </p>

                  <ul className="list-disc">
                    <li className="ml-6">Run weekly social and educational events, including trivia, movie, boardgames nights, LAN parties, workshops, coding competitions, tech talks, and our famous free weekly BBQ</li>
                    <li className="ml-6">Create original media content, including Podcasts, articles, YouTube videos, and live streams</li>
                    <li className="ml-6">Run a highly successful First Year Camp and Peer Mentoring program, offering new CSE students (both undergraduate and postgraduate) a chance to meet and mingle with other newcomers</li>
                    <li className="ml-6">Engage students with industry sponsors and representatives to develop their professional capacity and curiosity</li>
                    <li className="ml-6">Develop our own open-source projects for students to get learn new skills and develop tools for our community</li>
                    <li className="ml-6">Facilitate an online community of ~8k Discord users, ~9.5k Facebook followers, ~1.9k YouTube subs, and ~7.7k Instagram followers</li>
                  </ul>
                </div>
              </div>
              <div className="mt-10">
                Pinned
                {/* TODO: refactor all of this */}
                <div className="sm:flex my-5">
                  <div className="p-5 border border-[#595F6D] flex-1 rounded-lg mr-5 w-full sm:mb-0 mb-5">
                    <div className="flex text-[#3A76F8]">
                      <Image src="/assets/book_icon.svg" alt="Book" width={20} height={20} className="mr-2" />
                      <Link href="/about/execs-directors-subcoms">
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
    </Layout>
  );
}
