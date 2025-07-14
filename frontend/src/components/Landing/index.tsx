import Background from '@/components/Background';
import Navbar from '@/components/Navbar';
import Loading from '../Animations/Loading';
import FadeEnterAnimation from '../Animations/FadeEnterAnimation';
import { motion } from 'framer-motion';

const Landing = () => {
  return (
    <section
      className="flex flex-col min-h-screen justify-between py-8 xl:px-24 md:px-10 px-5 relative overflow-hidden"
      id="landing"
    >
      <Loading />
      <motion.div
        initial={{ opacity: 0, y: -30}}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.5,
          delay: 1,
        }}
      >
        <Navbar />
      </motion.div>
      <Background />
      <div className="flex justify-between items-end">
        <div>
          <FadeEnterAnimation delay={1.2} viewport={0}>
            <div className="font-semibold">
              <p>{'<h1>'}</p>
              <h2 className="font-black 2xl:text-8xl lg:text-6xl text-4xl">Hello World!</h2>
              <p>{'</h1>'}</p>
            </div>
          </FadeEnterAnimation>
          <FadeEnterAnimation delay={1.3} viewport={0}>
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
          </FadeEnterAnimation>
        </div>
      </div>
    </section>
  );
};

export default Landing;
