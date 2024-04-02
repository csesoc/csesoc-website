import Image from "next/image";
import Landing from "@/components/Landing";
import Sponsors from "@/components/Sponsors/index";
import About from "@/components/About";
import Event from "@/components/Event";
import ResourcesAndContacts from "@/components/ResourcesAndContacts"

export default function Home() {
  return (
    <section>
      <Landing />
      <About />
      <Event />
      <ResourcesAndContacts />
      <Sponsors />
    </section>
  );
}
