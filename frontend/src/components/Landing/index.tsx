import Background from '@/components/Background';

const Landing = () => {
  return (
    <section
      className="flex flex-col min-h-screen justify-end py-8 xl:px-24 md:px-10 px-5 relative overflow-hidden"
      id="landing"
    >
      <Background />
      <div className="flex justify-between items-end">
        <div>
          <div className="font-semibold">
            <p>{'<h1>'}</p>
            <h2 className="font-black 2xl:text-8xl lg:text-6xl text-4xl">Hello World!</h2>
            <p>{'</h1>'}</p>
          </div>
          <div className="font-semibold mt-10">
            <p>{'<h2>'}</p>
            <h2 className="font-bold 2xl:text-3xl text-xl">
              We are the principal representative body for{' '}
              <a
                href="https://www.unsw.edu.au/engineering/our-schools/computer-science-and-engineering"
                target="_blank"
                className="text-[#3977F9] relative after:bg-current after:absolute after:h-1 after:w-0 after:bottom-0 after:left-0 hover:after:w-full after:duration-200"
              >
                UNSW computing
              </a>{' '}
              students.
            </h2>
            <p>{'</h2>'}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Landing;
