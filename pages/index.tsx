import Image from "next/image";
import Landing from "@/components/Landing";
import Sponsors from "@/components/Sponsors";

export default function Home() {
  return (
    <section>
      <Landing />
      <Sponsors />
    </section>
  );
}
