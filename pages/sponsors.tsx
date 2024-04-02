import Image from "next/image";
import Landing from "@/components/Landing";
import SponsorsPage from "@/components/Sponsors/subpage";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <section className="flex flex-col min-h-screen justify-between py-8 xl:px-24 md:px-10 px-5 relative overflow-hidden">
      <Navbar/>
      <SponsorsPage/>
      <Footer/>
    </section>
  );
}
