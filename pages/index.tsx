import Image from "next/image";
import Landing from "@/components/Landing";
import About from "@/components/About";
import Event from "@/components/Event";

export default function Home() {
  return (
    <section>
      <Landing />
      <About />
      <Event />
    </section>
  );
}
