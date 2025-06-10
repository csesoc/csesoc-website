import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
// import axios from 'axios';
import Article from '@/components/Media/article-template';

export default function ArticlePage() {
  return (
    <section className="flex flex-col min-h-screen justify-between py-8 xl:px-24 md:px-10 px-5 relative overflow-hidden">
      <Navbar />
      <Article articleName="test-article"/>
      <Footer />
    </section>
  );
}