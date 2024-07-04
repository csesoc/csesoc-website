import Image from "next/image";

export default function AboutHomePage() {
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
                <h2 className="text-3xl font-extrabold">CSESoc</h2>
                <button className="bg-[#444F6F] w-full my-5 py-2 rounded">Follow</button>
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
                    <br/><br/>
                    We are here to fulfil the social, personal and 
                    professional needs of CSE students, and promote computing through a variety of forms.
                    <br/><br/>
                    Learn more <a href="/about" className="text-[#3977F9]">about us!</a>
                  </p>

                </div>
              </div>
            </div>
          </div>
        </section>
      );
}