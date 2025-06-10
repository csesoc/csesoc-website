import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';

export default function Custom404() {
  return (
    <section className="flex flex-col min-h-screen justify-between py-8 xl:px-24 md:px-10 px-5 relative">
      <div className="items-center text-center">
        <Navbar />
        <h1 className="text-5xl font-bold pt-24">404 - Page Not Found</h1>
        <p className="text-4xl pt-10">
          Sorry! We can't find the page you're looking for!
          <br />
        </p>
        <div className="opacity-0 transition-opacity duration-200 hover:opacity-100">
          <p className="text-2xl pt-10">Oops! This page must have been garbage collected.</p>
        </div>
        <a href="/">
          <button className="mt-10 bg-white border text-[#3977F8] border-[#A7A6E5] text-lg rounded-xl w-[30%] xl:h-12 h-10 transition-all duration-200 hover:bg-[#F3F4F6] hover:text-[#1A202C]">
            Back to safety
          </button>
        </a>
      </div>

      <Footer />
    </section>
  );
}
