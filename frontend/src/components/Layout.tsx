import Navbar from './Navbar';
import Footer from './Footer';
import React from 'react';

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <section className="flex flex-col min-h-screen justify-between py-8 xl:px-24 md:px-10 px-5 relative">
      <Navbar />
      {children}
      <Footer />
    </section>
  );
};

export default Layout;
