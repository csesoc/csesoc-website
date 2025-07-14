import Background from '@/components/Background';
import Navbar from '@/components/Navbar';
import Loading from '../Animations/Loading';
import FadeInAnimation from '../Animations/FadeInAnimation';

const Landing = () => {
  const animationSequence = {
    navbar: 0.1,
    h1: 0.3,
    h2: 0.4, 
    background: 2.2,  
  };

  return (
    <section
      className="flex flex-col min-h-screen justify-between py-8 xl:px-24 md:px-10 px-5 relative overflow-hidden"
      id="landing"
    >
      <Loading />
      <FadeInAnimation delay={animationSequence.navbar} yInitial={-30}>
        <Navbar />
      </FadeInAnimation>
      <FadeInAnimation
        delay={animationSequence.background}
        yInitial={0}
        className='absolute'
      >
          <Background />
      </FadeInAnimation>
      <div className="flex justify-between items-end">
        <div>
          <FadeInAnimation delay={animationSequence.h1}>
            <div className="font-semibold">
              <p>{'<h1>'}</p>
              <h2 className="font-black 2xl:text-8xl lg:text-6xl text-4xl">Hello World!</h2>
              <p>{'</h1>'}</p>
            </div>
          </FadeInAnimation>
          <FadeInAnimation delay={animationSequence.h2}>
            <div className="font-semibold mt-10">
              <p>{'<h2>'}</p>
              <h2 className="font-bold 2xl:text-3xl text-xl">
                We are the principal representative body for{' '}
                <a href="https://www.unsw.edu.au/engineering/our-schools/computer-science-and-engineering"
                  target = "_blank"
                  className="text-[#3977F9] relative after:bg-current after:absolute after:h-1 after:w-0 after:bottom-0 after:left-0 hover:after:w-full after:duration-200"
                >
                  UNSW computing
                </a>
                {' '}students.
              </h2>
              <p>{'</h2>'}</p>
            </div>
          </FadeInAnimation>
        </div>
      </div>
    </section>
  );
};

export default Landing;
