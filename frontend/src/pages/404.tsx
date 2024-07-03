import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';

export default function Custom404() {
  return (
    <section className="flex flex-col min-h-screen justify-between py-8 xl:px-24 md:px-10 px-5 relative overflow-hidden">
      <div className="items-center text-center">
        <Navbar />
        <h1 className="text-5xl font-bold pt-24">
          Sorry! We can't find the page you're looking for!
        </h1>
        <p className="text-3xl pt-10">While we may have found some tomfoolery, 
            <br/> <br/>
            We haven't found your page :'(</p>
        <a href='/'>
          <button className="mt-10 bg-white border text-[#3977F8] border-[#A7A6E5] text-lg rounded-xl w-[30%] xl:h-12 h-10">
            Back to saftey
          </button>
        </a>
      </div>

      <Footer />
    </section>
  );
}
