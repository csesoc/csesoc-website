import Image from "next/image";

const About = () => {
  return (
    <section className="py-8 xl:px-24 px-10">
      <div className="text-center my-10">
        <p className="text-[#3977F8] font-game text-xl">01</p>
        <h1 className="font-bold text-6xl">ABOUT</h1>
      </div>
      <div className="lg:grid grid-cols-6 flex-1">
        {/* LEFT SIDE */}
        <div className="col-span-2 xl:mx-10 md:mx-5">
          <div className="flex items-center justify-center">
            <Image src="/assets/csesoc_icon.svg" alt="CSESoc Icon" width={150} height={150} />
          </div>
          <h1 className="mt-10 text-3xl font-extrabold">CSESoc</h1>
          <p className="text-[#727B8C] font-medium">unsw-computer-science-soc</p>
          <button className="bg-[#444F6F] w-full my-5 py-2 rounded">Follow</button>
          <p>We are one of the biggest and most active societies at UNSW, catering to over 3500 CSE students spanning across degrees in Computer Science, Software Engineering, Bioinformatics and Computer Engineering.</p>
          <div className="my-4 flex gap-5">
            <Image src="/assets/people_icon.svg" alt="People" width={20} height={20} />
            <div>
              432 <span className="text-[#727B8C]">members</span> · 342 <span className="text-[#727B8C]">subcom</span>
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
          <div className="rounded border border-[#595F6D] p-5 2xl:h-80 xl:h-64 lg:h-48 sm:h-36 h-32 h-full">
            <p className="text-xs">
              csesoc/README<span className="text-[#7A8192]">.md</span>
            </p>
            <p className="mt-5">Lorem Ipsum</p>
          </div>
          <div className="mt-10">
            Pinned
            <div className="sm:flex my-5">
              <div className="p-5 border border-[#595F6D] flex-1 rounded-lg mr-5 w-full sm:mb-0 mb-5">
                <div className="flex text-[#3A76F8]">
                  <Image src="/assets/book_icon.svg" alt="Book" width={20} height={20} />
                  csesoc.unsw.edu.au/<span className="font-semibold">events</span>
                </div>
                <div className="my-5">CSESoc's recent events</div>
                <div className="rounded-full bg-[#CC5421] w-3 h-3" />
              </div>
              <div className="p-5 border border-[#595F6D] flex-1 rounded-lg w-full">
                <div className="flex text-[#3A76F8]">
                  <Image src="/assets/book_icon.svg" alt="Book" width={20} height={20} />
                  csesoc.unsw.edu.au/<span className="font-semibold">socials</span>
                </div>
                <div className="my-5">Follow us on all socials</div>
                <div className="rounded-full bg-[#566ACE] w-3 h-3" />
              </div>
            </div>
            <div className="sm:flex">
              <div className="p-5 border border-[#595F6D] flex-1 rounded-lg mr-5 w-full sm:mb-0 mb-5">
                <div className="flex text-[#3A76F8]">
                  <Image src="/assets/book_icon.svg" alt="Book" width={20} height={20} />
                  csesoc.unsw.edu.au/<span className="font-semibold">join-us</span>
                </div>
                <div className="my-5">Get involved!</div>
                <div className="rounded-full bg-[#E7E923] w-3 h-3" />
              </div>
              <div className="p-5 border border-[#595F6D] flex-1 rounded-lg w-full">
                <div className="flex text-[#3A76F8]">
                  <Image src="/assets/book_icon.svg" alt="Book" width={20} height={20} />
                  csesoc.unsw.edu.au/<span className="font-semibold">contact</span>
                </div>
                <div className="my-5">Contact us via email</div>
                <div className="rounded-full bg-[#CC5421] w-3 h-3" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
