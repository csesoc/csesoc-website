import Navbar from './Navbar';
import Footer from './Footer';
import React from 'react';

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <section className="flex flex-col min-h-screen justify-between py-8 relative">
      <Navbar />
      
      <div className='xl:px-24 md:px-10 px-5 '>
        {children}
        <Footer />
      </div>
      
    </section>
  );
};

export default Layout;
